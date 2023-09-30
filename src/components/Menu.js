import React from "react";

export const ListMenu = ()=>{
    return (
        <ul id="menu">
            <li style={{color:"black", fontSize:"1.2rem"}}>Get app</li>
            <li id="login-button">Log In</li>
            <li className="drop-down">
                <input id="elipsis" type="button" value="..."/>
                <ul className="sub-nav">
                    <li>Log in/Sign up</li>
                    <li>Advertise on Reddit</li>
                    <li>Shop Collectible Avatars</li>
                </ul>
            </li>
            
            
        </ul>
    )
}