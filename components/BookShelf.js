import Book from "./Book";

const BookShelf = ({ shelfName, category, AllBooks ,HandelUpdateShelf}) => {
  const current_shelf_books = AllBooks.filter(
    (book) => book.shelf === category
  );
  // console.log(current_shelf_books);
  return (
    <div className="bookshelf">
      <h2 className="bookshelf-title">{shelfName}</h2>
      <div className="bookshelf-books">
        <ol className="books-grid">
          {current_shelf_books.map((book) => {
            return (
              <li key={book.id}>
                <Book
                book={book}
                HandelUpdateShelf={HandelUpdateShelf}
                AllBooks={AllBooks}
                />
              </li>
            );
          })}
        </ol>
      </div>
    </div>
  );
};
export default BookShelf;
