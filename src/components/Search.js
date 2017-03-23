import React, {Component} from 'react'
import {
    ListGroup,
    ListGroupItem,
    Navbar,
    FormGroup,
    FormControl,
    Button,
    DropdownButton,
    MenuItem
} from 'react-bootstrap';
var regName,
    regAge,
    regWeigth,
    regNumber,
    regMailid,
    regBloodGroup,
    regAddress,
    display = "";
var details = [];
class Search extends Component {

    constructor(props) {
        super(props);
           this.state = {
            bloodGroup:"select"
        }; 
    }
 selectDrop(e) {
        this.setState({bloodGroup: e})
    }
    searchHandler(event) {
        details = [];
        event.preventDefault();
        let newStory = {
            bloodGroup: this.state.bloodGroup
        };
        this.props.actions.searchDemo(newStory)
        event.target.reset();
        var x = this.props.demo;
        var b = x.map((item, i) => {
            (item.bloodGroup === this.state.bloodGroup)
                ? (details.push(item))
                : null;
            console.log(details)
            return
        })
      {this.props.location}
             display = details.map((c, i) => (
            <div className="conatiner" key={i}>
                <div className="page-header">
                    <ListGroup>
                        <ListGroupItem >Name: {c.name}</ListGroupItem>
                        <ListGroupItem >Age: {c.age}</ListGroupItem>
                        <ListGroupItem >
                            Weight: {c.weight}</ListGroupItem>
                        <ListGroupItem bsStyle="success">BloodGroup: {c.bloodGroup}</ListGroupItem>
                        <ListGroupItem >MobileNumber: {c.mobileNumber}</ListGroupItem>
                        <ListGroupItem >
                            MailId: {c.mailId}</ListGroupItem>
                        <ListGroupItem >
                            Address: {c.address}</ListGroupItem>
                    </ListGroup>
                </div>
            </div>

        ))
    }
    render() {
        return (
            <div className="page-header panel panel-primary">
                <div className="panel-heading">Search Blood Group</div>
                <div className="panel-body">
                    <form
                        onSubmit={(event) => {
                        this.searchHandler(event)
                    }}>
                        <div className="form-group">
                            <label>Blood Group :
                               <DropdownButton onSelect={(eventKey) => {
                                this.selectDrop(eventKey)
                            }}
                                title={this.state.bloodGroup}
                                id="bg-nested-dropdown">

                                <MenuItem eventKey="A+">A+</MenuItem>
                                <MenuItem eventKey="B+">B+</MenuItem>
                                <MenuItem eventKey="O+">O+</MenuItem>
                                <MenuItem eventKey="AB+">AB+</MenuItem>
                                <MenuItem eventKey="A-">A-</MenuItem>
                                <MenuItem eventKey="b-">B-</MenuItem>
                                <MenuItem eventKey="AB-">AB-</MenuItem>
                                <MenuItem eventKey="O-">O-</MenuItem>

                            </DropdownButton>
                            </label>
                        </div>
                        <button type="submit" className="btn btn-primary">Search</button>
                        {display}
                    </form>
                </div>
            </div>
        )
    }
}

export default Search