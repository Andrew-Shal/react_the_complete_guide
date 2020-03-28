// import Radium from 'radium';
import React from 'react';
//import styled from 'styled-components';

import classes from './Person.module.css';

/*const StyledDiv = styled.div`
    width: 60%;
    margin:16px auto;
    display:${props => props.visible ? "block":"none"};
    border:1px solid #eee;
    box-shadow:0 2px 3px #ccc;
    padding:16px;
    text-align:center;

    @media(min-width:500px){
        width:450px;
    }
`;*/
const person = (props) => {
    /*const style = {
        '@media(min-width:500px)':{
            width:'450px'
        }
    }*/

    return (
        //<div className="Person" style={style}>
        //<StyledDiv visible={props.altStyle}>
        <div className={props.altStyle ? classes.Person : classes.hidden}>
            <div>
                <p className="inline-b pr-10" onClick={props.click}>Hello, my name is {props.name} and I am {props.age}</p>
                <input className="inline-b" type="text" placeholder="update name" onChange={props.change} value={props.name}></input>
            </div>
            {props.children ? <p>{props.children}</p> : null}
        </div>
        //</StyledDiv>
    );
}

// export default Radium(person);
export default person;