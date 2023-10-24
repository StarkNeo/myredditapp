import React, { useEffect } from "react";
import { useState } from "react";
import { Search } from "../Search";
import { loadTopics } from "../../app/store";
export const NavAsideLeft = (props) => {
    //const [topic, setTopic]= useState('');
    const {topics, dispatch}=props;
    const onFirstRender=()=>{
        dispatch(loadTopics());
    }
    useEffect(onFirstRender,[]);

    /*const handleClick=(e)=>{
        console.log(e.target.innerHTML);
        setTopic(e.target.innerHTML);
    }
    console.log(topic);
    */
   return (
        <section id="aside-left">
            <ul>
                
                <li>Popular</li>
            </ul>
            
            <legend>TOPICS</legend>
            <ul>
                {/*  
                <li key="Gaming" onClick={handleClick}>Gaming</li>
                <li key="Sports" onClick={handleClick}>Sports</li>
                <li key="Business" onClick={handleClick}>Business</li>
                <li key='Crypto' onClick={handleClick}>Crypto</li>
                <li key='Television' onClick={handleClick}>Television</li>
                <li key='Celebrity' onClick={handleClick}>Celebrity</li>
                    */}
                    {topics.map(element=>(
                    <li key={element.id}>
                        {element.type}
                    </li>)
                    )}
                </ul>

        </section>

    )
}