import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'

import homepage from './components/homepage'
import FullstackPage from './pages/FullstackPage'
import SoloPage from './pages/SoloPage'
import AboutMe from './pages/AboutMe'
import PhotographyPage from './pages/PhotographyPage'


const Routes = () => {

    return(
        <div>
            <Switch>
                <Route path='/engineering' component={FullstackPage}/>
                <Route path='/photography' component={PhotographyPage}/>
                <Route path='/solo' component={SoloPage} />
                <Route path='/aboutme' component={AboutMe}  />
                <Route exact path ='/' component={homepage} />
                <Redirect to ='/' component={homepage} />
            </Switch>
        </div>
    )

}

export default Routes