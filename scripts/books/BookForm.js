import { getGenres, useGenres } from "../genres/GenreProvider.js"

const target = document.querySelector(".bookFormContainer")

const eventHub = document.querySelector("#container")

export const bookForm = () => {
  getGenres().then(() => {
    const allGenres = useGenres()
    target.innerHTML = `
      <article>
        <input type="text" id="book-title" />
        <input type="text" id="book-author" />
        <select id="book-genre" multiple>
          <option  disabled value="0">Please select a genre</option>
          ${allGenres.map(genre => `<option value="${genre.id}">${genre.type}</option>`)}
        </select>
        <button id="save-button">Save your book</button>
      </article>
    
    `
  })
}

eventHub.addEventListener("click", event => {
  if (event.target.id === "save-button") {
    const title = document.querySelector("#book-title").value
    const author = document.querySelector("#book-author").value
    const genreNodes = document.querySelectorAll("#book-genre option:checked")
    const foundGenresArray = Array.from(genreNodes)
    const genreValues = foundGenresArray.map(genre => parseInt(genre.value))
//save a book, get that books id loop over genreValues and plug it into an object to be savefunction Param
    let bookObj = {
      title: title,
      author: author,
    }
    debugger
  }
})