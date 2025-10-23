import React from 'react'
import configPromise from '@payload-config'
import { getPayload, type CollectionSlug } from 'payload'


const page = async() => {
  const payload = await getPayload({
    config: configPromise
  });
  const data = await payload.find({
    collection: 'category' as CollectionSlug
  });
  console.log("cat data", data);
  return (
    <div>
      <h1>about page</h1>
    </div>
  )
}

export default page
