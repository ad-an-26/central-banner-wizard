import React, { useState } from 'react'
import Banner from './components/Banner'

const App = () => {
  const [backgroundColor, setbackgroundColor] = useState("")
  const [text, setText] = useState("")
  const [imageUrl, setimageUrl] = useState(null)
  return (
    <div className='min-h-screen'>
      <Banner
      backgroundColor={backgroundColor} 
      text={text}
      imageUrl={imageUrl}/>
    </div>
  )
}

export default App