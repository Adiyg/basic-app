import React from 'react'
import { UserContext } from '../../App'
import ComponentC from './ComponentC'

function ComponentB() {
  return (
    <div>
        <p>ComponentB</p>
            <ComponentC />

    </div>
  )
}

export default ComponentB