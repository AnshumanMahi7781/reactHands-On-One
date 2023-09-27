import React from 'react'

function FunctionalComponent() {
  return (
    <div className="FunctionalComponent-Container">
      <h2>This is created using functional Component</h2>
      <p className='externalPara'>This is done using external CSS</p>
      <p style={{ color: 'blue', fontWeight: 'bold' }}>This is done using inline CSS</p>
    </div>
  )
}
export default FunctionalComponent