import React from "react";
import close from "../../assets/close.png";
import SubmitBookStyled from "./style";

const SubmitBook = (props) => {
  console.log(props.countries);
  var countriesData = props.countries;
  var listCountries = [];

  countriesData.forEach((country, index) => {
    listCountries.push(
      <option value={country["name"]} key={index}>{country["name"]}</option>
    );
  });

  return (
    <SubmitBookStyled>
      <div className="container">
        <div className="header">
          <h4 className="title">Add Book</h4>
          <img
            src={close}
            alt="close"
            className="close"
            onClick={props.handleClose}
          />
        </div>
        <div className="form-container">
          <p>Title</p>
          <input />
          <p>Author</p>
          <input />
          <p>ISBN</p>
          <input />
          <p>Published On</p>
          <input />
          <p>Number of Page</p>
          <input />
          <p>Country Publisher</p>
          <select id="coutry" name="country">
            {listCountries}
          </select>
          <div className="footer-form">
            <div>
              <p>Error error</p>
            </div>
            <button className="submit">Submit</button>
          </div>
        </div>
      </div>
    </SubmitBookStyled>
  );
};

export default SubmitBook;
