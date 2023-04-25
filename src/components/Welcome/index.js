/* eslint-disable react/no-unused-state */
/* eslint-disable react/button-has-type */
// Write your code here
import {Component} from 'react'
import './index.css'

class Welcome extends Component {
  state = {subscribe: 0}

  onSubscribe = () => {
    this.setState(prevState => {
        subscribe: (prevState.subscribe = subscribed),
    })
  }

  render() {
    const {subscribe} = this.state
    return (
      <div className="container">
        <h1 className="heading">Welcome</h1>
        <p className="description">Thank you! Happy Learning</p>
        <button className="button" onClick={this.onSubscribe}>
          Subscribe
        </button>
      </div>
    )
  }
}

export default Welcome
