import React from "react";
import { useState, useEffect } from "react";
import { getComments } from "../../services/apiconnect";
import { Article } from "./Article";
import { arreglo } from "../../services/apiconnect";
import { getPosts } from "../../services/apiconnect";
import arrowUp from '../../Assets/9024256_arrow_fat_up_light_icon.svg';
import arrowDown from '../../Assets/9024254_arrow_fat_down_light_icon.svg';

export const Articles = (props) => {
    const [articles, setArticles] = useState(arreglo);
    
    return (
                articles.map(element => (<Article key={element.data.id} data={element.data} permalink={element.data.permalink} />))

        )
}