import React, {useEffect, useRef, useContext} from 'react';
import styled from 'styled-components';
import AuthContext from '../../context/auth-context';

const StyledButton = styled.button`
  background-color:${props => props.altStyle ? 'red' : 'green'};
  color: white;
  font:inherit;
  border:1px solid blue;
  padding:8px;
  cursor:pointer;
  &:hover{
    background-color:lightgreen;
    color:black;
  }
`

const Cockpit = (props) => {
  let toggleBtnRef = useRef(null);
  useEffect(()=>{toggleBtnRef.current.click()},[toggleBtnRef]);

  useEffect(()=>{
    console.log("[Cockpit.js] useEffect");
    //const timer = setTimeout(()=>{alert("saved to the cloud!")},1000);

    // add return anon fn to handle clean ups
    return () => {
      //clearTimeout(timer);
      console.log("[Cockpit.js] cleanup work in use effect");
    };

    },[]); // add empty array to state that this effect should only run on the creation(componentDidMount)
    //},[props.showPersons,props.Title]); add array with dependency props signifies that this effect should only run when the dependency props gets updated(componentDidUpdate) 
    //}); don't pass any array to call useEffect on every update cycle

    useEffect(()=>{
      console.log("[Cockpit.js] 2nd useEffect");
      return () => {
        console.log("[Cockpit.js] cleanup work in 2nd useEffect");
      }
    });

    const authContext = useContext(AuthContext);
    return(
        <div>
            <h1>{props.title}</h1>
            <StyledButton ref={toggleBtnRef} altStyle={props.showPersons} onClick={() => props.clicked()}>{props.showPersons ? 'hide persons' : 'show persons'}</StyledButton>
            <StyledButton onClick={authContext.login}>login</StyledButton>
        </div>
    );
};

export default React.memo(Cockpit);