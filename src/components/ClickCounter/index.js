// Write your code here
import {Component} from 'react'
import './index.css'

class ClickCounter extends Component {
  state = {counter: 0}

  increaseCount = () => {
    this.setState(prevState => {
      console.log(prevState.counter)
      return {counter: prevState.counter + 1}
    })
  }

  render() {
    const {counter} = this.state
    return (
      <div className="page-container">
        <div className="main-container">
          <h1 className="heading">
            The Button has been clicked
            <span className="counter">{counter}</span> times
          </h1>
          <p className="para">Click the button to increase the count!</p>
          <button className="button" onClick={this.increaseCount} type="button">
            Click Me!
          </button>
        </div>
      </div>
    )
  }
}

export default ClickCounter
