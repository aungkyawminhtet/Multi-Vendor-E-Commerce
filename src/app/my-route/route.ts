import configPromise from '@payload-config'
import { getPayload, type CollectionSlug } from 'payload'

export const GET = async (request: Request) => {
  const payload = await getPayload({
    config: configPromise,
  });

  const data = await payload.find({
    collection: 'Category' as CollectionSlug,
  });
  console.log("data");

  return Response.json({
    message: 'This is an example of a custom route.',
  });
}
