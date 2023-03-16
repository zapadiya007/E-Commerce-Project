import './Title.css';

function Title(props) {
    return (

        <div className="title-component">

            <h1>{props.name} Component</h1>
            <h4>This is Function Component</h4>
        </div>
    )
}

export default Title;