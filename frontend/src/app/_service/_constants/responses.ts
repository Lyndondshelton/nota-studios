export type CommonApiResponse<T> = {
    data: T,
    message: string,
    status: string,
}