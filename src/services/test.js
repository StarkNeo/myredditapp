
let id = '16zhkf1';
let namesub = "r/mildlyinteresting";
let permalink = "/r/mildlyinteresting/comments/16zhkf1/flying_over_antartica_from_chile_to_australia/"


let url = `https://www.reddit.com/${permalink}`

const getComments = async () => {
    const response = await fetch(url);
    const json = await response.json();
    console.log(json)
    return json;
}
/*
const search = async () => {
    const response = await fetch(`https://www.reddit.com/search.json?q=flying_over_antartica_from_chile_to_australia`)
    const json = await response.json();
    console.log(json);
}
*/