export const BookHtml = (book, genresArray) => {
  
  return `
    <div class="bookCard">
      <div>Title: ${book.title}</div>
      <div>Author: ${book.author}</div>
      <div>genre: ${
        genresArray.map(
        genre => {
          return `${genre.type}`
        }
      ).join(", ")} </div>

    </div>
  
  `
}