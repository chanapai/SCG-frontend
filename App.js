import React, {Component} from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import './App.css';

import Home from './components/Home';
import About from './components/About';
import Restaurants from './components/Restaurants';
import Finding from './components/Finding';
import Navigation from './components/Navigation';
import Footer from './components/Footer';



class App extends Component {
    
    render() {
        return (
            <BrowserRouter>
                <div>
                <Navigation />
                    <Switch>
                        <Route path="/" component={Home} exact/>
                        <Route path="/about" component={About}/>
                        <Route path="/Restaurants" component={Restaurants}/>
                        <Route path="/Finding" component={Finding}/>
                    </Switch>
                <Footer />
                </div> 
            </BrowserRouter>
        )
    }
}
export default App;  