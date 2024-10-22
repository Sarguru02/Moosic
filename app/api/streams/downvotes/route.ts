import { prismaClient } from "@/lib/db";
import { getServerSession } from "next-auth";
import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";

const DownvoteSchema = z.object({
	streamId: z.string(),
});

export async function POST(req: NextRequest) {
	const session = await getServerSession();
	const user = await prismaClient.user.findFirst({
		where: {
			email: session?.user?.email ?? ""
		}
	});
	if (!user) return NextResponse.json({ error: "Unauthorized" }, { status: 403 });
	try {
		const data = DownvoteSchema.parse(await req.json());
		await prismaClient.upvote.delete({
			where: {
				userId_streamId: {
					streamId: data.streamId,
					userId: user?.id ?? "",
				}
			}
		})
		return NextResponse.json({ message: "Downvoted!" })

	} catch (e) {
		return NextResponse.json({ message: "Error while upvoting" }, { status: 411 })
	}
}
