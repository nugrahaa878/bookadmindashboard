import styled from 'styled-components';

const Base = styled.div`
    background-color: #FFFFFF;
    width: 100%;
    box-shadow: rgba(99, 99, 99, 0.1) 0px 2px 8px 0px;
    .grid-container {
        display: flex;
        flex-direction: row;
        justify-content: center;
    }
    h3 {
        margin: 0;
        padding: 15px 0;
        font-size: 17px;
    }
`;

export default Base;