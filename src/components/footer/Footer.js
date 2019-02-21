import React from 'react';

const footerStyle={
        marginTop: "20px",
        width: "100%",
        backgroundColor: "#fff",
        textAlign: "center",
        padding:"5px 0"
   
}


const Footer = ()=>{
    return (

            <footer>
                <div style={footerStyle}>
                    <p>Shop © 2020 <br /> Designed by Andrzej</p>
                </div>
            </footer>
        
    )
}

export default Footer;


