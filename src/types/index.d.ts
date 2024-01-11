/* eslint-disable @typescript-eslint/no-unused-vars */
namespace API {
  type PaginationType = {
    totalCount: number;
    pageSize: number;
    currentPage: number;
  };

  type PropertyType = { title: string; about: string };
  type DescriptionType = { title: string; property: PropertyType[] }[];
  type MainMaterialType = {
    type: string;
    description: string;
    properties: string[];
  };

  type ProductType = {
    _id: string;
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

  type CardType = {
    _id: string;
    userId: string;
    items: { productId: API.ProductType; quantity: number }[];
    total: number;
  };

  type ModiweekType = Pick<ProductType, '_id' | 'mainImg' | 'title'>;
}
