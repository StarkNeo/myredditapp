import React from "react";
import arrowUp from '../../Assets/9024256_arrow_fat_up_light_icon.svg';
import arrowDown from '../../Assets/9024254_arrow_fat_down_light_icon.svg';
import comments from '../../Assets/comments_3979.png';
import './articles.css';
import { Comments } from "../Comments/Comment";
import { useState, useEffect } from "react";
import { getPosts } from "../../services/apiconnect";
import { NavAsideRight } from "../MobileNav/NavigationTop";

export const Article = (props) => {
    const [showComments, setShowComments] = useState(false);
    const [posts, setPosts] = useState(null)


    const commentsStyle = {
        display: showComments === true ? 'block' : 'none',

    }

    const handleDisplayComments = async () => {
        if (posts === null) {
            let result = await getPosts(props.permalink)
            setPosts(result[1].data.children)
        }
        setShowComments(!showComments)

    }


    let ups, down, comment;
    let now = new Date();
    let displayComments = false;


    let pass = new Date(props.data.created);
    let minutos = pass.getTimezoneOffset() / 60;


    let image = props.data.url ? props.data.url : '';
    if (props.data.ups < 1000) {
        ups = props.data.ups;
    }
    else if (props.data.ups > 999 && props.data.ups < 1000000) {
        ups = (props.data.ups / 1000).toFixed(1) + 'K';
    }
    else if (props.data.ups > 1000000) {
        ups = (props.data.ups / 1000000).toFixed(1) + "M";
    }

    if (props.data.downs < 1000) {
        down = props.data.down;
    }
    else if (props.data.downs > 999 && props.data.downs < 1000000) {
        down = (props.data.downs / 1000).toFixed(1) + 'K';
    }
    else if (props.data.downs > 1000000) {
        down = (props.data.downs / 1000000).toFixed(1) + "M";
    }

    if (props.data.num_comments < 1000) {
        comment = props.data.num_comments;
    }
    else if (props.data.num_comments > 999 && props.data.num_comments < 1000000) {
        comment = (props.data.num_comments / 1000).toFixed(1) + 'K';
    }
    else if (props.data.num_comments > 1000000) {
        comment = (props.data.num_comments / 1000000).toFixed(1) + "M";
    }


    const data = {
        id: props.data.id,
        subreddit_name_prefixed: props.data.subreddit_name_prefixed,
        author: props.data.author,
        created: `${minutos} hours ago`,
        created_utc: props.data.created_utc,
        title: props.data.title,
        selftext: props.data.selftext,
        ups: ups,
        down: down,
        num_comments: comment,
        images: image,
        link_to_comments: `https://www.reddit.com/${props.data.subreddit_name_prefixed}/comments/${props.data.id}/${props.data.title}`,
        permalink: props.permalink,
        posts: posts
    }

    return (
        <>
            <div className="article-section">
                <details>

                    <summary>{data.title}</summary>
                    <ul className="source-details">
                        <li key={1}>{data.subreddit_name_prefixed}</li>
                        <li key={2}>{data.created}</li>
                    </ul>
                    by {data.author}<br></br>
                    {props.data.url ? <img className="img-article" src={props.data.url} alt="picture added to this articles" /> : ''}
                </details>
                <ul className="state-bar">
                    <li key={1} className="bar-element"><img className="icons-article" src={arrowUp} alt="arrow ups" />{data.ups}</li>
                    <li key={2} className="bar-element"><img className="icons-article" src={arrowDown} alt="arrow down" />{data.down}</li>
                    <li key={3} className="bar-element" onClick={handleDisplayComments}><img className="icons-article" src={comments} alt="box of comments" />{data.num_comments}</li>
                </ul>
                <Comments data={props.data} style={commentsStyle} adds={posts} onClick={handleDisplayComments} />
            </div>




        </>

    )

}