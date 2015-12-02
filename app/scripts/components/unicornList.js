import React from 'react';
import Unicorn from './unicorn';

export default (props) => {
  let unicorns = props.unicorns.map(unicorn => {
    return (
      <Unicorn key={unicorn.objectId}
               id={unicorn.objectId}
               user={props.user}
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
