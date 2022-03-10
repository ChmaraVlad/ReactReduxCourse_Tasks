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
        padding: 10px 20px;
        margin-bottom: 20px;
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
