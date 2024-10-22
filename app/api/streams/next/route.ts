import { prismaClient } from "@/lib/db";
import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";

export async function GET() {
	const session = await getServerSession();
	const user = await prismaClient.user.findFirst({
		where: {
			email: session?.user?.email ?? ""
		}
	});
	if (!user) return NextResponse.json({ error: "Unauthorized" }, { status: 403 });

	const mostUpvotedStream = prismaClient.stream.findFirst({
		where: {
			userId: user.id
		},
		orderBy: {
			upvotes: {
				_count: "desc"
			}
		}
	})

	await Promise.all([prismaClient.currentStream.upsert({
		where: {
			userId: user.id
		},
		update: {
			streamId: mostUpvotedStream.id
		},
		create: {
			userId: user.id,
			streamId: mostUpvotedStream.id
		}
	})
	])
}
