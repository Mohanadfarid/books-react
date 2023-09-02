import { Link } from "react-router-dom";
import BookShelf from "../components/BookShelf";

const HomePage = ({ AllBooks,HandelUpdateShelf }) => {
  const shelves_names = ["Currently Reading", "Want to Read", "Read"];
  const shelfCategories = ["currentlyReading", "wantToRead", "read"];

 
  return (
    <div className="list-books">
      <div className="list-books-title">
        <h1>MyReads</h1>
      </div>
      <div className="list-books-content">
        <div>
          <BookShelf
            shelfName={shelves_names[0]}
            category={shelfCategories[0]}
            AllBooks={AllBooks}
            HandelUpdateShelf={HandelUpdateShelf}
          />
          <BookShelf
            shelfName={shelves_names[1]}
            category={shelfCategories[1]}
            AllBooks={AllBooks}
            HandelUpdateShelf={HandelUpdateShelf}
          />
          <BookShelf
            shelfName={shelves_names[2]}
            category={shelfCategories[2]}
            AllBooks={AllBooks}
            HandelUpdateShelf={HandelUpdateShelf}
          />
        </div>
      </div>
      <div className="open-search">
        <Link to={"/search"}>Add a book </Link>
      </div>
    </div>
  );
};
export default HomePage;
