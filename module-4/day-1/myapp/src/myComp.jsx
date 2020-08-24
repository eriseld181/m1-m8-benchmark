import React from 'react'

//Functional Component
// const myComp = (props) => {
//     //console.log("this is my own code: ", props)
//     return (

//         <div style={props.style}>
//             <h1 className="title">{props.text} </h1>
//             <h1 className="title">{props.spaceship}</h1>
//         </div>
//     )

// }

// //Class Component
class myComp extends React.Component {
    //duhet te jete gjithmon state sepse ndiqet nga react
    state = {
        counter: 0,
        negativeCounter: 0
    }
    increase = () => {
        this.setState({ negativeCounter: this.state.negativeCounter - 1 })

    }

    render() {
        console.log("props object", this.movie)
        //console.log("state: ", this.state)
        return (
            <div style={this.props.style}>
                <h1 className="title" style={{ color: "red", fontSize: "12px", outline: "solid blue 2px" }}>{this.props.movie2}</h1>
                <button onClick={this.increase}>Increase</button>
                <button onClick={this.decrease}>decrease</button>
                <p>My counter from the state is: {this.state.negativeCounter}</p>

            </div >
        )
    }
}
export default myComp