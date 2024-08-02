import React from 'react'
import data from "../product"
import  '../layout/image.css'

function Image() {
  return (
    <div>
      <img className='img' src ={data[0].url}/>
    </div>
  )
}

export default Image
