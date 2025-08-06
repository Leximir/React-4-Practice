import './App.css';
import {click} from "@testing-library/user-event/dist/click";
import {useState} from "react";
import Products from "./Components/Products";
import products from "./Components/Products";
import 'bootstrap/dist/css/bootstrap.min.css'

let name = 'Lexa';

function clickOnButton(){
    console.log('X');
}

function App(){
    let [tax, setTax] = useState(0);

    return (
        <>
            <Products tax={ tax }/>

            <input className="mt-5" type="text" placeholder="Unesite novu taksu" onInput={ (e) => setTax(e.target.value) }/>

        </>
    );
}

export default App;
