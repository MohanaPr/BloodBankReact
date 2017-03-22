import React, {Component} from 'react'

class Register extends Component {
    constructor(props) {
        super(props);

    }
    submitHandler(event) {
        event.preventDefault();
        let newStory = {

            name: this.refs.name.value,
            age: this.refs.age.value,
            gender: this.menu1.value,
            weight: this.refs.weight.value,
            bloodGroup: this.menu.value,
            mailId: this.refs.mailId.value,
            mobileNumber: this.refs.mobileNumber.value,
            address: this.refs.address.value

        };
        this
            .props
            .actions
            .formDemo(newStory)
        event
            .target
            .reset();
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
                        <div className="form-group">
                            <label>Name</label>
                            <input ref="name" className="form-control"/>
                        </div>
                        <div className="form-group">
                            <label>Age</label>
                            <input ref="age" type="number" className="form-control"/>
                        </div>
                        <div className="form-group">
                            <label ref= {(input1)=> this.menu1 = input1}>Gender :
                                <input type="radio" name="gender" value="Male"/>Male
                                <input type="radio" name="gender" value="Female"/>Female
                            </label>
                        </div>

                        <div className="form-group">
                            <label>weight</label>
                            <input ref="weight" type="number" className="form-control"/>
                        </div>

                        <div className="form-group">
                            <label>Blood Group :

                                <select name="BloodGroup" ref= {(input)=> this.menu = input}>
                                    <option>A+</option>
                                    <option>B+</option>
                                    <option>AB+</option>
                                    <option>O+</option>
                                    <option>A-</option>
                                    <option>B-</option>
                                    <option>AB-</option>
                                    <option>O-</option>
                                </select>
                            </label>
                        </div>
                        <div className="form-group">
                            <label>MobileNumber</label>
                            <input ref="mobileNumber" type="number" className="form-control"/>
                        </div>
                        <div className="form-group">
                            <label>Mail Id</label>
                            <input ref="mailId" type="text" className="form-control"/>
                        </div>

                        <div className="form-group">
                            <label>Address</label>
                            <textarea ref="address" className="form-control"></textarea>
                        </div>

                        <button type="submit" className="btn btn-primary">Submit</button>
                    </form>
                </div>
            </div>

        )
    }
}

export default Register