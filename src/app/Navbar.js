import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'


export let validatorArray = [0, 0, 0, 0]

export const Navbar = () => {


  const validate = useSelector(state =>
    state.posts.map((post, index) => {
      validatorArray[index] = post.content.length
    }))

  return (
    <nav>
      <section>
        <h1>The sentence game</h1>

        <div className="navContent">
          <div className="navLinks"></div>
          <Link className={validatorArray[0] > 0 ? 'green-link' : 'red-link'} to="/quest/who">1</Link>
          <Link className={validatorArray[1] > 0 ? 'green-link' : 'red-link'} to='/quest/what'>2</Link>
          <Link className={validatorArray[2] > 0 ? 'green-link' : 'red-link'} to='/quest/when'>3</Link>
          <Link className={validatorArray[3] > 0 ? 'green-link' : 'red-link'} to='/quest/where'>4</Link>
        </div>
      </section>
    </nav>
  )
}
