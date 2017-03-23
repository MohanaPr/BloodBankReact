import React, {Component} from 'react'
import {

    DropdownButton,
    MenuItem,
    FormGroup,
    ControlLabel,
    FormControl,
    Button,
    Radio

} from 'react-bootstrap';

class Register extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            age: "",
            weight: "",
            mailId: "",
            mobileNumber: "",
            bloodGroup: "select",
            address: ""
        };
    }
    selectName(e) {
        this.setState({name: e.target.value})
    }
    selectAge(e) {
        this.setState({age: e.target.value})
    }
    selectWeight(e) {
        this.setState({weight: e.target.value})
    }
    selectMailid(e) {
        this.setState({mailId: e.target.value})
    }
    selectMobileNumber(e) {
        this.setState({mobileNumber: e.target.value})
    }
    selectAddress(e) {
        this.setState({address: e.target.value})
    }
    selectDrop(e) {
        this.setState({bloodGroup: e})
    }
    submitHandler(event) {
        event.preventDefault();
        console.log(this.state)
        let newStory = {

            name: this.state.name,
            age: this.state.age,
            weight: this.state.weight,
            bloodGroup: this.state.bloodGroup,
            mailId: this.state.mailId,
            mobileNumber: this.state.mobileNumber,
            address: this.state.address
        };
        this.props.actions.formDemo(newStory)
        event.target.reset();
    }

    render() {

        return (

            <div className="page-header  panel panel-primary">
                <div className="panel-heading">RegistrationForm</div>
                <div className="panel-body">
                    <form
                        onSubmit={(event) => {
                        this.submitHandler(event)
                    }}>
                        <ControlLabel>Name</ControlLabel>
                        <FormControl
                            type="text"
                            placeholder="Enter your name"
                            onChange={(e) => {
                            this.selectName(e)
                        }}/>
                        <br/>
                        <ControlLabel>Age</ControlLabel>

                        <FormControl
                            type="number"
                            placeholder="Enter your age"
                            onChange={(e) => {
                            this.selectAge(e)
                        }}/>
                        <br/>

                        <div className="form-group">
                            <label >Gender :
                                <input type="radio" name="gender" value="Male"/>Male
                                <input type="radio" name="gender" value="Female"/>Female
                            </label>
                        </div>

                        <FormGroup></FormGroup>
                        
                        <ControlLabel>Weight</ControlLabel>
                        <FormControl
                            type="number"
                            placeholder="Enter your weight"
                            onChange={(e) => {
                            this.selectWeight(e)
                        }}/>
                        <br/>
                        <div className="form-group">
                            <ControlLabel>Blood Group :

                                <DropdownButton
                                    onSelect={(eventKey) => {
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
                            </ControlLabel>
                        </div>
                       
                        <ControlLabel>Mobilenumber</ControlLabel>

                        <FormControl
                            type="number"
                            placeholder="Enter your mobilenumber"
                            onChange={(e) => {
                            this.selectMobileNumber(e)
                        }}/>
                        <br/>
                        <ControlLabel>MailId</ControlLabel>

                        <FormControl
                            type="email"
                            placeholder="Enter your email"
                            onChange={(e) => {
                            this.selectMailid(e)
                        }}/>
                        <br/>
                        <ControlLabel>Address</ControlLabel>

                        <FormGroup controlId="formControlsTextarea">
                           
                            <FormControl
                                componentClass="textarea"
                                placeholder="Enter your address"
                                onChange={(e) => {
                                this.selectAddress(e)
                            }}/>
                        </FormGroup>
                        <br/>

                        <Button type="submit" bsStyle="primary">Submit</Button>
                    </form>
                </div>
            </div>

        )
    }
}

export default Register