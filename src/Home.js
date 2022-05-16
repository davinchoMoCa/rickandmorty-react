import React from "react";
import Header from "./Header"
import { Link } from "react-router-dom";

const Home = () => {
    return(
        <div className="Home">
            <Header />
            <section className="login">
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