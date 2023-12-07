class APIRoutsManager {
  private routes = {
    products: {
      default: `/products`,
      productId: (id: string) => `/products/${id}`,
    },
    modiweek: {
      default: '/modiweek',
    },
    auth: {
      login: '/login',
      signup: '/signup',
    },
    cart: {
      add: '/cart/add',
      default: '/cart',
      removeItem: '/cart/remove-item',
    },
  };

  private static instance: APIRoutsManager;
  URL: string;
  headers?: Record<string, string>;

  private constructor(URL: string) {
    this.URL = URL;
  }

  setHeaders(headers: Record<string, string>) {
    if (!APIRoutsManager.instance) {
      throw Error('You must initialize Route Instance!');
    }

    APIRoutsManager.instance.headers = headers;
  }

  getRoutes() {
    return APIRoutsManager.instance.routes;
  }

  static getInstance(URL?: string) {
    if (!APIRoutsManager.instance) {
      if (!URL) {
        throw Error('You must provide URL!');
      }
      APIRoutsManager.instance = new APIRoutsManager(URL);
    }

    return APIRoutsManager.instance;
  }

  fetchURL(path: string, init?: RequestInit | undefined) {
    if (!APIRoutsManager.instance) {
      throw Error('You must initialize Route Instance!');
    }

    return fetch(APIRoutsManager.instance.URL + path, {
      headers: {
        'Content-Type': 'application/json',
        ...APIRoutsManager.instance.headers,
        ...init?.headers,
      },
      ...init,
    });
  }
}

export default APIRoutsManager;
