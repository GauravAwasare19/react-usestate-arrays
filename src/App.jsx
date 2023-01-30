import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="trello-master">
      <nav className='navbar app'>App bar</nav>
      <nav className='navbar board'>Board bar</nav>
      <div className='board-columns'>
        <div className='columns'>
        <header>BrainStrom</header>
        <ul>
          <li>
            <img className='firstimg' src="https://raw.githubusercontent.com/haryphamdev/sharing-host-files/master/trello/img-design.png"/>
          </li>
          <li>First</li>
          <li>Second</li>
          <li>Third</li>
          <li>First</li>
          <li>Second</li>
          <li>Third</li>
          <li>First</li>
          <li>Second</li>
          <li>Third</li>
          <li>First</li>
          <li>Second</li>
          <li>Third</li>
          <li>First</li>
          <li>Second</li>
          <li>Third</li>
          <li>First</li>
          <li>Second</li>
          <li>Third</li>
        </ul>
        <footer>Add another card</footer>
        </div>

        <div className='columns'>
        <header>BrainStrom</header>
        <ul>
          <li>
            <img className='firstimg' src="https://raw.githubusercontent.com/haryphamdev/sharing-host-files/master/trello/img-design.png"/>
          </li>
          <li>First</li>
          <li>Second</li>
          <li>Third</li>
          <li>First</li>
          <li>Second</li>
          <li>Third</li>
        </ul>
        <footer>Add another card</footer>
        </div>

        <div className='columns'>
        <header>BrainStrom</header>
        <ul>
          <li>
            <img className='firstimg' src="https://raw.githubusercontent.com/haryphamdev/sharing-host-files/master/trello/img-design.png"/>
          </li>
          <li>First</li>
          <li>Second</li>
          <li>Third</li>
          <li>First</li>
          <li>Second</li>
          <li>Third</li>
        </ul>
        <footer>Add another card</footer>
        </div>

        <div className='columns'>
        <header>BrainStrom</header>
        <ul>
          <li>
            <img className='firstimg' src="https://raw.githubusercontent.com/haryphamdev/sharing-host-files/master/trello/img-design.png"/>
          </li>
          <li>First</li>
          <li>Second</li>
          <li>Third</li>
          <li>First</li>
          <li>Second</li>
          <li>Third</li>
        </ul>
        <footer>Add another card</footer>
        </div>


        <div className='columns'>
        <header>BrainStrom</header>
        <ul>
          <li>
            <img className='firstimg' src="https://raw.githubusercontent.com/haryphamdev/sharing-host-files/master/trello/img-design.png"/>
          </li>
          <li>First</li>
          <li>Second</li>
          <li>Third</li>
          <li>First</li>
          <li>Second</li>
          <li>Third</li>
        </ul>
        <footer>Add another card</footer>
        </div>

      </div>
    </div>
  )
}

export default App
