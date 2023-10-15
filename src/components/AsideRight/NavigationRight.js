import React from "react";
import { Comments } from "../Comments/Comment";

export const NavAsideRight = (props) => {

    return (
        <section id="communities">
            <legend>COMMENTS</legend>
            <h1>{props.title}</h1>
        </section>

    )
}