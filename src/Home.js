import React from "react";
import Header from "./Header"
import { Link } from "react-router-dom";
import rickAndMorty from "./images/rickAndMorty.png"
import rick from "./images/rick.png"
import morty from "./images/morty.png"

const Home = () => {
    return(
        <div className="Home">

            <Header style={{display:"none"}}/>
            <section className="login">
           
                <div className="background-image">
                    <img src={rick} alt="" />
                    <img src={morty} alt="" />
                </div>
                <div className="form-container">
                    <form action="">
                    <h1 style={{marginBottom:20}}>Welcome</h1>
                        <input 
                        type="text" 
                        name="" 
                        id="" 
                        placeholder="Username"
/>
                        <input 
                        type="text" 
                        name="" 
                        id="" 
                        placeholder="Age"
                        />
                    <Link to="/cards"><button 
                        className="form--submit">
                        View Cards
                    </button></Link>
                    </form>
                </div>
            </section>
        </div>
    )
};
export default Home


//  <img className="background-image" src={rickAndMorty} alt="" />