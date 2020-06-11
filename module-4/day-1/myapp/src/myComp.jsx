import React from 'react'

//Functional Component
// const myComp = (props) => {
//     console.log("this is my own code: ", props)
// return (
//     <div style={props.style}>
//         <h1 className="title">{props.text}</h1>
//         <h1 className="title">{props.spaceship}</h1>
//     </div>
// )

// }

//Class Component
class myComp extends React.Component {
    //duhet te jete gjithmon state sepse ndiqet nga react
    state = {
        counter: 0
    }
    increase = () => {

        this.setState({ counter: this.state.counter + 1 })
    }
    render() {
        console.log("props object", this.props)
        //console.log("state: ", this.state)
        return (
            <div style={this.props.style}>
                <h1 className="title">{this.props.text}</h1>
                <button onClick={this.increase}>Increase</button>
                <p>My counter from the state is: {this.state.counter}</p>
                <h1 className="title">{this.props.spaceship}</h1>
            </div>
        )
    }
}
export default myComp