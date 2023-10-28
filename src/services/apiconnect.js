import React from "react";
import { Articles } from "../features/Articles/Articles";
//https://www.reddit.com/r/{listing}.json?limit={count}&t={timeframe}

/*The values that you can choose from are:

timeframe = hour, day, week, month, year, all
listing = controversial, best, hot, new, random, rising, top

//JSON URL: https://www.reddit.com/r/popular.json
JSON URL: https://www.reddit.com/search.json?q=cake%20recipes

https://www.reddit.com/{subreddit_name_prefixed}/comments/{id}/what_is_something_that_smells_great_but_isnt/

*/
//FUNCTION FOR ARRAY OF CAROUSEL
const sortArrayObjects = (array) => {
    let swapped = true;
    let topTen =[];
    while (swapped) {
        swapped = false;
        for (let index = 0; index < (array.length - 1); index++) {
            if (array[index].data.score < array[index + 1].data.score) {
                swapped = true;
                let temp = array[index];
                array[index] = array[index + 1]
                array[index + 1] = temp
            }
        }
    }
    for (let i = 0; i < 10; i++) {
        topTen.push(array[i])
    }
    return topTen;
}





export const getArticles = async () => {
    const response = await fetch('https://www.reddit.com/r/popular.json')
    const json = await response.json();

    return json.data.children
}

export const getCarousel = async () => {
    const response = await fetch('https://www.reddit.com/r/popular.json');
    const json = await response.json();
    return sortArrayObjects(json.data.children, 1)
}

export const search = async (words) => {
    const response = await fetch(`https://www.reddit.com/search.json?q=${words}`);
    const json = await response.json();
    return json.data.children
}

export const getPosts = async (link) => {
    let response = await fetch(`https://www.reddit.com${link.slice(0, -1)}.json`);
    let json = await response.json();
    return json;
}
export let arreglo = await getArticles();
export let carousel = await getCarousel()
