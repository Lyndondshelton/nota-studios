import { CollectionConfig } from "payload";

export const Artists: CollectionConfig = {
    slug: 'artists',
    fields:[
        {
            name: 'artistName',
            type: 'text',
            required: true,
        },
        {
            name: 'imagePath',
            type: 'text',
            required: true,
        },
        {
            name: 'artistBio',
            type: 'text',
            required: true
        },
        {
            name: 'socialLink',
            type: 'text',
            required: true
        }
    ]
}