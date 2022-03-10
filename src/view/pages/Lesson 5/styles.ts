// Core
import styled from 'styled-components';

export const Container = styled.section`
padding: 0 10px;
button {
    padding: 7px 14px;
    margin-bottom: 20px;
    cursor: pointer;
    &:hover{
        background-color: gray;
    }
}
`;
export const Articles = styled.article`
margin-bottom: 30px;
h2 {
    font-size: 24px;
    font-weight: bold;
    margin-bottom: 10px;
}
p {
    margin: 0 0 10px 0;
}
`;
export const List = styled.article`
li{
    padding-left: 20px;
}

`;
