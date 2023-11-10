import React from 'react'

// function Greet() {
//     return <h1> As Salamu Alaikum</h1>
// }

const Greet = props => {
    const {name,heroName} = props;
    // console.log(props);
    return (
        <div>
            <h1>Functional {name} a.k.a {heroName}</h1>
            {/* {props.children} */}
        </div>
    )
}

export default Greet