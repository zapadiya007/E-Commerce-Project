import './Title.css';
// import React,{useState} from 'react';


function Title(props) {
    return (

        <div className="title-component">
            
            {/* take props to class component  */}
            
            <h1>{props.name} Component</h1>
            <h4>This is Function Component</h4>
            <h5>{props.desc}</h5>
        </div>
    )
} 

export default Title;