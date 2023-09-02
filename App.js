import "./App.css";
import * as BooksAPI from "../src/BooksAPI";
import { useState, useEffect } from "react";
import SearchPage from "./pages/SearchPage";
import HomePage from "./pages/HomePage";
import { Route, Routes } from "react-router-dom";

function App() {
  const [AllBooks, setAllBooks] = useState([]);

  const handelState = (newBookState) => {
    setAllBooks(newBookState);
  };

  const HandelUpdateShelf = async (received_book, shelf_name) => {
    if (!received_book.shelf) {
      const temp_book=received_book
      temp_book.shelf = "none";
      await BooksAPI.update(temp_book, shelf_name);
      const temp_all_books = await BooksAPI.getAll()
        handelState([...temp_all_books,temp_book]);
    } else {
      await BooksAPI.update(received_book, shelf_name);
      const temp_all_books = await BooksAPI.getAll();
      handelState(temp_all_books);
    }
  };

 


  useEffect(() => {
    const setState = async () => {
      setAllBooks(await BooksAPI.getAll());
      // console.log(AllBooks);
    };
    setState();
  }, []);

  return (
    <div className="app">
      <Routes>
        <Route exact path="/" element={<HomePage AllBooks={AllBooks} handelState={handelState} HandelUpdateShelf={HandelUpdateShelf}/>} />
        <Route exact path="search" element={<SearchPage AllBooks={AllBooks} HandelUpdateShelf={HandelUpdateShelf}/>} />
      </Routes>
    </div>
  );
}

export default App;
