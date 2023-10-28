import React from "react";
import lupa from '../Assets/icon-search.svg';
import { useState } from "react";
import { search } from "../services/apiconnect";
import { setSearchTerm, articlesSelected, clearSearchTerm, loadArticles } from "../app/store";

export const Search = (props) => {
    const { term, dispatch } = props;
    const [words, setWords] = useState('')

    const handleClick = async () => {
        let itemsFound;
        if (words === '') {
            dispatch(loadArticles())
        } else {
            itemsFound = await search(words)
            dispatch(articlesSelected(itemsFound))
            dispatch(setSearchTerm(words))
        }

    }
    const handleDoubleClick = () => {
        setWords('')
        dispatch(clearSearchTerm())
        dispatch(loadArticles())
    }
    const handleChange = (e) => {
        console.log(e.target.value)
        setWords(e.target.value)
    }
    return (
        <>
            <div id="search-bar">
                <img className="lupa" src={lupa} onClick={handleClick} />
                <input className="search-btn" type="search" placeholder="Search Reddit" onChange={handleChange} onDoubleClick={handleDoubleClick} value={words} />
            </div>
        </>

    )
}