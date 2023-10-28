import React from "react";
import './titleNav.css';
import { Search } from "./Search";
import { ListMenu } from "./Menu";

export const TitleBar =(props)=>{
    const {term, dispatch}=props;
    return (
        <nav id="title-Nav">
            <div id="logo">R</div>
            <Search term={term} dispatch={dispatch} />
            <ListMenu />
        </nav>
       
    )
}