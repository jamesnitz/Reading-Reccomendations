let bookGenres = []

export const useBookGenres = () => bookGenres.slice()

export const getBookGenres = () => {
    return fetch('http://localhost:8088/bookGenres')
        .then(response => response.json())
        .then(parsedBookGenres => {
            bookGenres = parsedBookGenres
        })
}

export const saveBookGenre = bookGenreObj => {
    return fetch('http://localhost:8088/bookGenres', {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(bookGenreObj)
    })
    .then(getBookGenres)
}