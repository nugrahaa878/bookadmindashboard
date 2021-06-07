import styled from "styled-components";

const SubmitBookStyled = styled.div`
    background-color: white;
    h4 {
        margin: 0;
        padding: 0;
    }
    width: 700px;
    .container {
        display: flex;
        flex-direction: column;
        margin: 0;
    }
    .header {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        width: 100%;
        padding: 20px 0;
        box-shadow: rgba(99, 99, 99, 0.1) 0px 2px 8px 0px;
    }
    .close {
        height: 20px;
        padding-right: 20px;
    }
    .title {
        text-align: center;
        flex-grow: 2;
    }
    .form-container {
        display: flex;
        flex-direction: column;
        margin-left: 10px;
        margin-right: 10px;
        width: 100%;
    }
    .form-container * {
        margin-left: 30px;
        margin-right: 30px;
        margin-bottom: 10px;
    }
    .form-container p {
        font-weight: normal;
    }

    .form-container input {
        background-color: #ecf0f1;
        height: 30px;
        border: none;
        border-radius: 5px;
        padding-left: 10px;
    }
    .submit {
        margin-top: 10px;
    }
    .footer-form {
        display: flex;
        justify-content: space-between;

    }
`

export default SubmitBookStyled;