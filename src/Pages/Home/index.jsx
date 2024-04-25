import React from 'react'
import AsyncSelect from 'react-select/async';
import {NavLink} from 'react-router-dom'


import makeAnimated from 'react-select/animated';

const animatedComponents =makeAnimated()
const options  = [
  { value: 'chocolate', label: 'Chocolate', color: 'brown' },
  { value: 'Strawberry', label: 'Strawberry', color: 'red'  },
  { value: 'Vanilla', label: 'Vanilla', color: 'blue'  }
]


const style={
  control: (styles) =>{
    return{
      ...styles,
      backgroundColor : '#FFFFFF',
    }
  },
  option:(styles,{data,isDisabled,isFocused, isSelected}) => {
    //console.log(data, isDisabled,isFocused, isSelected)
    return{
      ...styles,
      backgroundColor : '#FFFFFF',
      color: data.color
    }
  },
  multiValue: (styles) => {
    return {
      ...styles,
      backgroundColor : '#FFFFFF',
      color: 'white'
    }
  },
  multiValueLabel: (styles, {data}) => {
    return {
      ...styles,
      color: data.color
    }
  },
  multiValueRemove: (styles) => {
    return {
      ...styles,
      color: 'red'
    }
  },
}



function Home() {
  const loadOptions = (searchValue,callBack) => {
    setTimeout( () => {
      const filtradoSelect = options.filter(option => option.label.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase()))
      callBack(filtradoSelect)
    },500)
  }
  return (
    <div className='flex flex-col items-center justify-center h-screen bg-slate-600'>
      <div className='mb-4'>
        <h1 className='text-white text-3xl font-bold'>Hola, ¡Selecciona lo que quieras! 😄</h1>
      </div>
      <div style={{ width: '30%' }}>
      <AsyncSelect
        loadOptions={loadOptions}

        //seleccion multiple
        isMulti

        //el menu no se cierra si esta en {false}
        closeMenuOnSelect={false}

        //poner un select por defecto
        defaultValue={options[0]}

        //o puedes poner un array para tenes por defecto multiples seleccionados
        //defaultValue={[options[0], options[2] ]}

        //ponerle animacion a los components
        components={animatedComponents}

        //default options sirve para ver los datos al dar click
        defaultOptions

        //stilos
        styles={style}
        />
      </div>
      <NavLink to='/createSelect' className='bg-blue-500 text-white py-2 px-4 rounded mt-4'>
        Crear una nueva opción
      </NavLink>
    </div>
  );
}


export  {Home}