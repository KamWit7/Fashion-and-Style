/* eslint-disable @typescript-eslint/no-unused-vars */
namespace API {
  type PaginationType = {
    totalCount: number;
    pageSize: number;
    currentPage: number;
  };

  type ApiResponse<T> = {
    models: T[];
    modelName: string;
  };

  type ProductType = {
    uid: number;
    img: string;
    collection: string;
    title: string;
    subtitle: string;
    price: number;
    colors: string[];
    bestseller: boolean;
    sizes: string[];
    inStock: boolean;
  };

  type ModiweekType = Pick<ProductType, 'uid' | 'img' | 'title'>;
}
