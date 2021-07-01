import React from 'react';
import { Link } from "react-scroll";


const NavigationItem = ({item, setIsOpen }) => {
    const {name, id} = item

    return (
        <li className="navigation__item" >
            <Link activeClass="navigation__link--active" className="navigation__link" to={id} spy={true} smooth={true} offset={-70} duration={500} onClick={()=> setIsOpen(false)}>{name}</Link>
        </li>
    )
}

export default NavigationItem;