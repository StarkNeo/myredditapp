import React, { useEffect } from "react";
import { useState } from "react";
import { setSearchTerm } from "../../app/store";
import { articlesSelected } from "../../app/store";
import { search } from "../../services/apiconnect";
import { loadArticles } from "../../app/store";
import './navigationLeft.css';
export const NavAsideLeft = (props) => {
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
        <section id="aside-left">
            <h3 id="title-nav-left" onClick={handleClick}>Popular</h3>
            <section id="main-topics">
                <legend>TOPICS</legend>


                {topics.map(element => {
                    if (element.id >= 1 && element.id < 7) {
                        return (
                            <details className="topic-category" key={element.id}>
                                <summary className="type">{element.type}</summary>
                                <ul id="list-subtype">
                                    {element.subtype.map(element => (<li key={element} className="subtype" onClick={handleClick}>{element}</li>))}
                                </ul>
                            </details>
                        )
                    }

                })}
            </section>

            <input id="btn-show-topics" type="button" value={!show ? 'Show more' : 'Show less'} onClick={handleClickShowMore} />
            <section id="complement-topics" style={!show ? { display: 'none' } : { display: 'block' }}>
                <ul id="list-complements">
                {topics.map(element => {
                    if (element.id >= 7) {
                        return (
                            <li key={element.id} className="type" onClick={handleClick}>{element.type}</li>
                        )
                    }


                }
                
                )}
                </ul>
            </section>

        </section>

    )
}