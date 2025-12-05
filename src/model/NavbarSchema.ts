export interface navbarSchema {
    name: string;
    href: string
}

export type SubCategorySchema = {
    id: string;
    name: string;
    createdAt: string;
}

export type CategorySchema = {
    color: string;
    id: string;
    name: string;
    slug: string
    createdAt: string;
    SubCategories: SubCategorySchema[];
}

export interface CatSchema {
    docs: CategorySchema[];
}