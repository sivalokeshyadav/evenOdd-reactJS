// Write your code here
import './index.css'

import {Component} from 'react'

class EvenOddApp extends Component {
  state = {count: 0}

  onChangeEvent = () => {
    const randomNum = Math.ceil(Math.random() * 100)
    const {count} = this.state
    this.setState(prevState => ({count: prevState.count + randomNum}))
  }

  render() {
    const {count} = this.state
    const buttonText = count % 2 === 0 ? 'Even' : 'Odd'
    return (
      <div className="app-container">
        <div className="mini-container">
          <h1 className="heading">Count {count}</h1>
          <p className="para-container">Count is {buttonText}</p>
          <button className="button" type="button" onClick={this.onChangeEvent}>
            Increment
          </button>
          <p className="small-para">
            *Increase By Random Number Between 0 to 100
          </p>
        </div>
      </div>
    )
  }
}

export default EvenOddApp
