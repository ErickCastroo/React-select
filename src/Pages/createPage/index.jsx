import React, {useState} from 'react'
import {NavLink} from 'react-router-dom'
import CreatableSelect from 'react-select/creatable';



const options  = [
  { value: 'chocolate', label: 'Chocolate', color: 'brown' },
  { value: 'strawberry', label: 'Strawberry', color: 'red'  },
  { value: 'vanilla', label: 'Vanilla', color: 'blue'  }
]



function CreateSelect() {
  const [opts, setOpts] = useState(options)

  return (
    <div className='flex flex-col items-center justify-center h-screen bg-slate-600'>
      <div className='mb-4'>
        <h1 className='text-white text-3xl font-bold'>Escribe en el apartado de abajo 😄</h1>
        <p className='text-slate-300 font-bold'>Esto no afectara a la pagina anterior :D</p>
      </div>
      <div style={{ width: '30%' }}>
        <CreatableSelect 
          closeMenuOnSelect = {false}
          isMulti
          options={opts}
          onCreateOption={(inputValue) => {
            const newOp={
              value: inputValue,
              label: inputValue
            }
            setOpts([...opts, newOp])
          }} 
        />
      </div>
      <NavLink to='/' className='bg-blue-500 text-white py-2 px-4 rounded mt-4'>
        Regresar
      </NavLink>
  </div>



  )


}

export  {CreateSelect}