import React from "react";
import { NavLink } from "react-router-dom";
import Home from "./Home";
import Characters from "./Characters";
import Lore from "./Lore";

const NavBar = () => {
   return (
     <nav>
       <ul>
         <li>
           <NavLink to="/" activeClassName="active">
             Home🐉
           </NavLink>
         </li>
         <li>
           <NavLink to="/characters" activeClassName="active">
             Characters⚔️
           </NavLink>
         </li>
         <li>
           <NavLink to="/dragons" activeClassName="active">
             Dragons🔥
           </NavLink>
         </li>
         <li>
           <NavLink to="/lore" activeClassName="active">
             Lore📖
           </NavLink>
         </li>
       </ul>
     </nav>
   );
};

export default NavBar