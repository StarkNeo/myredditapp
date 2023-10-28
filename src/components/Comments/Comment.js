import React from "react";
import arrowUp from '../../Assets/9024256_arrow_fat_up_light_icon.svg';
import arrowDown from '../../Assets/9024254_arrow_fat_down_light_icon.svg';
import comments from '../../Assets/comments_3979.png';
import { useState, useEffect } from "react";
import './comments.css';

export const Comments = (props) => {
    const [comms, setComms]=useState(null)

    useEffect(()=>{
        setComms(props.adds)
    })

    if(comms !== null){
        let ups, down, reply;
    let now = new Date();

    let pass = new Date(props.data.created);
    let minutos = pass.getTimezoneOffset()/60;
    
    
    let image = props.data.url?props.data.url:'';
    if (props.data.ups < 1000) {
        ups=props.data.ups;
    }
    else if(props.data.ups > 999 && props.data.ups < 1000000){
        ups= (props.data.ups/1000).toFixed(1)+'K';
    }
    else if(props.data.ups > 1000000){
        ups= (props.data.ups/1000000).toFixed(1)+"M";
    }

    if (props.data.downs < 1000) {
        down=props.data.down;
    }
    else if(props.data.downs > 999 && props.data.downs < 1000000){
        down= (props.data.downs/1000).toFixed(1)+'K';
    }
    else if(props.data.downs > 1000000){
        down= (props.data.downs/1000000).toFixed(1)+"M";
    }

    if (props.data.num_comments < 1000) {
        reply=props.data.num_comments;
    }
    else if(props.data.num_comments > 999 && props.data.num_comments < 1000000){
        reply= (props.data.num_comments/1000).toFixed(1)+'K';
    }
    else if(props.data.num_comments > 1000000){
        reply= (props.data.num_comments/1000000).toFixed(1)+"M";
    }

    
    }
    

    return (
        <>
            <div style={props.style} className="pop-comments">
                <div className="close-btn">{props.data.num_comments} Comments for: {props.data.title} <input className="btn-posts" type="button" value="X" onClick={props.onClick} /></div>
               
                <ul className="list-posts">
                    {comms !==null? comms.map(element => (
                        <details key={element.data.id}>
                            <summary>{element.data.body}</summary>
                            <h5>{element.data.author}</h5>
                            <ul className="state-bar">
                                <li key={1} className="bar-element"><img className="icons-article" src={arrowUp} /><h5 className="counters">{element.data.ups}</h5></li>
                                <li key={2} className="bar-element"><img className="icons-article" src={arrowDown} /><h5 className="counters">{element.data.down}</h5></li>
                            </ul>
                        </details>
                    )) : <h1>No comments</h1>}

                </ul>
            </div>
            {/*  
        
        */}
        </>

    )

}