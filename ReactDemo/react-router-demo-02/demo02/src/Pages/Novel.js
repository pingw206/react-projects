import React from 'react'
import { Route , Link } from 'react-router-dom'
import Love from './Novel/Love'
import Thriller from './Novel/Thriller'
import School from './Novel/School'

function Novel(){
    return (
        <div>
            <div className="topNav">
                <ul>
                    <li><Link to="/Novel/Love">爱情故事</Link></li>
                    <li><Link to="/Novel/Thriller">悬疑故事</Link></li>
                    <li><Link to="/Novel/School">校园故事</Link></li>
                </ul>
                
            </div>
            <div className="videoContent">
                <Route path="/Novel/Love" component={Love} />
                <Route path="/Novel/Thriller" component={Thriller} />
                <Route path="/Novel/School" component={School} />
            </div>
        </div>
        
    )
}

export default Novel;