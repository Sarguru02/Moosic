import { prismaClient } from "@/lib/db";
import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";

export async function GET(){
	const session = await getServerSession();
	if(!session) return NextResponse.json({error: "Unauthorized"}, {status: 403});

	const user = await prismaClient.user.findFirst({
		where: {
			email: session?.user?.email ?? ""
		}
	})

	if(!user) return NextResponse.json({error: "Unauthorized"}, {status: 403});
	return NextResponse.json({user})
}
