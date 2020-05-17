import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Index from './Pages/Index'
import './index.css'
import Video from './Pages/Video'
import Novel from './Pages/Novel'

function AppRouter() {
    return (
        <Router>
            <div className="mainDiv">
                <div className="leftNav">
                    <h3>导航栏</h3>
                    <ul>
                        <li><Link to="/">首页</Link></li>
                        <li><Link to="/video">视频页</Link></li>
                        <li><Link to="/Novel">小说页</Link></li>
                    </ul>
                </div>
                <div className="rightMain">
                    <Route path="/" exact component={Index} />
                    <Route path="/video/" component={Video} />
                    <Route path="/Novel/" component={Novel} />
                </div>
            </div>
    
        </Router>
    )
}

export default AppRouter;