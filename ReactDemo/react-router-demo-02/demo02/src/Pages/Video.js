import React from 'react'
import { Route , Link } from 'react-router-dom'
import American from './video/American'
import Korean from './video/Korean'
import Janpanese from './video/Janpanese'

function Video(){
    return (
        <div>
            <div className="topNav">
                <ul>
                    <li><Link to="/video/American">美剧</Link></li>
                    <li><Link to="/video/Janpanese">日剧</Link></li>
                    <li><Link to="/video/Korean">韩剧</Link></li>
                </ul>
                
            </div>
            <div className="videoContent">
                <div><h3>热门视频</h3></div>
                <Route path="/video/American" component={American} />
                <Route path="/video/Janpanese" component={Janpanese} />
                <Route path="/video/Korean" component={Korean} />
            </div>
        </div>
        
    )
}

export default Video;