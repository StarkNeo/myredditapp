import React, { useEffect } from "react";
import { useState } from "react";
import { setSearchTerm } from "../../app/store";
import { articlesSelected } from "../../app/store";
import { search } from "../../services/apiconnect";
import { loadArticles } from "../../app/store";
import './navigationTop.css'
export const NavigationTop = (props) => {
    const { topics, dispatch } = props;
    const [show, setShow] = useState(false)

    const handleClickShowMore = () => {
        setShow(!show);

    }

    const handleClick = async (e) => {
        if (e.target.innerHTML === 'Popular') {
            dispatch(loadArticles())
        }
        else {
            let itemsFound = await search(e.target.innerHTML)
            dispatch(articlesSelected(itemsFound))
        }
        dispatch(setSearchTerm(e.target.innerHTML))

    }

    return (
        <>
            <h4 id="title-nav-top" onClick={handleClick}>Popular</h4>

            <section id="nav-top">

                <section id="top-main-topics">
                    
                        {topics.map(element => {
                            if (element.id < 7) {
                                return (

                                    <details className="top-topic-category" key={element.id}>
                                        
                                            <summary className="type">{element.type}</summary>
                                        
                                        <ul id="top-list-subtype">
                                            {element.subtype.map(element => (<li key={element} className="subtype" onClick={handleClick}>{element}</li>))}
                                        </ul>
                                    </details>


                                )

                            }
                        }

                        )}
                    

                </section>
                <input id="top-btn-show-topics" type="button" value={!show ? 'Show more' : 'Show less'} onClick={handleClickShowMore} />
                <section id="top-complement-topics" style={!show ? { display: 'none' } : { display: 'block' }}>
                    <select id="top-list-complements">
                        {topics.map(element => {
                            if (element.id >= 7) {
                                return (
                                    <option key={element.id} className="type" onClick={handleClick}>{element.type}</option>
                                )
                            }


                        })}
                    </select>

                </section>



            </section>
        </>


    )
}