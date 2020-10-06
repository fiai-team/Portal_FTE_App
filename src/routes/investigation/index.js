import React from 'react'
import {Switch, Route} from 'react-router-dom'
import InvestigationsEvents from "./events";

class Investigation extends React.Component {
    render() {
        return (
            <React.Fragment>
                <Switch>
                    <Route path='/investigation/events' component={InvestigationsEvents}/>
                </Switch>
            </React.Fragment>
        );
    }
}

export default Investigation;