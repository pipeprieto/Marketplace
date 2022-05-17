import React from "react";

class Practica extends React.Component {
  constructor(props) {
    super(props);
    this.state = { count: 0, msg: "" };
  }

  addCount = () => {
    // this.handdleMsg();
    this.setState({
      count: this.state.count + 1,
    });
  };
  //   handdleMsg() {
  //     if (this.state.count > 10) {
  //       this.setState({ msg: "Viejo estás loco!" });
  //     }
  //   }
  render() {
    return (
      <div>
        <div>Contador: {this.state.count}</div>
        <div>
          <p>{this.state.msg}</p>
        </div>
        <button onClick={this.addCount}>Añadir</button>
      </div>
    );
  }
}
export default Practica;
