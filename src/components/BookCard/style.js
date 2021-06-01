import styled from "styled-components";

const BookCardStyled = styled.div`
    background-color: #ffffff;
    width: fit-content;
    padding: 10px 50px;
    p,
    h1 {
        margin: 0;
    }
    .poster {
        width: 140px;
    }
    .grid-container {
        display: flex;
        justify-content: space-around;
        align-items: center;
    }
    .title-container {
        display: flex;
        flex-direction: column;
    }
    .desc-container {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        margin-top: 20px;
    }
    .detail {
        margin-top: 20px;
    }
    .title {
        color: #B2B2B2;
    }
    .left {
        margin-right: 200px;
    }
    
`;

export default BookCardStyled;