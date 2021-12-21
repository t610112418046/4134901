import React from "react";

//stateful

class Wheel extends React.Component {
    constructor(){
      super();
      this.state = [2, 4, 6, 8, 10];
    }
  render() {
    return <>{this.state.length > 0 && <p>I have 4 wheels.</p>}</>;
  }
}

class Car extends React.Component {
  constructor(props) {
    super(props);
    this.state = { brand: "Toyota" };
  }
  changeBrand = (msg) =>{
    this.setState({brand  : "Mazda"})
    alert(msg)
  }
  render() {
    return (
      <>
        <Wheel />
        <p>
          My car is <span>{this.state.brand}</span>, {this.props.age}
          <br />
          Eye color is {this.props.eye}
        </p>
        <button onClick={()=> this.changeBrand("Hi !!")}>Click Me !!</button>
      </>
    );
  }
}

export default Car;