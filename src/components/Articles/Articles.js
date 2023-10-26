import React from "react";
import { useState, useEffect } from "react";
import { getComments } from "../../services/apiconnect";
import { Article } from "./Article";
import { loadArticles } from "../../app/store";
export const Articles = (props) => {
    const { articles, dispatch } = props;
    
    return (
        articles.map(element => (<Article key={element.data.id} data={element.data} permalink={element.data.permalink} />))


    )

}