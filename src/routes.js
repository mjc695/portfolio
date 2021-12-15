import React from 'react'
import { Switch, Route } from 'react-router-dom'

import homepage from './components/homepage'
import FullstackPage from './pages/FullstackPage'
import SoloPage from './pages/SoloPage'
import AboutMe from './pages/AboutMe'


const Routes = () => {

    return(
        <div>
            <Switch>
                <Route exact path ='/' component={homepage} />
                <Route path='/homepage' component={homepage} />
                <Route path='/fullstack' component={FullstackPage}/>
                <Route path='/solo' component={SoloPage} />
                <Route path='/aboutme' component={AboutMe}  />
            </Switch>
        </div>
    )

}

export default Routes