
import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux';
import store,{history} from './store';
import { Router, Route, browserHistory } from 'react-router';

import App from './components/App';
import Contact from './components/Contact';
import About from './components/About';
import Search from './components/Search';
import Register from './components/Register';
import Tips from './components/Tips';



ReactDOM.render(
    <Provider store={store}>
        
   <Router history={browserHistory}>
       
        <Route path="/" component={App}>

        <Route path="/contact" component={Contact}/>
        <Route path="/about" component={About}/>
        <Route path="/register" component={Register}/>       
        <Route path="/search" component={Search}/>
        <Route path="/tips" component={Tips}/>

        </Route>       
 
    </Router>

    </Provider>,
    document.getElementById('root')
);