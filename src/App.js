import React from 'react';

const divStyle = {
  color: 'blue',
  textAlign: 'center',
  marginTop: '4rem'
}
const App = () => {
  return(
    <div style = {divStyle}>
      <p>hola quetal</p>
      <p>webPack</p>
      <button style={{marginTop:'4rem', backgroundColor:'aqua', color: 'red', borderRadius:'0.35rem'}} onClick={()=>console.log('click')}>click</button>
    </div>
  )
}
export default App
