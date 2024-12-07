import { useState } from 'react'
import './App.css'

function App() {
  return (
  
    <>
     <div>Hello</div>
    <Header/>
    <Content color="blue" text="This is my first React Application!" />
      <Content color="red" text="Wish me luck..." />
      <Content color="green" text="I think I've got it!" />
      <Footer />
    </>
  );
}
  

export default App
