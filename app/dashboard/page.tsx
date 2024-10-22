"use client"
import 'react-toastify/dist/ReactToastify.css'
import 'react-lite-youtube-embed/dist/LiteYouTubeEmbed.css'
import StreamView from '@/components/StreamView';
interface Video {
	"id": string,
	"type": string,
	"url": string,
	"extractedId": string,
	"title": string,
	"smallImg": string,
	"bigImg": string,
	"active": boolean,
	"userId": string,
	"upvotes": number,
	"haveUpvoted": boolean
}
const creatorId = "5cda7f54-169b-4b4d-a6da-bdd89b384929"
export default function Component() {
	return <StreamView creatorId={creatorId} playVideo={true} />
}
