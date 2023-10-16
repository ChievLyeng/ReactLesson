import {useState} from 'react';


function BookCreate({onCreate}) { //onCreate is prop recieve form app when submit the add
    const [title,setTitle] = useState('');
    
    const handleChange = (event) => {
        setTitle(event.target.value); //see what get from the input form
    };

    const handleSubmit = (event) => {
        event.preventDefault(); //prevent from reloading page after submit form
        onCreate(title);
        setTitle(''); //make the input field empty when added
    };

    return (
        <div className='book-create'>
            <h3>Add a Book</h3>
            <form onSubmit={handleSubmit}>
                <label>Title</label>
                <input className='input' value={title} onChange={handleChange} />
                <button className='button' >Create</button>
            </form>
        </div>
    );
}

export default BookCreate;