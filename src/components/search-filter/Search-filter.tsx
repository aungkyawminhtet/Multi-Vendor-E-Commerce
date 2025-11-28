import React from 'react'
import { getPayload, type CollectionSlug } from 'payload';
import configPromise from '@payload-config';
import SearchInput from './Search-Input';
import Categories from './Categories';


const SearchFilter = async() => {
    const payload = await getPayload({
        config: configPromise
    });
    const data = await payload.find({
        collection: 'category' as CollectionSlug,
        depth: 1,
        // pagination: false,
        where: {
            parent: {
                exists : false
            }
        }
    });

  return (
    <div className='relative flex flex-col gap-y-3 w-full'>
        <SearchInput />
        <Categories data={data} />
    </div>
  )
}

export default SearchFilter
