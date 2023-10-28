import React from "react";
import { useState, useEffect } from "react";
import { getComments } from "../../services/apiconnect";
import { Article } from "./Article";
import { loadArticles } from "../../app/store";
import './articles.css'
import { NavigationTop } from "../NavigationTop/NavigationTop";
export const Articles = (props) => {
    const { articles, dispatch } = props;
    
    return (
        <>
        
        <NavigationTop topics={props.topics} dispatch={dispatch} />
            
        <h1 id="title-sec-articles">{props.term}</h1>
        {articles.map(element => (<Article key={element.data.id} data={element.data} permalink={element.data.permalink} />))}

        </>
        

    )

}