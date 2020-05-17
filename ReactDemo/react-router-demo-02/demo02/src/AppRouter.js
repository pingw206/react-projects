import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Index from './Pages/Index'
import './index.css'
import Video from './Pages/Video'
import Novel from './Pages/Novel'

function AppRouter() {
    let routeCongig = [
        {path:'/',title:'首页',exact:true, component:Index},
        {path:'/video/',title:'视频页',exact:false,component:Video},
        {path:'/Novel/',title:'小说页',exact:false, component:Novel}
    ]
    return (
        <Router>
            <div className="mainDiv">
                <div className="leftNav">
                    <h3>导航栏</h3>
                    <ul>
                        {
                            routeCongig.map((item,index)=>{
                                return(<li key={index}><Link to={item.path}>{item.title}</Link></li>)
                            })
                        }
                    </ul>
                </div>
                <div className="rightMain">
                        {
                            routeCongig.map((item,index)=>{
                                return(<Route key={index} path={item.path} exact={item.exact} component={item.component} />)
                            })
                        }
                </div>
            </div>
    
        </Router>
    )
}

export default AppRouter;