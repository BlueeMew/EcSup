import React from "react";
import './style.css';

function Navbar(){

let NavbarStyle={
    width:"100vw",
    height:"8vh",
    minHeight:"70px",
    backgroundColor:"white",
    display:"flex",
    alignItems:"center",
    boxShadow:" 1px 1px 1px 1px grey",
    position:"fixed",
    zIndex:"999"
}
return(
    <div style={NavbarStyle}>
        <img src="https://engineercore.in/wp-content/uploads/2021/10/E-Cell-Logo.png" height="70px"/>
    </div>
)
}
export default Navbar;