import type { CollectionConfig } from "payload";
import { type CollectionSlug } from 'payload';

export const Category: CollectionConfig = {
    slug: "category",
    fields: [
        {
            name: "name",
            type:"text",
            unique: true
        },
        {
            name: 'slug',
            type: 'text',
            unique: true,
            required: true,
            index: true
        },
        {
            name: 'color',
            type: 'text',
        },
        {
            name: 'parent',
            type: 'relationship',
            relationTo: 'category' as CollectionSlug,
            hasMany: false
        },
        {
            name: 'subCategories',
            type: 'join',
            collection: 'category' as CollectionSlug,
            on: 'parent',
        }
    ]
}