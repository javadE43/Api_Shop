export interface AttributesCategory {
    id: number;
    title: string;
    slug: string;
    metatitle: string;
    content: string;
}
export interface CategoryOutput extends Required<AttributesCategory> {
}
