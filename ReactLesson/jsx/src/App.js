//4) Create a component
// function App(){
//     let message="Bye there!";

//     if (Math.random() > 0.5){
//         message="Hello There!";
//     }

//     return <h1> {message}</h1>
// }

/*function App(){
    const date = new Date();
    const time = date.toLocaleTimeString();
    let name,age,job,email;
    name="Lyeng";
    age="18";
    job="Student";
    email="Lyeng@gmail.com";

    // return <h1>{time}</h1>;
    return ( 
    <div>
        <h1>{new Date().toLocaleTimeString()}</h1>
        <h1> {new Date().toLocaleDateString()}</h1>

        <ul> 
            <li>Name : {name}</li>
            <li>Age  : {age}</li>
            <li>Job  : {job}</li>
            <li>Email: {email}</li>
        </ul>
    </div>

    );
}*/

function App(){
    const inputType="number";
    const minValue=5;
    return (
        <div style={{   
        border:'1px solid black',
        backgroundColor:"lightgray",
        width:"300px",
        textAlign:"center"}}>
            
            <p> Number</p>
            <input style={{border: '3px solid red'}} type="number" />

            <br></br>

            <p> Number</p>
            <input type={inputType} min={minValue} />

            <p> Number</p>
            <input type={"number"} min={20} />

            <p> Email</p>
            <input type='email' />
            
            <p> AutoFocus</p>
            <input textarea autoFocus={true} maxLength={25} />

            <p> SpeellCheck</p>
            <input spellCheck />
            
            <p> SpellCheck false</p>
            <input spellCheck={false} />
            
        </div>
    );

    


}
const message="Hi";
export {message}

export default App;