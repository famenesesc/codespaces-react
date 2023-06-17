import React, { useState } from 'react'


export const Counter = () => {
  
  const [contador, setContador] = useState(10);
  
  const sumar = () => {
    setContador(contador + 1)
  }

  return (
    <div className='counter'>
        Contador: { contador }
        <button type="button" onClick={ sumar } >+</button>

        <button type="button" onClick={ () => setContador(contador - 1) } >-</button>
    </div>
  )
}
