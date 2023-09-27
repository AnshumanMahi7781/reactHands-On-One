import React, { Component } from 'react'

class ClassComponent extends Component {
  render() {
    return (
      <div className='ClassComponent-Container'>
        <h2>This is created using Class Component</h2>
        <p className='externalPara'>This is done using external CSS</p>
        <p style={{color: 'blue', fontWeight:'bold'}}>This is done using inline CSS</p> 
        </div>
    )
  }
}
export default ClassComponent
