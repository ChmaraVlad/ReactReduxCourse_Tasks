// Core
import styled from 'styled-components';

export const Container = styled.section`
    padding: 20px;
  display: flex;
    justify-content: space-evenly;
    max-width: 250px;
    margin: 0 auto;
    /* padding: 10px; */
    button {
        padding: 10px 20px;
        border-radius: 5px;
        cursor: pointer;
        &:hover {
            background-color: #aeaeae;
        }
    }
`;
