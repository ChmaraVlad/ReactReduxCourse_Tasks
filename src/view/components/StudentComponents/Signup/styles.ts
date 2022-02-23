// Core
import styled from 'styled-components';

export const Container = styled.section`
h1 {
    font-size: 24px;
    text-align: center;
}
nav{
    text-align: center;
    font-size: 24px;
    button{
        width: 100px;
        padding: 5px 10px;
        &:hover{
            background-color: grey;
        }
    }
}
padding: 0 10px;
li{
    list-style-type: none;
    margin-bottom: 10px;
}
`;

export const Form = styled.form`
margin-bottom: 30px;
div{
    margin-bottom: 20px;
    select {
        width: 150px;
        height: 40px;
    }
    &:last-child{
        display: flex;
    }
}

max-width: 500px;
margin: 0 auto;

label {
    font-weight: bold;
    display: flex;
    flex-direction: column;
  }

input[type="email"],
input[type="text"],
input[type="number"] {
    width: 100%;
    padding: 0.65rem 0.5rem;
    font-size: 1rem;
    height: 30px;
    border: 2px solid grey;
    color: black;
    border-radius: 10px;
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
}  

input[type ='submit'] {
    width: 100%;
    background-color: rgba(181, 168, 168, .5);
    height: 40px;
    border-radius: 10px;
    &:hover{
        background-color: grey;
    }
} 

input:focus,
select:focus,
textarea:focus {
    outline: none;
    border: 2px solid green;
    background-color: #c9e9e9;
}
  
input:invalid,
select:invalid,
textarea:invalid {
    outline: none;
    border: 2px solid #ff7d87;
    box-shadow: none;
}
  
`;

export const ErrorMsg = styled.p`
color: red;
text-align: center;
font-weight: bold;
`;
