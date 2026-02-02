import React from 'react'
import CampaignCard from '../CampaignCard'

const CampaignsSection = () => {
  const campaigns = [...Array(3)].map((_, i) => {
    return <CampaignCard key={i} />
  })
  return (
    <section className='space-y-4 flex flex-col items-center'>
      <h2 className=''>Recent Campaigns</h2>
      <div className='flex gap-5'>{campaigns}</div>
    </section>
  )
}

export default CampaignsSection