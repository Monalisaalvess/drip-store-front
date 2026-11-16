const API_URL = import.meta.env.VITE_API_URL
export async function api(path, options = {}) {
    const response = await fetch(`${API_URL}${path}`,{
        headers:{'Content-Type' : 'application/json'},
        ...option,
    })
    if (response.status === 204) return null
    const data = await response.json()
    if (!response.ok) throw new Error(data.message)
    return data
}