import APIRoutsManager from './APIRoutesManager';

const stringifyParamsValue = (params: Record<string, unknown>) => {
  return Object.entries(params).reduce(
    (base, [key, value]) => {
      return { ...base, [key]: `${value}` };
    },
    {} as Record<string, string>
  );
};

const { fetchURL, getRoutes, setHeaders } = APIRoutsManager.getInstance('http://localhost:8080');
const routes = getRoutes();

const token = localStorage.getItem('bearerToken');

if (token) {
  setHeaders({
    Authorization: `Barer ${token}`,
  });
}

const productsApi = {
  getProductById: async (id: string) => {
    const res = await fetchURL(routes.products.productId(id));

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
    let url = routes.products.default;

    if (params !== undefined && 'bestseller' in params) {
      url = url + '?' + new URLSearchParams(stringifyParamsValue(params));
    }

    if (params instanceof URLSearchParams) {
      url = url + '?' + params.toString();
    }

    const res = await fetchURL(url);

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
};

const modiweekApi = {
  getModiweek: async () => {
    const res = await fetchURL(routes.modiweek.default);

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

const authApi = {
  signup: async <T>(body: T) => {
    const res = await fetchURL(routes.auth.signup, {
      method: 'POST',
      body: JSON.stringify(body),
    });

    if (!res.ok) {
      throw {
        message: 'Failed to singup',
        statusText: res.statusText,
        status: res.status,
      };
    }

    const data = await res.json();

    return data as { token?: string; email?: string };
  },
  login: async <T>(body: T) => {
    const res = await fetchURL(routes.auth.login, {
      method: 'POST',
      body: JSON.stringify(body),
    });

    if (!res.ok) {
      throw {
        message: 'Failed to login',
        statusText: res.statusText,
        status: res.status,
      };
    }

    const data = await res.json();

    return data as { token?: string; email?: string };
  },
};

const cart = {
  get: async () => {
    const res = await fetchURL(routes.cart.default);

    if (!res.ok) {
      throw {
        message: 'Failed to get cart items',
        statusText: res.statusText,
        status: res.status,
      };
    }

    const data = await res.json();

    return data as API.CardType;
  },
  post: async <T>(body: T) => {
    const res = await fetchURL(routes.cart.add, {
      method: 'POST',
      body: JSON.stringify(body),
    });

    if (!res.ok) {
      throw {
        message: 'Failed to post item',
        statusText: res.statusText,
        status: res.status,
      };
    }

    const data = await res.json();

    return data as API.CardType;
  },
  delete: async <T>(body: T) => {
    const res = await fetchURL(routes.cart.removeItem, {
      method: 'DELETE',
      body: JSON.stringify(body),
    });

    if (!res.ok) {
      throw {
        message: 'Failed to remove item',
        statusText: res.statusText,
        status: res.status,
      };
    }

    const data = await res.json();

    return data as API.CardType;
  },
};

export const API = {
  ...productsApi,
  ...modiweekApi,
  ...authApi,
  cart,
};
