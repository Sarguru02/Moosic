	'use server'
import { prismaClient } from "@/lib/db";
import { getServerSession } from "next-auth";

export default async function getUserId(){
	const session = await getServerSession();

	const user = await prismaClient.user.findFirst({
		where: {
			email: session?.user?.email ?? ""
		}
	})
	if(!user) return;
	return user.id;	
}
