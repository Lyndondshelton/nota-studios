import type { CollectionConfig } from "payload";

export const Services: CollectionConfig = {
    slug: 'services',
    fields: [
        {
            name: 'serviceName',
            type: 'text',
            required: true,
        },
        {
            name: 'serviceDesc',
            type: 'text',
            required: true,
        }, 
        {
            name: 'price',
            type: 'text',
            required: true,
        },
        {
            name: 'subDesc',
            type: 'text',
            required: false,
        }
    ]
}