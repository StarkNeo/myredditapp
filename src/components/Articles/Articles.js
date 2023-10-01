import React from "react";
import './articles.css';
import arrowUp from '../../Assets/9024256_arrow_fat_up_light_icon.svg';
import arrowDown from '../../Assets/9024254_arrow_fat_down_light_icon.svg';
import comments from '../../Assets/comments_3979.png'
export const Article=()=>{
    return (
        <>
        <details>
            <summary>First look inside Vegas sphere during U2 concert</summary>
        <ul className="source-details">
            <li>r/mildlyblablabla</li>
            <li>3hr. ago</li>
            <li>Because you show interest in a similar community</li>
        </ul>
        <img className="img-article" src="https://preview.redd.it/im-old-enough-to-remember-when-republicans-were-outraged-at-v0-sbftfxg5yerb1.png?width=1080&crop=smart&auto=webp&s=941692b240b9ceae33b7317116e2498dc4a9132a"/>
        </details>
        <ul className="state-bar">
            <li className="bar-element"><img className="icons-article" src={arrowUp} /><h5>3.4k</h5></li>
            <li className="bar-element"><img className="icons-article" src={arrowDown}  /></li>
            <li className="bar-element"><img className="icons-article" src={comments} /><h5>199</h5></li>
        </ul>
        </>
        
    )
}