"use client";
import { Music } from 'lucide-react';
import { signIn, signOut, useSession } from 'next-auth/react'
import Link from 'next/link';
import React from 'react'
import { Button } from './ui/button';

function AppBar() {
	const session = useSession();


	return (
		<header className="px-4 lg:px-6 h-14 flex items-center border-b border-gray-200 dark:border-gray-800">
			<Link className="flex items-center justify-center" href="#">
				<Music className="h-6 w-6 mr-2 text-blue-400" />
				<span className="font-bold text-blue-100">Moosic</span>
			</Link>
			<nav className="ml-auto flex gap-4 sm:gap-6 items-center">
				<Link className="text-sm font-medium text-blue-100 hover:text-blue-400" href="#features">
					Features
				</Link>
				<Link className="text-sm font-medium text-blue-100 hover:text-blue-400" href="#how-it-works">
					How It Works
				</Link>
				<Link className="text-sm font-medium text-blue-100 hover:text-blue-400" href="#testimonials">
					Testimonials
				</Link>
				{session?.data?.user ? <Button className='rounded bg-slate-700 m-2 p-2 text-white' onClick={() => signOut()}>Sign out</Button> : <Button className="rounded bg-slate-700 m-2 p-2 text-white" onClick={() => signIn()}>Sign in</Button>}
			</nav>
		</header>
	)
}

export default AppBar
