'use client'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import { Music, Users, Radio, Star } from "lucide-react"
import Link from "next/link"

export default function LandingPage() {
	return (
		<div className="flex flex-col min-h-screen bg-gray-900">
			<main className="flex-1">
				<section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-blue-900">
					<div className="container mx-auto px-4 md:px-6">
						<div className="flex flex-col items-center space-y-4 text-center">
							<div className="space-y-2">
								<h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none text-blue-100">
									Let Your Fans Choose the Soundtrack to Your Stream
								</h1>
								<p className="mx-auto max-w-[700px] text-blue-200 md:text-xl">
									Moosic revolutionizes music streaming by putting the power in your fans' hands. Create unforgettable
									streams with a personalized playlist curated by your audience.
								</p>
							</div>
							<div className="space-x-4">
								<Button className="bg-blue-400 text-blue-900 hover:bg-blue-300">Get Started</Button>
								<Button variant="outline" className="bg-transparent text-blue-300 hover:bg-blue-800 border-2 border-blue-400">Learn More</Button>
							</div>
						</div>
					</div>
				</section>
				<section id="features" className="w-full py-12 md:py-24 lg:py-32 bg-gray-900">
					<div className="container mx-auto px-4 md:px-6">
						<h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12 text-blue-100">Features</h2>
						<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
							<Card className="bg-gray-800">
								<CardContent className="flex flex-col items-center space-y-4 p-6">
									<Users className="h-12 w-12 text-blue-400" />
									<h3 className="text-xl font-bold text-blue-100">Fan Interaction</h3>
									<p className="text-center text-blue-200">Engage your audience by letting them choose the music.</p>
								</CardContent>
							</Card>
							<Card className="bg-gray-800">
								<CardContent className="flex flex-col items-center space-y-4 p-6">
									<Radio className="h-12 w-12 text-blue-400" />
									<h3 className="text-xl font-bold text-blue-100">Live Streaming</h3>
									<p className="text-center text-blue-200">Seamlessly integrate with popular streaming platforms.</p>
								</CardContent>
							</Card>
							<Card className="bg-gray-800">
								<CardContent className="flex flex-col items-center space-y-4 p-6">
									<Music className="h-12 w-12 text-blue-400" />
									<h3 className="text-xl font-bold text-blue-100">Vast Music Library</h3>
									<p className="text-center text-blue-200">Access millions of tracks from various genres.</p>
								</CardContent>
							</Card>
						</div>
					</div>
				</section>
				<section id="how-it-works" className="w-full py-12 md:py-24 lg:py-32 bg-blue-900">
					<div className="container mx-auto px-4 md:px-6">
						<h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12 text-blue-100">How It Works</h2>
						<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
							<div className="flex flex-col items-center space-y-4">
								<div className="bg-blue-400 text-blue-900 rounded-full w-12 h-12 flex items-center justify-center text-xl font-bold">1</div>
								<h3 className="text-xl font-bold text-blue-100">Create Your Stream</h3>
								<p className="text-center text-blue-200">Set up your stream and connect to your favorite platform.</p>
							</div>
							<div className="flex flex-col items-center space-y-4">
								<div className="bg-blue-400 text-blue-900 rounded-full w-12 h-12 flex items-center justify-center text-xl font-bold">2</div>
								<h3 className="text-xl font-bold text-blue-100">Invite Your Fans</h3>
								<p className="text-center text-blue-200">Share your unique Moosic link with your audience.</p>
							</div>
							<div className="flex flex-col items-center space-y-4">
								<div className="bg-blue-400 text-blue-900 rounded-full w-12 h-12 flex items-center justify-center text-xl font-bold">3</div>
								<h3 className="text-xl font-bold text-blue-100">Let Them Choose</h3>
								<p className="text-center text-blue-200">Fans vote on songs, and the most popular tracks play on your stream.</p>
							</div>
						</div>
					</div>
				</section>
				<section id="testimonials" className="w-full py-12 md:py-24 lg:py-32 bg-gray-900">
					<div className="container mx-auto px-4 md:px-6">
						<h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12 text-blue-100">What Streamers Say</h2>
						<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
							<Card className="bg-gray-800">
								<CardContent className="flex flex-col space-y-4 p-6">
									<Star className="h-6 w-6 text-yellow-400" />
									<p className="text-blue-200">"Moosic has transformed my streams. My audience loves being part of the music selection!"</p>
									<p className="font-bold text-blue-100">- Alex, Gaming Streamer</p>
								</CardContent>
							</Card>
							<Card className="bg-gray-800">
								<CardContent className="flex flex-col space-y-4 p-6">
									<Star className="h-6 w-6 text-yellow-400" />
									<p className="text-blue-200">"The engagement on my channel has skyrocketed since I started using Moosic. It's a game-changer!"</p>
									<p className="font-bold text-blue-100">- Sarah, Art Streamer</p>
								</CardContent>
							</Card>
							<Card className="bg-gray-800">
								<CardContent className="flex flex-col space-y-4 p-6">
									<Star className="h-6 w-6 text-yellow-400" />
									<p className="text-blue-200">"I love how Moosic brings my community together. It's not just about the music, it's about the shared experience."</p>
									<p className="font-bold text-blue-100">- Mike, Talk Show Host</p>
								</CardContent>
							</Card>
						</div>
					</div>
				</section>
				<section className="w-full py-12 md:py-24 lg:py-32 bg-blue-900">
					<div className="container mx-auto px-4 md:px-6">
						<div className="flex flex-col items-center space-y-4 text-center">
							<div className="space-y-2">
								<h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-blue-100">
									Ready to Revolutionize Your Streams?
								</h2>
								<p className="mx-auto max-w-[600px] text-blue-200 md:text-xl">
									Join Moosic today and start creating unforgettable streaming experiences with your fans.
								</p>
							</div>
							<div className="w-full max-w-sm space-y-2">
								<form className="flex space-x-2">
									<Input className="flex-1 bg-gray-800 text-blue-100 placeholder-blue-300" placeholder="Enter your email" type="email" />
									<Button className="bg-blue-400 text-blue-900 hover:bg-blue-300">Sign Up</Button>
								</form>
								<p className="text-xs text-blue-200">
									By signing up, you agree to our Terms of Service and Privacy Policy.
								</p>
							</div>
						</div>
					</div>
				</section>
			</main>
			<footer className="py-6 w-full shrink-0 px-4 md:px-6 border-t border-gray-800">
				<div className="container mx-auto flex flex-col sm:flex-row justify-between items-center">
					<p className="text-xs text-blue-300">© 2024 Moosic. All rights reserved.</p>
					<nav className="flex gap-4 sm:gap-6 mt-4 sm:mt-0">
						<Link className="text-xs hover:underline underline-offset-4 text-blue-300" href="#">
							Terms of Service
						</Link>
						<Link className="text-xs hover:underline underline-offset-4 text-blue-300" href="#">
							Privacy
						</Link>
					</nav>
				</div>
			</footer>
		</div>
	)
}
