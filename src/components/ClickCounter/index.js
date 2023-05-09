// Write your code here
import {Component} from 'react'

import './index.css'

class ClickCounter extends Component {
  state = {count: 0}

  ButtonElement = () => {
    this.setState(prevState => ({count: prevState.count + 1}))
  }

  render() {
    const {count} = this.state
    return (
      // background container
      <div className="bg-container">
        <h1 className="heading">
          The Button has been clicked
          <span className="CounterChangingValue"> {count}</span> times
        </h1>
        <p>click the button to increase the count!</p>
        <button
          type="button"
          className="buttonElement"
          onClick={this.ButtonElement}
        >
          click Me!
        </button>
      </div>
    )
  }
}

export default ClickCounter
