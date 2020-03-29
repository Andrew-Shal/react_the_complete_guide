import React from 'react';
import Person from './Person/Person';

const Persons = props => {
  console.log("[Persons.js] rendering...");
  return props.persons.map(
      (p,idx) =>{
        console.log("[Persons.js] rendering..."); 
        return (<Person 
          key={p.id}
          name={p.name} 
          age={p.age}
          clicked={()=>props.clicked(idx)}
          changed={event => props.changed(event,p.id)}>
          {p.hobbies != null ? p.hobbies : null}
        </Person>
        );
      });
};

export default React.memo(Persons);