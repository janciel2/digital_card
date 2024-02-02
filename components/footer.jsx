import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHouse, faMagnifyingGlass, faCheck, faCake} from '@fortawesome/free-solid-svg-icons'
import "../css/footer.css"


export default function Footer(){
    const icon = <FontAwesomeIcon icon = { faHouse } className="icon-list"/>
    const icon2 = <FontAwesomeIcon icon = { faMagnifyingGlass } className="icon-list"/>
    const icon3= <FontAwesomeIcon icon = { faCheck } className="icon-list"/>
    const icon4 = <FontAwesomeIcon icon = { faCake } className="icon-list"/>
    return (
        <>
           <footer> 
                <div className="footer-details">
                {icon}
                {icon2}
                {icon3}
                {icon4}
                </div>
           </footer>
        </>
    )
}