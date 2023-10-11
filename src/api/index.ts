export const API = {
  getProducts: async (body?: { bestseler: boolean }) => {
    const res = await fetch('/products', {
      method: 'get',
      body: JSON.stringify(body),
    })
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
