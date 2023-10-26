import React, { useEffect } from "react";
import { useState } from "react";
import { Search } from "../Search";
import { loadTopics } from "../../app/store";
import { setSearchTerm } from "../../app/store";
export const NavAsideLeft = (props) => {
    const { topics, dispatch } = props;
    /*
    const onFirstRender=()=>{
        dispatch(loadTopics());
    }
    useEffect(onFirstRender,[]);
*/
    const handleClick=(e)=>{
        console.log(e.target.innerHTML);
        dispatch(setSearchTerm(e.target.innerHTML))
    }
    
    return (
        <section id="aside-left">
            <ul>

                <li onClick={handleClick}>Popular</li>
            </ul>

            <legend>TOPICS</legend>


            {topics.map(element => {
                if (element.id >1 && element.id < 8) {
                    return (
                    <details key={element.id}>
                        <summary>{element.type}</summary>
                        <ul>
                            {element.subtype.map(element=>(<li onClick={handleClick}>{element}</li>))}
                        </ul>
                    </details>
                    )
                } else {
                    return (<ul>
                        <li onClick={handleClick}>{element.type}</li>
                    </ul>)

                }

            })}


        </section>

    )
}