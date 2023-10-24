import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { arreglo, carousel } from "../services/apiconnect";
import { topics } from "../services/topics";
//ARTICLES
//State
const articlesInitialState=[];
//Action creator
export const loadArticles=()=>{
    return {
        type: 'articles/loadArticles',
        payload: arreglo
    }
}
//Reducer
const articlesReducer=(state=articlesInitialState,action)=>{
    switch (action.type) {
        case 'articles/loadArticles':
            return action.payload
        default:
            return state
            break;
    }
}

//CAROUSEL
//Initial State
const carouselInitialState=[];

//Action creator
//Dispatched when application is deployed

export const loadCarousel=()=>{
    return {
        type:'carousel/loadCarousel',
        payload: carousel
    }
}
//Reducer
const carouselReducer=(state=carouselInitialState, action)=>{
    switch (action.type) {
        case 'carousel/loadCarousel':
            return action.payload;
        default:
            return state;
    }
}

//SEARCH BAR
//State
const searchInitialState='';
//Action creator
//Dispatched when the user select one of the topic in the aside left menu
const setSearchTerm=(term)=>{
    return {
        type: 'searchTerm/setSearchTerm',
        payload: term.target.innerHTML
    }
};

//Dispatched when the user click the clear search button
const clearSearchTerm=()=>{
    return{
        type: 'searchTerm/clearSearchTerm'
    }
}

//Reducer
const searchReducer=(state=searchInitialState, action)=>{
    switch (action.type) {
        case 'searchTerm/setSearchTerm':
            return state=action.payload
        case 'searchTerm/clearSearchTerm':
            return state=''    
        default:
            return state;
            break;
    }
} 

//TOPICS
//State
const topicsInitialState=[];
//Action creators
export const loadTopics=()=>{
    return{
        type:'topics/loadTopics',
        payload:topics
    }
}
const addTopic=(topic)=>{
    return {
        type: 'topics/addTopic',
        payload:topic
    }
}

const clearTopic=(id)=>{
    return {
        type: 'topics/clearTopic',
        payload:id
    }
}

//Reducer
const topicsReducer=(state=topicsInitialState, action)=>{
    switch (action.type) {
        case 'topics/addTopic':
            return [...state, action.payload];
        case 'topics/clearTopic':
            return state.filter(element=>element.id!=action.payload)
        case 'topics/loadTopics':
            return action.payload;        
        default:
            return state;
            
    }
}



//STORE
const reducers ={
    articles:articlesReducer,
    carousel:carouselReducer,
    searchTerm:searchReducer,
    topics:topicsReducer,
}

export const store =configureStore({reducer:combineReducers(reducers)});
/*store.dispatch(loadArticles());
console.log(store.getState())*/