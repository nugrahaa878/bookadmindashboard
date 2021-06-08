import styled from "styled-components";

const HomePageStyled = styled.div`
  .content-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 50px;
  }
  .container {
    width: 100%;
    display: flex;
    justify-content: space-around;
    align-items: center;
    margin-top: 30px;
    margin-bottom: 10px;
  }
  button {
    background-color: #ff6f81;
    border: none;
    padding: 8px 20px;
    border-radius: 8px;
    color: white;
    font-weight: bold;
  }
  .container p {
    font-weight: bold;
  }
  .modal {
    position: fixed; /* Stay in place */
    z-index: 1; /* Sit on top */
    left: 0;
    top: 0;
    margin: 0;
    padding: 0;
    width: 100%; /* Full width */
    height: 100%; /* Full height */
    overflow: auto; /* Enable scroll if needed */
    background-color: rgb(0, 0, 0); /* Fallback color */
    background-color: rgba(0, 10, 0, 0.4); /* Black w/ opacity */
    margin-bottom: 100px;
    padding-top: 10px;
  }
  .submit-book {
    margin: 0;
    padding: 0;
  }
  .modal-content {
    margin: auto;
  }
  .modal {
    display: flex;
    justify-content: center;
  }
  .wait {
    font-size: 20px;
  }
`;

export default HomePageStyled;
