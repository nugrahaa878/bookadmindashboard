import styled from 'styled-components';

const HomePageStyled = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    .container {
        width: 100%;
        display: flex;
        justify-content: space-around;
        align-items: center;
        margin-top: 30px;
        margin-bottom: 10px;
    }
    button {
        background-color: #FF6F81;
        border: none;
        padding: 8px 20px;
        border-radius: 8px;
        color: white;
        font-weight: bold;
    }
    .container p {
        font-weight: bold;
    }
`;

export default HomePageStyled;