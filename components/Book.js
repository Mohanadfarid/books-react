import ShelfSelector from "./ShelfSelector";

const Book = ({ book ,HandelUpdateShelf,AllBooks}) => {
  return (
    
    <div className="book">
      <div className="book-top">
        {!book.imageLinks ? (
          <div
            className="book-cover"
            style={{
              width: 128,
              height: 193,
              // here the link is not working and I don't know why 
              backgroundImage: `url("public\no_image.jpg")`,
            }}
          ></div>
        ) : (
          <div
            className="book-cover"
            style={{
              width: 128,
              height: 193,
              backgroundImage: `url("${book.imageLinks["smallThumbnail"]}")`,
            }}
          ></div>
        )}

        <ShelfSelector book={book} HandelUpdateShelf={HandelUpdateShelf} AllBooks={AllBooks}/>
      </div>
      <div className="book-title">{book.title}</div>
      <div className="book-authors">{book.authors}</div>
    </div>
  );
};
export default Book;
