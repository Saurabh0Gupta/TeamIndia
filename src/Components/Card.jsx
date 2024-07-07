import React from 'react'

const Card = (props) => {
    console.log(props)
    return (
    <div className='rounded-md  bg-slate-100 p-4 flex flex-col justify-center items-center mb-2'>
    <img className='w-full h-[500px]' src={props.imgUrl} alt="Card" />
    <h2 className='font-semibold text-2xl'>{props.name}</h2>
    <h2 className='text-lg text-justify'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi incidunt et quas deleniti molestias atque necessitatibus quos itaque cumque culpa nam corporis qui officiis, voluptatum dolore quaerat quis sapiente a magni reiciendis! Quae totam reiciendis minima?</h2>
  </div>
  )
}

export default Card