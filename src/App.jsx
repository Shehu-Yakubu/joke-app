import './App.css'
import Joke from './Joke'
import jokesData from './jokesData'
import laughIcon from './assets/laugh-icon.png'

function App() {
  const jokeElements = jokesData.map(joke => {
    return <Joke 
              setup={joke.setup} 
              punchline={joke.punchline} 
           />
  })

  return (
    <div>
      <div className='joke--title'>
        <h1>JOKE APP</h1>
        <img src={laughIcon} className='joke--icon' />
        <p className='joke--text'>LAUGH MATTER</p>
      </div>
      {jokeElements}
    </div>
  )
}

export default App

{/* <Joke 
        setup="I got my daughter a fridge for her birthday."
        punchline="I can't wait to see her face light up when she opens it."
        rating={1}
      />
      <Joke 
        setup="How did the hacker escape the police?"
        punchline="He just ransomware!"
      />
      <Joke 
        setup="Why don't pirates travel on mountain roads?"
        punchline="Scurvy."
      />
      <Joke 
        setup="Why do bees stay in the hive in the winter?"
        punchline="Swarm."
      />
*/}