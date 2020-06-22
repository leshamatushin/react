import React from 'react';
import SignIn from "./components/login";
import SignUp from "./components/signup";
import SimpleList from "./components/menu";
import Dashboard from "./components/dashboard";
import {BrowserRouter, Route} from "react-router-dom"
import Chart from "./components/chart";

const App = (props) => {
    return (
        <div>
            <BrowserRouter>
                <div>
                    <SimpleList/>
                </div>
                <Route path='/menu' component={SimpleList}/>
                <Route path='/login' component={SignIn}/>
                <Route path='/signup' component={SignUp}/>
                <Route path='/chart' component={Dashboard}/>
            </BrowserRouter>
        </div>

    )
}
export default App;
