import './App.css';
import {click} from "@testing-library/user-event/dist/click";
import {useState} from "react";
import Products from "./Components/Products";

let name = 'Lexa';

function clickOnButton(){
    console.log('X');
}

function App(){

    let [name, setName] = useState("Hello world");
    let [tax, setTax] = useState(0);

    function changeName(e){
        setName(e.target.value);
        console.log(name);
    }

    function changeTax(e){
        setTax(e.target.value);
    }

    return (
        <>
            <Products tax={ tax }/>

            <button onClick={clickOnButton}>{ name }</button>

            <input type="text" onInput={ (e) => setName(e.target.value) }/>

            <input type="text" onInput={ (e) => setTax(e.target.value) }/>

            <h1>My name is { name }</h1>

        </>
    );
}

export default App;
