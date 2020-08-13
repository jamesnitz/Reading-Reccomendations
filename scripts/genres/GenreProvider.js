let genres = []

export const useGenres = () => genres.slice()

export const getGenres = () => {
    return fetch('http://localhost:8088/genres')
        .then(response => response.json())
        .then(parsedGenres => {
            genres = parsedGenres
        })
}