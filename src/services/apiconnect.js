import React from "react";
import { Articles } from "../components/Articles/Articles";
//https://www.reddit.com/r/{listing}.json?limit={count}&t={timeframe}

/*The values that you can choose from are:

timeframe = hour, day, week, month, year, all
listing = controversial, best, hot, new, random, rising, top

//JSON URL: https://www.reddit.com/r/popular.json
JSON URL: https://www.reddit.com/search.json?q=cake%20recipes

https://www.reddit.com/{subreddit_name_prefixed}/comments/{id}/what_is_something_that_smells_great_but_isnt/

*/


export const getArticles = async () => {
    const response = await fetch('https://www.reddit.com/r/popular.json')
    const json = await response.json();
    
    return json.data.children
}

/*
export const search = async () => {
    const response = await fetch(`https://www.reddit.com/r/Jujutsushi/comments/jujutsu_kaisen_chapter_238_prerelease_leaks_thread`);
    const json = await response.json();
    return json
}*/

export const getPosts = async (link)=>{
    let response = await fetch(`https://www.reddit.com${link.slice(0,-1)}.json`);
    let json = await response.json();
    return json;
}
export let arreglo = await getArticles();
