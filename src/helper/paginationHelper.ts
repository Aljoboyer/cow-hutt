

export const PaginationCalculate = (options: any) => {
    const page = options?.page || 1
    const limit = options?.limit || 10

    const skip = (page - 1)* limit

    const srotBy = options?.srotBy || "year"
    const sortOrder = options?.sortOrder || "createdAt"

    return {
        page,
        limit,
        skip,
        srotBy,
        sortOrder
    }
}