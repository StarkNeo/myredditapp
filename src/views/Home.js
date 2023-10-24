import React, {useEffect,useState} from "react";
import { useParams } from "react-router-dom";
import { routes } from "../services/routes";
import { Articles } from "../components/Articles/Articles";

export const Home=()=>{
    const [data,setData]=useState([]);
    const {type}=useParams();

    useEffect(()=>{
        setData(routes);
    },[]);

    if (!data) {
        return <h1>Loading...</h1>;
    }
    let mainComponent ='';

    switch (type) {
        case "Popular":
            <Articles topic="Popular" />
            break;
        case "Gaming":
            <Articles topic="Gaming" />
            break;
        case "Sports":
            <Articles topic ="Sports" />
            break;
        case "Business":
            <Articles topic ="Business" />
            break;
        case "Crypto":
            <Articles topic ="Crypto" />
            break;
        case "Television":
            <Articles topic ="Television" />
            break;
        case "Celebrity":
            <Articles topic ="Celebrity" />
            break;
    
        default:
            <Articles topic ="Here I am" />
            break;
    }

    return (
        <>
       
        </>
        
    )
}