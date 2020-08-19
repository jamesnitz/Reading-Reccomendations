import { getBooks, usebooks } from "./BookProvider.js"
import { BookHtml } from "./Book.js"
import { useGenres, getGenres } from "../genres/GenreProvider.js"
import { getBookGenres, useBookGenres } from "../bookGenres/BookGenreProvider.js"

const contentElement = document.querySelector(".bookContainer")
const eventHub = document.querySelector("#container")

export const bookList = () => {
  getBooks()
  .then(getGenres)
  .then(getBookGenres)
  .then(() => {
    const allGenres = useGenres()
    const allBooks = usebooks()
    render(allBooks, allGenres)
  })
}

eventHub.addEventListener("bookGenreStateChanged", event => {
 bookList()
})


const render = (books, genres) => {
  contentElement.innerHTML = `
  ${books 
    .map(book => {
      const bookGenres = useBookGenres()
      const foundBookGenres = bookGenres.filter(bg => bg.bookId === book.id)
      const foundGenresArray = foundBookGenres.map(bg => {
        const foundGenres = genres.find(genre => genre.id === bg.genreId);
        return foundGenres;
      })

      return BookHtml(book, foundGenresArray)
    }).join(" ")}
    `
}