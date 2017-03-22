import React, {Component} from 'react'
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
        super(props)
    }
 
    searchHandler(event) {
        details = [];
        event.preventDefault();
        let newStory = {
            bloodGroup: this.menu.value
        };
        this.props.actions.searchDemo(newStory)
        event.target.reset();
        var searchBlood = newStory.bloodGroup
        var x = this.props.demo;
        var b = x.map((item, i) => {
            (item.bloodGroup === searchBlood)
                ? (details.push(item))
                : null;
            console.log(details)
            return
        })
      {this.props.location}
        display = details.map((c, i) => (
            <div className="conatiner" key={i}>
                <div className="page-header">
                    <ul className="list-group">
                       
                        <li className="list-group-item">Name : {c.name}</li>
                        <li className="list-group-item">Age : {c.age}</li>
                        <li className="list-group-item">
                            Weight : {c.weight}</li>
                        <li className="list-group-item list-group-item-success">
                            BloodGroup : {c.bloodGroup}</li>
                        <li className="list-group-item">MobileNumber : {c.mobileNumber}</li>
                        <li className="list-group-item">
                            Mail-Id : {c.mailId}</li>
                        <li className="list-group-item">
                            Address : {c.address}</li>
                    </ul>
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
                                <select name="BloodGroup" ref= {(input)=> this.menu = input}>
                                    <option>Choose</option>
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
                        <button type="submit" className="btn btn-primary">Search</button>
                        {display}
                    </form>
                </div>
            </div>
        )
    }
}

export default Search