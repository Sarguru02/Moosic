import { prismaClient } from "@/lib/db";
import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
// @ts-ignore
import youtubesearchapi from "youtube-search-api";
import { getServerSession } from "next-auth";

const YT_REGEX = new RegExp(/^(https?:\/\/)?(www\.)?(youtube\.com|youtu\.be)\/(watch\?v=|embed\/|v\/|.+\?v=)?([a-zA-Z0-9_-]{11})(&.*)?$/gm);
const createStreamSchema = z.object({
	creatorId: z.string(),
	url: z.string()
})


export async function POST(req: NextRequest) {
	try {
		const data = createStreamSchema.parse(await req.json());
		const isYT = YT_REGEX.test(data.url);
		if (!isYT) return NextResponse.json({ error: "Wrong URL format" }, { status: 411 });
		const extractedId = data.url.split("v=")[1];
		const res = await youtubesearchapi.GetVideoDetails(extractedId);
		const thumbnails = res.thumbnail.thumbnails;
		thumbnails.sort((a: { width: number }, b: { width: number }) => a.width < b.width ? -1 : 1);

		const stream = await prismaClient.stream.create({
			data: {
				userId: data.creatorId,
				type: "YouTube",
				extractedId,
				url: data.url,
				title: res.title ?? "Video not found",
				smallImg: thumbnails.length > 1 ? thumbnails[thumbnails.length - 2].url : thumbnails[thumbnails.length - 1].url ?? "https://uploads.dailydot.com/2018/10/olli-the-polite-cat.jpg?auto=compress&fm=pjpg",
				bigImg: thumbnails[thumbnails.length - 1].url ?? "https://uploads.dailydot.com/2018/10/olli-the-polite-cat.jpg?auto=compress&fm=pjpg"
			}
		});
		return NextResponse.json({ ...stream, hasUpvoted: false, upvotes: 0 });

	} catch (e: any) {
		return NextResponse.json({ error: e.errors }, { status: 411 })
	}
}



export async function GET(req: NextRequest) {
	const creatorId = req.nextUrl.searchParams.get("creatorId");
	if (!creatorId) return NextResponse.json({ error: "CreatorId is required" }, { status: 411 });

	const session = await getServerSession();
	const user = await prismaClient.user.findFirst({
		where: {
			email: session?.user?.email ?? ""
		}
	});


	if (!user) {
		return NextResponse.json({ "message": "Unauthenticated" }, { status: 403 })
	}

	const [streams, activeStream] = await Promise.all([prismaClient.stream.findMany({
		where: {
			userId: creatorId ?? "", 
			played: false
		},
		include: {
			_count: {
				select: {
					upvotes: true
				}
			},
			upvotes: {
				where: {
					userId: user.id ?? ""
				}
			}
		},
	}), prismaClient.currentStream.findFirst({
		where: {
			userId: creatorId
		},
		include: {
			stream: true
		}
	})
	])
	return NextResponse.json({
		streams: streams.map(({ _count, ...rest }) => ({
			...rest,
			upvotes: _count.upvotes,
			haveUpvoted: rest.upvotes.length ? true : false
		})), 
		activeStream
	});
}
