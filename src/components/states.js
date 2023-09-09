import React from 'react'

const States = ({states}) => {
  return (
    <div>
    {states.map((state)=>(
        <div className='bg-warning' id={state.id}>
            <h1>State : {state.name}</h1>
            <h3>Language : {state.language}</h3>
            <h3>population : {state.population}</h3>
        </div>
        )
        )
    }
    </div>

  )
}

export default States