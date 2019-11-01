import React, { Component } from 'react';
import Banner from '../components/homepage/Banner';
import AboutUs from '../components/homepage/AboutUs';
import HowItWorks from '../components/homepage/HowItWorks';
import Properties from '../components/homepage/Properties';
class Homepage extends Component {
    
    render() { 
        return ( 
            <React.Fragment>
                <Banner />
                <AboutUs />
                <HowItWorks />
                <Properties />
            </React.Fragment>
         );
    }
}
 
export default Homepage;