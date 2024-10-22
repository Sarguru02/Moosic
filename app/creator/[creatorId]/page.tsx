import StreamView from '@/components/StreamView'
import React from 'react'

const page = ({
	params: {
		creatorId
	}
}: {
	params:
	{
		creatorId: string
	}
}) => {
	return (
		<div><StreamView creatorId={creatorId} playVideo={false} /> </div>
	)
}

export default page
