const stringifyParamsValue = (params: Record<string, unknown>) => {
  return Object.entries(params).reduce(
    (base, [key, value]) => {
      return { ...base, [key]: `${value}` };
    },
    {} as Record<string, string>
  );
};

export const API = {
  getProducts: async (params?: { bestseller: true }) => {
    const url = params ? '/api/products?' + new URLSearchParams(stringifyParamsValue(params)) : '/api/products';

    const res = await fetch(url);

    if (!res.ok) {
      throw {
        message: 'Failed to fetch products',
        statusText: res.statusText,
        status: res.status,
      };
    }

    const data = await res.json();

    return data as { products: API.ProductType[] };
  },

  getModiweek: async () => {
    const res = await fetch('/api/modiweeks');

    if (!res.ok) {
      throw {
        message: 'Failed to fetch modiweek',
        statusText: res.statusText,
        status: res.status,
      };
    }
    const data = await res.json();

    console.log('data', data);
    return data as { modiweeks: API.ModiweekType[] };
  },
};
