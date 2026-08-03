
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
    compareAtPrice: object | null,
    attributes: object[]
    stock: object[]
    weight: object[]
    dimensions: object[]
    images: object[]
}

export type Product = {
    id: string;
    name: string;
    description: string;
    state: object;
    access: object;
    images: FourthwallImage[];
    variants: FourthwallVariant[];
    additionalInformation: object[];
    sizeGuide: string | null;
    createdAt: string;
    updatedAt: string;
}

export const CurrencyMap = new Map<string, string>([
    ["USD", "$"],
]);