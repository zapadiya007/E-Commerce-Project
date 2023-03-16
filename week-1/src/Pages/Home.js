import React, { Component, } from "react";
import Title from "../Component/Title";
import './Home.css';



class Home extends Component {

    // State in Class Component
    constructor() {
        super();
        this.state = {
            data: "Ashihs Class State",
            description: "Description : This is Home.js Class Component State and pass prope to Title.js file "
        }
    }

    render() {

        return (
            <div className="home-pages">
                <h1>Class Component</h1>
                <h3>This is Class Component</h3>
                <br />

                {/* <Title name="Ashish" desc="description ashish props in state  "/>
                <Title name="Zapadiya" desc="description zapadiya props in state "/>
                <Title name="Haresh" desc=" description haresh props in state "/> */}

                {/* Pass props in Class component to title.js functial component  */}

                <Title name={this.state.data} desc={this.state.description}/>


                
                <br />
            </div>

        )
    }

}

export default Home;