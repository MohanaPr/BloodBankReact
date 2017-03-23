import React, {Component} from 'react'
import {Link} from 'react-router';

import * as actions from '../actions/actions';
import {connect} from 'react-redux';

import {bindActionCreators} from 'redux';

import {Carousel} from 'react-bootstrap';
var cc = ""
class App extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        console.log(this.props.location.pathname)
        if (this.props.location.pathname === "/") {

            cc = (
                <Carousel>
                    <Carousel.Item>
                        <img width={1200} height={2000} alt="" src="images/1.jpg"/>
                        <Carousel.Caption></Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img width={1200} height={2000} alt="" src="images/2.jpg"/>
                        <Carousel.Caption></Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img width={1200} height={2000} alt="" src="images/3.jpg"/>
                        <Carousel.Caption></Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img width={1200} height={2000} alt="" src="images/4.jpg"/>
                        <Carousel.Caption></Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            )
        } else {
            cc = "";
        }
        return (
            <div className="container">   
                     <h1 className="text-center" style={{color:'#cc0000'}}>BloodBank</h1 >
                <ul className="nav nav-pills nav-justified">
                    <li className="nav-item">
                        <Link to="/about">About</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/register">Register</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/search">Search</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/tips">Tips</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/contact">Contact</Link>
                    </li>
                </ul>
                {this.props.children != null
                    ? React.cloneElement(this.props.children, this.props)
                    : null}
                  <br/>
                {cc}

            </div>
        )
    }
}
function mapStateToProps(state) {
    return {demo: state.formReducer.demo, demo1: state.formReducer.demo1};
}
function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(actions, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(App)