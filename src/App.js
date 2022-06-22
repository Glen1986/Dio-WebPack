import React from 'react';

const divStyle = {
  color: 'blue',
  textAlign: 'center'
}
const App = () => {
  return(
    <div style = {divStyle}>
      <p>hola quetal</p>
      <p>webPack</p>
      <button onClick={()=>console.log('click')}>click</button>
    </div>
  )
}
export default App
