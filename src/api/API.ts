export const API = {
  getProducts: async () => {
    const res = await fetch('/api/products')
    if (!res.ok) {
      throw {
        message: 'Failed to fetch products',
        statusText: res.statusText,
        status: res.status,
      }
    }

    const data = await res.json()
    return data
  },
}
