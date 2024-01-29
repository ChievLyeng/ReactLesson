import { useState, useEffect } from "react";
import BookCreate from "./components/BookCreate";
import BookList from "./components/BookList";
import axios from "axios";

function App() {
  const [books, setBooks] = useState([]);

  const fetchBooks = async () => {
    try {
      const response = await axios.get("http://localhost:3001/books");

      setBooks(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const editBookById = async (id, newTitle) => {

    const response = await axios.put(`http://localhost:3001/books/${id}`, {
      title: newTitle,
    });

    const updatedBooks = books.map((book) => {
      if (book.id === id) {
        return { ...book, ...response.data };
      }

      return book;
    });

    setBooks(updatedBooks);
  };

  const creatBook = async (title) => {
    const response = await axios.post("http://localhost:3001/books", {
      title,
    });

    console.log(response.data);

    // const updatedBoooks = [
    //   ...books,
    //   {
    //     id: Math.round(Math.random() * 99999),
    //     title,
    //   },
    // ];

    // setBooks(updatedBoooks);
  };

  const deleteBookById = async (id) => {

    await axios.delete(`http://localhost:3001/books/${id}`)

    const updatedBoooks = books.filter((book) => {
      //filter does not modify arr but it give brand new arr
      return book.id !== id;
    });

    setBooks(updatedBoooks);
  };

  useEffect(() => {
    fetchBooks();
  }, []);

  return (
    <div className="app">
      <BookList onEdit={editBookById} books={books} onDelete={deleteBookById} />
      <BookCreate onCreate={creatBook} />
    </div>
  );
}

export default App;
