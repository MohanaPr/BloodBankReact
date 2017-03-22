import React, {Component} from 'react'
import {Link} from 'react-router';

class About extends Component {
    constructor(props) {
        super(props);

    }
    render() {
        return (

            <div className="page-header panel panel-primary">
                <div className="panel-heading">About US</div>
                <div className="panel-body">

                    <p>'Blood Bank' is the first product resulted out of the community welfare
                        initiative called 'People Project' from uSiS Technologies. Universally, 'Blood'
                        is recognized as the most precious element that sustains life. It saves
                        innumerable lives across the world in a variety of conditions. Once in every 2-
                        seconds, someone, somewhere is desperately in need of blood. More than 29
                        million units of blood components are transfused every year. The need for blood
                        is great - on any given day, approximately 39,000 units of Red Blood Cells are
                        needed. Each year, we could meet only up to 1% (approx) of our nation’s demand
                        for blood transfusion.</p>

                    <p>Despite the increase in the number of donors, blood remains in short supply
                        during emergencies, mainly attributed to the lack of information and
                        accessibility. We positively believe this tool can overcome most of these
                        challenges by effectively connecting the blood donors with the blood recipients.</p>
                </div>
            </div>

        )
    }
}

export default About