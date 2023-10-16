import {useState} from 'react';
import BookCreate from './components/BookCreate';
import BookList from './components/BookList';

function App() {
    
    const [books,setBooks] = useState([]);

    const editBookById = (id,newTitle) => {
        const updatedBooks = books.map((book) => {
            if (book.id === id){
                return {...book,title: newTitle}
            }
    
            return book;
        });

        setBooks(updatedBooks);
    };

    const creatBook = (title) => {
        
        const updatedBoooks = [
            ...books,
        {
            id : Math.round( Math.random() * 99999 ),
            title,
        }
        ];        

        setBooks(updatedBoooks);
    }

    const deleteBookById = (id) => {
        const updatedBoooks = books.filter((book) => { //filter does not modify arr but it give brand new arr
            return book.id !== id;
        });

        setBooks(updatedBoooks);
    }

    return (
        <div className='app'>
            <BookList onEdit={editBookById} books={books} onDelete={deleteBookById} />
            <BookCreate onCreate={creatBook} />
        </div>
    );
}

export default App;