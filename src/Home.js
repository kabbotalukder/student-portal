import React from "react";
import './global.css';
import './Home.css';

const Home = () => {
    return(
        <div className="wrapper">
            <div className="profile-card">
                <img className="account-picture" src="https://scontent.fcgp17-1.fna.fbcdn.net/v/t1.6435-9/129910730_2828702660700832_8309785206746871122_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=174925&_nc_eui2=AeFLl7GCHh1hmBh__babMnM57KasbmCGQcnspqxuYIZByXu7NKHe4wVKLvZuPWq_Kn996CodoTkh19jtRh6aQukE&_nc_ohc=SwXu0LZSaEwAX8-mU1f&_nc_ht=scontent.fcgp17-1.fna&oh=00_AfBC52roKs_yZNNUtTvjbRMHV7qWzg3-juCl_h-Kn5cL3w&oe=64AB5D23" alt="profile-picture"/>
                <h1 className="account-title">Kabbo Talukder</h1>
            </div>
        </div>
    );
}

export default Home;