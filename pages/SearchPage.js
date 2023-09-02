import { Link } from "react-router-dom";
import * as BooksAPI from "../BooksAPI";
import { useState } from "react";
import Book from "../components/Book";
const SearchPage = ({ AllBooks, HandelUpdateShelf }) => {
  const [SearchResult, setSearchResult] = useState([]);
 
  const handelSearchInput = (event) => {
    let result;
    const SaveResult = async () => {
      result = await BooksAPI.search(event.target.value);
      if (!(await result)) {
        setSearchResult([]);
      } else {
        setSearchResult(await result);
      }
    };
    SaveResult();
  };



  return (
    <div className="search-books">
      <div className="search-books-bar">
        <Link to={"/"} className="close-search">
          Close{" "}
        </Link>
        <div className="search-books-input-wrapper">
          <input
            type="text"
            placeholder="Search by title, author, or ISBN"
            onChange={(event) => {
              handelSearchInput(event);
            }}
          />
        </div>
      </div>
      <div className="search-books-results">
        <ol className="books-grid">
          {SearchResult.length > 0 ? (
            SearchResult.map((book) => {
              const temp_all_books=AllBooks;
              const match =temp_all_books.filter(b=>b.id===book.id);
              (match.length>0)
              ?book.shelf= match[0].shelf
              :book.shelf="none";
              return (
                <li key={book.id}>
                  {
                   <Book book={book} HandelUpdateShelf={HandelUpdateShelf} AllBooks={AllBooks} />
                  }
                </li>
              );
            })
          ) : (
            <div></div>
          )}
        </ol>
      </div>
    </div>
  );
};

export default SearchPage;
