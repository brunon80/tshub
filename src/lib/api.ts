export interface ApiParams {
    url: string
    payload?: object | undefined
    type?: string
}

async function api<T>({ url, payload, type = 'GET' }: ApiParams): Promise<T> {
    const params = {
        method: type,
        body: payload && JSON.stringify(payload),
        headers: {
            'content-type': 'application/json',
        },
    }

    const response = await fetch(url, params)
    const data = await response.json()

    if (data.error) console.log('Erro =>', data)

    return data
}

export default api
