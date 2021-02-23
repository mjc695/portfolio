import React from 'react'
import { Switch, Route } from 'react-router-dom'

import homepage from './components/homepage'


const Routes = () => {

    return(
        <div>
            <Switch>
                <Route path='/homepage' component={homepage} />
                {/* <Route path='/nothing' component={nothing} /> */}
            </Switch>
        </div>
    )

}

export default Routes