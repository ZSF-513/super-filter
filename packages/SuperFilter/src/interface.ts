export interface SELECT_CODE {
    parent: string | number
    child: string | number
}

export interface ITEM {
    key: string | number
    value: string | number | any[],
    name?: string | number
}