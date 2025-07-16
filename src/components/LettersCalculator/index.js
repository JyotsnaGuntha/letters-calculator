// Write your code here.
import {Component} from 'react'
import './index.css'

class LettersCalculator extends Component {
  state = {inputText: ''}

  onChangeInput = event => {
    this.setState({inputText: event.target.value})
  }

  render() {
    const {inputText} = this.state
    const count = inputText.replaceAll(' ', '').length

    return (
      <div className="app-container">
        <div className="calculator-container">
          <div className="text-section">
            <h1 className="heading">Calculate the Letters you enter</h1>
            <label htmlFor="userInput" className="label">
              Enter the phrase
            </label>
            <input
              type="text"
              id="userInput"
              placeholder="Enter the phrase"
              className="input"
              value={inputText}
              onChange={this.onChangeInput}
            />
            <p className="letter-count">No.of letters: {count}</p>
          </div>
          <img
            src="https://assets.ccbp.in/frontend/react-js/stop-watch-with-calculator-img.png"
            alt="letters calculator"
            className="calculator-img"
          />
        </div>
      </div>
    )
  }
}

export default LettersCalculator
