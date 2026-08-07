const fwApiToken = process.env.FOURTHWALL_API_TOKEN;
const storeBaseUrl = process.env.FW_BASE_URL;

if (!fwApiToken) {
    throw new Error("Storefront API token is not configured.");
}

if (!storeBaseUrl) {
    throw new Error("Store Base URL is not configured.");
}

export const storeConfig = {
    fwApiToken,
    storeBaseUrl,
};