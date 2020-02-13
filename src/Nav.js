import React from "react"
import {NavLink} from "react-router-dom"
import {Menu} from 'antd';
// import './Nav.css'
function Nav(){

    const newStyle = {
        padding:'5px',
        display:"flex"
    }
    
    return(
        <div>
            {/* <Menu
             theme="dark"
             defaultSelectedKeys={['2']}
             mode="horizontal"
             style={{ lineHeight: '64px' }}
            >

            <NavLink style={newStyle} to="/home">
                <Menu.Item key="1">Home</Menu.Item>
            </NavLink>
            <NavLink to="/todo">
                <Menu.Item key="2">To Do</Menu.Item>
            </NavLink>
            <NavLink to="/about">
                <Menu.Item key="3">About</Menu.Item>
            </NavLink>
            
            </Menu> */}

            <ul className="navbar" style={{listStyle:"none",justifyContent:"space-around",alignItems:"center"}}>
            <NavLink style={newStyle} to="/home">
                <li>Home</li>
            </NavLink>
            <NavLink style={newStyle} to="/todo">
                <li>Todo</li>
            </NavLink>
            <NavLink style={newStyle} to="/about">
                <li>About</li>
            </NavLink>
            </ul>

        </div>
    );
}

export default Nav;