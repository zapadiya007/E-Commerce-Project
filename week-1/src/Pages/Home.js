import React, { Component } from "react";
import Title from "../Component/Title";
import './Home.css';



class Home extends Component {
    render() {
        return (
            <div className="home-pages">
                <h1>Class Component</h1>
                <h3>This is Class Component</h3>
                <br />
                <Title name="Ashish"/>
                <Title name="Zapadiya"/>
                <Title name="Haresh"/>

            <br/>
            </div>

        )
    }

}

export default Home;