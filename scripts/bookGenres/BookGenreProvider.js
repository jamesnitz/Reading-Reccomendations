let bookGenres = []

export const useBookGenres = () => bookGenres.slice()

const eventHub = document.querySelector("#container")

const dispatchStateChangeEvent = () => {
    const event = new CustomEvent("bookGenreStateChanged")
    eventHub.dispatchEvent(event)
}

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
    .then(dispatchStateChangeEvent)
}