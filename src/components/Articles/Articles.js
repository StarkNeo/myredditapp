import React from "react";
import { useState, useEffect } from "react";
import { getComments } from "../../services/apiconnect";
import { Article } from "./Article";
import { arreglo } from "../../services/apiconnect";

export const Articles=(props)=>{
    const [comments, setComments] = useState(arreglo);
    
    

    return (
        comments.map(element=>(<Article key={element.data.id} data={element.data} />))
      
    )
}