let bookGenres = []

export const useBookGenres = () => bookGenres.slice()

export const getBookGenres = () => {
    return fetch('http://localhost:8088/bookGenres')
        .then(response => response.json())
        .then(parsedBookGenres => {
            bookGenres = parsedBookGenres
        })
}