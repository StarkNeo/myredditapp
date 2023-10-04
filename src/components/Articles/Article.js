import React from "react";
import arrowUp from '../../Assets/9024256_arrow_fat_up_light_icon.svg';
import arrowDown from '../../Assets/9024254_arrow_fat_down_light_icon.svg';
import comments from '../../Assets/comments_3979.png';
import './articles.css';

export const Article =(props)=>{
    console.log(props)
    let ups, down, comment;
    let now = new Date();

    let pass = new Date(props.data.created);
    let minutos = pass.getTimezoneOffset()/60;
    console.log(minutos);
    
    
    let image = props.data.url?props.data.url:'';
    console.log(image);
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
        comment=props.data.num_comments;
    }
    else if(props.data.num_comments > 999 && props.data.num_comments < 1000000){
        comment= (props.data.num_comments/1000).toFixed(1)+'K';
    }
    else if(props.data.num_comments > 1000000){
        comment= (props.data.num_comments/1000000).toFixed(1)+"M";
    }


    const data ={
        id: props.data.id,
        subreddit_name_prefixed: props.data.subreddit_name_prefixed,
        author: props.data.author,
        created:`${minutos} hours ago`,
        created_utc:props.data.created_utc,
        title: props.data.title,
        selftext: props.data.selftext,
        ups: ups,
        down: down,
        num_comments:comment,
        images:image
    }
    return (
        <>
        <details>
            <summary>{data.title}</summary>
        <ul className="source-details">
            <li key={1}>{data.subreddit_name_prefixed}</li>
            <li key={2}>{data.created}</li>
        </ul>
        by {data.author}<br></br>
        {props.data.url?<img className="img-article" src={props.data.url} />:''}
        </details>
        <ul className="state-bar">
            <li key={1} className="bar-element"><img className="icons-article" src={arrowUp} /><h5 className="counters">{data.ups}</h5></li>
            <li key={2} className="bar-element"><img className="icons-article" src={arrowDown}  /><h5 className="counters">{data.down}</h5></li>
            <li key={3} className="bar-element"><img className="icons-article" src={comments} /><h5 className="counters">{data.num_comments}</h5></li>
        </ul>
        </>

    )

}