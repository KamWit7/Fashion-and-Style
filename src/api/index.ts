const stringifyParamsValue = (params: Record<string, unknown>) => {
  return Object.entries(params).reduce(
    (base, [key, value]) => {
      return { ...base, [key]: `${value}` };
    },
    {} as Record<string, string>
  );
};

export const API = {
  getProductById: async (id: string) => {
    const res = await fetch(`/api/products/${id}`);

    if (!res.ok) {
      throw {
        message: 'Failed to fetch product',
        statusText: res.statusText,
        status: res.status,
      };
    }
    const data = await res.json();

    return data as { product: API.ProductType };
  },
  getProducts: async (params?: { bestseller: true } | URLSearchParams) => {
    let url = 'http://localhost:8080/products';

    if (params !== undefined && 'bestseller' in params) {
      url = url + '?' + new URLSearchParams(stringifyParamsValue(params));
    }

    if (params instanceof URLSearchParams) {
      url = url + '?' + params.toString();
    }

    const res = await fetch(url);

    if (!res.ok) {
      throw {
        message: 'Failed to fetch products',
        statusText: res.statusText,
        status: res.status,
      };
    }

    const data = await res.json();

    return data as { products: API.ProductType[]; pagination: API.PaginationType };
  },

  getModiweek: async () => {
    const res = await fetch('http://localhost:8080/modiweek');

    if (!res.ok) {
      throw {
        message: 'Failed to fetch modiweek',
        statusText: res.statusText,
        status: res.status,
      };
    }
    const data = await res.json();

    return data.modiweek as API.ModiweekType[];
  },
};
