import {useState} from 'react';
import  './SearchBar.css';

export const SearchBar = ({onSubmit}) => {
    const [term, setTerm] = useState('');
    const handleFormSubmit = (e)=>{
        e.preventDefault();
        onSubmit(term);
    };
<<<<<<< HEAD
    
    return(
        <div className='search-bar'>
            <form onSubmit={handleFormSubmit}>
                <label> Enter Search term</label>
                <input value={term} onChange={handleChange} />
                {/* {term.length < 3 && 'Term must be longer'} */}
            </form>
        </div>
    );
=======
    const handleChange = (event)=>{
        setTerm(event.target.value);
    };
  return(
    <div>
        <form onSubmit={handleFormSubmit}>
            <input value={term} onChange={handleChange}/>
        </form>
    </div>
  );
>>>>>>> e352c6f228431e408c5334d7640eb2f1a72bf0be
}