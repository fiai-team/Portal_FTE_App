import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Fortes from './fortes'

class Production extends React.Component {

    render() {
        return (
            <React.Fragment>
                <Switch>
                    <Route path='/production/fortes' component={Fortes}/>
                </Switch>
            </React.Fragment>
        );
    }
}

export default Production;