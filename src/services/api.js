const baseURL = `https://pokeapi.co/api/v2`

async function getList(page, resultsPerPage) {
    const offset = page * resultsPerPage
    const url = `/pokemon?limit=${resultsPerPage}&offset=${offset}`;
    return fetchData(url)
}

async function getPokemon(name) {
    const url = `/pokemon/${name}`;
    return fetchData(url)
}

async function fetchData(url) {
    const fullUrl = baseURL + url
    const resp = await fetch(fullUrl)

    if (resp.ok) return await resp.json()
    return
}

export { getList, getPokemon }