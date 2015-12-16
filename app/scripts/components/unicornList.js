import React from 'react';
import Unicorn from './unicorn';

export default (props) => {
  let unicorns = props.unicorns.map(unicorn => {
    return (
      <Unicorn key={unicorn.id}
               id={unicorn.id}
               user={unicorn.creator}
               name={unicorn.name}
               color={unicorn.color}
               power={unicorn.power}/>
    )
  });
  return (
    <ul>
      {unicorns}
    </ul>
  )
}
