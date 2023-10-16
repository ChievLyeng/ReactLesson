import { useState } from "react";

function BookEdit({book,onSubmit}) {
    const [title,setTitle] = useState(book.title); //what we put in the state is the default value

    const handleChange = (event) => { //event is mean recieve event obj
        setTitle(event.target.value);
    };

    const handleSubmit = (event) => {  
        event.preventDefault();
        onSubmit(book.id,title);
        
    };

    return (
        <form className="book-edit" onSubmit={handleSubmit}>
            <label>Title</label>
            <input className="input" value={title} onChange={handleChange} />
            <button className="button is-primary"> 
                Save
            </button>
        </form>
    );
}

export default BookEdit;