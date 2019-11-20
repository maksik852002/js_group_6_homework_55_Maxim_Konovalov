import React from 'react';

const Ingredients = props => (
  <div className='d-flex my-5 align-items-center text-center'>
    <div className="col-6 text-left">
      <button onClick={props.add} className='btn btn-secondary btn-lg ' id={props.name}>{props.ingrIcons}</button>
      <label className='ml-4' htmlFor={props.name} >{props.name}</label>
    </div>
    <div className="col-3">
      <span>{`${props.count}x`}</span>
    </div>
    <div className="col-3">
      <button onClick={props.remove} className="close btn-lg mb-3">{props.trashIcon}</button>
    </div>
  </div>
)

export default Ingredients;