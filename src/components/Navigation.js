import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { routes } from "../services/routes";

export const Navigation = () => {
    const [sectionTypes, setSectionTypes] = useState([]);
    
    useEffect(() => {
        setSectionTypes(routes);
    }, [])

    console.log(sectionTypes)
    return (
        <nav className="navigation">
            <ul className="nav-links">
                {sectionTypes ? sectionTypes.map(element => (
                    <li className="link" key={element.id}>
                        <NavLink
                            to={`/${element.type}`}
                            key={element.id}
                            className={({ isActive }) => isActive ? 'nav-link nav-link-active' : 'nav-link'}
                        >
                            {element.type}

                        </NavLink>
                    </li>
                )):"loading"}
            </ul>
        </nav>
    )
}