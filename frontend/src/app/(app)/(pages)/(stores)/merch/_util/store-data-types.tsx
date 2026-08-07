
export type FourthwallImage = {
    id: string;
    url: string;
    width: number;
    height: number;
    transformedUrl: string;
}

type UnitPrice = {
    value: number;
    currency: string;
}

export type FourthwallVariant = {
    id: string;
    name: string;
    sku: string;
    unitPrice: UnitPrice;
    compareAtPrice: object | null;
    attributes: {
        description: string;
        color: {
            name: string;
            swatch: string;
        };
        size: {
            name: string;
        }
    }
    stock: { type: string, };
    weight: {
        value: number;
        unit: string;
    };
    dimensions: {
        length: number;
        width: number;
        height: number;
        unit: string;
    };
    images: FourthwallImage[];
}

type AdditionalInfo = {
    type: string;
    title: string;
    bodyHtml: string;
}

export type Product = {
    id: string;
    name: string;
    slug: string;
    description: string;
    state: object;
    access: object;
    images: FourthwallImage[];
    variants: FourthwallVariant[];
    additionalInformation: AdditionalInfo[];
    sizeGuide: string | null;
    createdAt: string;
    updatedAt: string;
}

export const CurrencyMap = new Map<string, string>([
    ["USD", "$"],
]);

