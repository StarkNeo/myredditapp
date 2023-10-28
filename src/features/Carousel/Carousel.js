import React from "react";
import { useState, useEffect } from "react";
import './carousel.css';
import { Slide } from "./Slide";
import { carousel } from "../../services/apiconnect";

export const Carousel = (props) => {
    const [slides, setSlides] = useState(carousel);
    
    function SliderLeft() {
        let newSlides = slides.map(element => element);
        let slidePosicionCero = newSlides[0];
        for (let i = 0; i < ((newSlides.length - 1)); i++) {
            newSlides[i] = newSlides[i + 1];
        };

        newSlides[9] = slidePosicionCero;
        setSlides(newSlides);
    }

    //FUNCION DESLIZAMIENTO A LA IZQUIERDA



    //FUNCION DESLIZAMIENTO A LA DERECHA
    function SlideRight() {
        let newSlides = slides.map(element => element);
        let slidePosicionDiez = newSlides[9];
        for (let index = 9; index > ((newSlides.length - 10)); index--) {

            newSlides[index] = newSlides[index - 1];

        }
        newSlides[0] = slidePosicionDiez;
        setSlides(newSlides);
    }

    return (
        <div id="slides">
            <input className="slider-btn-left" type="button" onClick={SlideRight} value="" />
            <Slide topic={slides[0].data.title} subreddit={slides[0].data.subreddit_name_prefixed} url={slides[0].data.url} media={slides[0].data.secure_media ? slides[0].data.secure_media.reddit_video.fallback_url : ''} />
            <Slide topic={slides[1].data.title} subreddit={slides[1].data.subreddit_name_prefixed} url={slides[1].data.url} media={slides[1].data.secure_media ? slides[1].data.secure_media.reddit_video.fallback_url : ''} />
            <Slide topic={slides[2].data.title} subreddit={slides[2].data.subreddit_name_prefixed} url={slides[2].data.url} media={slides[2].data.secure_media ? slides[2].data.secure_media.reddit_video.fallback_url : ''} />
            <input className="slider-btn-right" type="button" onClick={SliderLeft} value="" />

        </div>



    )
}

