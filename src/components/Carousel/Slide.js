import React from "react";

export const Slide = (props) => {

    return (
        <div className="slide">
            <a href={props.url}>

                <video type="video/mp4" width='320px' height='300px' src={props.media.slice(0, (props.media.length) - 16)} autoPlay / >
                <p className="video-data">

                  <span className="slide-title">{props.topic}</span>  
                  <br/>
                  <span className="slide-subredit"><i>{props.subreddit}</i></span>  

                </p>
            </a>


        </div>
    )
}