let books = []

export const usebooks = () => books.slice()
const eventHub = document.querySelector("#container")

const dispatchStateChangeEvent = () => {
    const bookStateChangedEvent = new CustomEvent("bookStateChanged")
    eventHub.dispatchEvent(bookStateChangedEvent)
}

export const getBooks = () => {
    return fetch('http://localhost:8088/books')
        .then(response => response.json())
        .then(parsedBooks => {
            books = parsedBooks
        })

}

export const saveBook = book => {
    return fetch('http://localhost:8088/books', {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(book)
    })
    .then(getBooks)
    .then(dispatchStateChangeEvent)
}

export const deleteBook = bookId => {
    return fetch(`http://localhost:8088/books/${bookId}`, {
        method: "DELETE"
    })
        .then(getBooks)
}

export const editBook = (book) => {
  return fetch(`http://localhost:8088/books/${book.id}`, {
      method: "PUT",
      headers: {
          "Content-Type": "application/json",
      },
      body: JSON.stringify(book)
  })
  .then(getbooks)     
}