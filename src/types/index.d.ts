/* eslint-disable @typescript-eslint/no-unused-vars */
namespace API {
  type PaginationType = {
    totalCount: number;
    pageSize: number;
    currentPage: number;
  };

  type ApiResponse<T> = {
    models: T;
    modelName: string;
  };

  type PropertyType = { title: string; about: string };
  type DescriptionType = { title: string; property: PropertyType[] }[];
  type MainMaterialType = {
    type: string;
    description: string;
    properties: string[];
  };

  type ProductType = {
    id: number;
    mainImg: string;
    imgs: string[];
    collection: string;
    title: string;
    subtitle: string;
    price: number;
    colors: string[];
    bestseller: boolean;
    sizes: string[];
    inStock: boolean;
    description: DescriptionType;
    material: MainMaterialType;
  };

  type ModiweekType = Pick<ProductType, 'id' | 'mainImg' | 'title'>;
}
