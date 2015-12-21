import React from 'react';
import Unicorn from './unicorn';

export default (props) => {
  let unicorns = props.unicorns.map(unicorn => {
    return (
      <Unicorn key={unicorn.id}
               id={unicorn.id}
               creator={unicorn.creator}
               name={unicorn.name}
               color={unicorn.color}
               power={unicorn.power}
               type={props.type}
               session={props.session}
               users={props.users}/>
    )
  });
  return (
    <ul>
      {unicorns}
    </ul>
  )
}
