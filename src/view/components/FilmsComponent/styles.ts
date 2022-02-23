// Core
import styled from 'styled-components';

export const Container = styled.section`
h1 {
    font-weight: bold;
    font-size: 30px;
    text-align: center;
    margin-bottom: 20px;
}
font-size: 18px;

/* -------- */
.wrapper {
    display: flex;
    flex-direction: column;
    margin-bottom: 30px;
    min-width: 500px;
    max-width: 60%;
    max-width: 700px;
    .image {
        img {
            width: 100%;
        }
    }
    .link {
        display: inline-block;
        font-size: 25px;
        font-weight: bold;
        cursor: pointer;
        margin-bottom: 10px;
        &:hover{
            text-decoration: underline;
        }
    }
    li {
        margin-bottom: 10px;
    }
    .content {
        padding: 10px 10px;
        flex: 1 1 auto;
    }
    background-color: #a7d6fc;
    border-radius: 30px;
    overflow: hidden;
}
`;

export const Wrapper = styled.article`
display: flex;
justify-content: space-evenly;
flex-wrap: wrap;
`;
