import React from 'react';
import './App.css';
import Header from './components/Header'
import Score from './components/Score'
import Character from './components/characterCard/Character'
import character from './character.json'

class App extends React.Component {
  state = {
    score: 0,
    characterList: character,
    highScore: 0
  }

  // create method to re-order the array on card click:
  handleClick = (characterID) => {

    // make a copy
    const characterListCopy = [...this.state.characterList];
    console.log(characterListCopy)
    // create a logical flag
    let isCorrect = false;

    // iterate through characterListCopy
    characterListCopy.forEach(character => {
      if (character.id === characterID) {
        if (!character.isClicked) {
          isCorrect = true;
          character.isClicked = true;
        }
      }
    })

    // if isCorrect is true, run logic for increasing point
    if (isCorrect) {


      const score = this.state.score + 1;
      // increase count by one, check if top score should be updated, and shuffle cards
      this.setState({
        score: score,
        highScore: (score >= this.state.highScore) ? (score) : (this.state.highScore),
        characterList: characterListCopy.sort(() => .5 - Math.random())
      })
    }
    else if (this.state.highScore === 9) {
      this.setState({
        score: 0,
        characterList: characterListCopy.sort(() => 0.5 - Math.random())
      })
    }
    else {
      // reset characters
      characterListCopy.forEach(character => {
        character.isClicked = false;
      })
      this.setState({
        score: 0,
        characterList: characterListCopy.sort(() => 0.5 - Math.random())
      })
    }
    console.log(this.state.score, this.state.highScore)

  }



  render() {
    const { characterList } = this.state
    return (
      <div>
        < Header />
        < Score score={this.state.score} highScore={this.state.highScore} />
        <div className="row justify-content-around">
          {
            characterList.map(({ id, image }) => {
              return (

                < Character
                  id={id}
                  key={id}
                  image={image}
                  handleClick={this.handleClick} />
              )
            })
          }
        </div>
      </div>

    );
  }
}

export default App;

