import React from "react";
import { Articles } from "../components/Articles/Articles";
//https://www.reddit.com/r/{listing}.json?limit={count}&t={timeframe}

/*The values that you can choose from are:

timeframe = hour, day, week, month, year, all
listing = controversial, best, hot, new, random, rising, top

//JSON URL: https://www.reddit.com/r/popular.json
JSON URL: https://www.reddit.com/search.json?q=cake%20recipes
*/
export const getComments = async () => {
    const response = await fetch('https://www.reddit.com/r/popular.json')
    const json = await response.json();
    return json.data.children
}


export const search = async () => {
    const response = await fetch(`https://www.reddit.com/search.json?q=cake`)
    const json = await response.json();
    console.log(json);
}

export let arreglo = await getComments();

console.log(arreglo);