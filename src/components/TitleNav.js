import React from "react";
import { useState, useEffect } from "react";
import './titleNav.css';
import { Search } from "./Search";
import { ListMenu } from "./Menu";

export const TitleBar =()=>{

    return (
        <nav id="title-Nav">
            <img id="logo" src="https://logos-world.net/wp-content/uploads/2020/10/Reddit-Logo.png"></img>
            <Search />
            <ListMenu />
        </nav>
       
    )
}