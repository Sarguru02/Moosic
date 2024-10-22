"use client";
import StreamView from '@/components/StreamView';
import { useEffect, useState } from 'react';


export default function Component() {
	const [creatorId, setCreatorId] = useState<string | null>(null);
	const [loading, setLoading] = useState(true);
	useEffect(()=>{
		const getUserData = async () => {
			try {
				const res = await fetch("/api/user");
				const data = await res.json();
				setCreatorId(data.user?.id||null);
			} catch (e) {
				console.error("Error fetching the data", e);
			}finally{
				setLoading(false);
			}
		}
		getUserData();
	}, []);
	if(loading){
		return <div> Loading... </div>
	}

	return <StreamView creatorId={creatorId} playVideo={true}/>
}

