class Routes {
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
  };

  URL: string;

  constructor(URL: string) {
    this.URL = URL;
  }

  getRoutes() {
    return this.routes;
  }

  fetchURL(path: string, init?: RequestInit | undefined) {
    if (!this.URL) {
      throw Error('You must provide base URL!');
    }
    
    return fetch(this.URL + path, {
      headers: {
        'Content-Type': 'application/json', // Ustawiamy typ zawartości na JSON
        ...init?.headers,
      },
      ...init,
    });
  }
}

export default Routes;
