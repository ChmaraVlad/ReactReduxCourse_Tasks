// Core
import styled from 'styled-components';

export const Container = styled.section`
text-align: center;
h1 {
    font-weight: bold;
    font-size: 30px;
    text-align: center;
    margin-bottom: 20px;
}
font-size: 18px;
ul{
    margin-bottom: 30px;
}
ul {
    min-width: 400px;
    max-width: 40%;
    li, div {
        padding: 10px 20px;
        margin-bottom: 10px;
    }
    div {
        display: inline-block;
        font-size: 25px;
    }
    background-color: #a7d6fc;
    border-radius: 30px;
}
`;


export const Wrapper = styled.article`
display: flex;
justify-content: center;
align-items: center;
flex-wrap: wrap;
`;
