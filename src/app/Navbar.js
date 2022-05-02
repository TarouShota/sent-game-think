import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'


/* It's a variable that is exported to be used in other files. */
export let validatorArray = [0, 0, 0, 0]

/**
 * It's a function that maps over the posts in the state, and for each post, it assigns the length of
 * the post's content to the corresponding index in the validatorArray.
 */

export const Navbar = () => {
  const validate = useSelector(state =>
    state.posts.map((post, index) => {
      validatorArray[index] = post.content.length
      return 1
    }))

  return (
    <nav>
      <section>
        <h1>The sentence game</h1>

        <div className="navContent">
          <div className="navLinks"></div>
          {/*A bit of repetetive code here*/}
          <Link className={validatorArray[0] > 0 ? 'green-link' : 'red-link'} to="/quest/who">1</Link>
          <Link className={validatorArray[1] > 0 ? 'green-link' : 'red-link'} to='/quest/what'>2</Link>
          <Link className={validatorArray[2] > 0 ? 'green-link' : 'red-link'} to='/quest/when'>3</Link>
          <Link className={validatorArray[3] > 0 ? 'green-link' : 'red-link'} to='/quest/where'>4</Link>
        </div>
      </section>
    </nav>
  )
}
