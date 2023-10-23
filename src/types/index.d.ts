/* eslint-disable @typescript-eslint/no-unused-vars */
namespace API {
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
