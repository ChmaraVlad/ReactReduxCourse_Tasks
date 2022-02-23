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
    max-width: 40%;
    .image {
        img {
            width: 100%;
            max-height: 100%;
        }
    }
    .link {
        display: inline-block;
        font-size: 25px;
        cursor: pointer;
        &:hover{
            text-decoration: underline;
        }
    }
    .content {
        padding: 10px 0;
        flex: 1 1 auto;
        text-align: center;
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

