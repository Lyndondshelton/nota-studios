import { CollectionConfig } from "payload";

export const Artists: CollectionConfig = {
    slug: 'artists',
    fields: [
        {
            name: 'name',
            type: 'text',
            required: true,
        }
    ]
}