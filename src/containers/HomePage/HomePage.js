import React, { Component } from "react";
import { connect } from "react-redux";
import BookCard from "../../components/BookCard/BookCard";
import Header from "../../components/Header/Header";
import { getAllBook, getAllCountries } from "../../store/actions/books";
import HomePageStyled from "./style";
import SubmitBook from "../../components/SubmitBook/SubmitBook";

class HomePage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isOpen: false,
    };
  }

  componentDidMount() {
    this.props.getAllBook();
    this.props.getAllCountries();
  }

  handleOpen = () => {
    this.setState({
      isOpen: true,
    });
  };

  handleClose = () => {
    this.setState({
      isOpen: false,
    });
  };

  render() {
    var isLoading = this.props.isLoading;
    var listBook = this.props.listBook;
    var bookCards = [];
    var bookForm = null;
    var waiting;

    if (this.props.isLoading) {
      waiting = <p className="wait">Please Wait . . .</p>;
    } else {
      waiting = null;
    }

    if (this.state.isOpen) {
      bookForm = (
        <div className="modal">
          <div className="model-content">
            <SubmitBook
              className="submit-book"
              handleClose={this.handleClose}
              countries={this.props.countries}
            ></SubmitBook>
          </div>
        </div>
      );
    } else {
      bookForm = null;
    }

    if (!isLoading && listBook) {
      for (let idx = 0; idx < listBook.length; idx++) {
        bookCards.push(
          <BookCard
            title={listBook[idx].title}
            author={listBook[idx].author}
            isbn={listBook[idx].isbn}
            page={listBook[idx].numberOfPages}
            publishedOn={listBook[idx].publishedOn}
            country={listBook[idx].country}
            imgUrl={listBook[idx].imageUrl}
            key={listBook[idx].id}
          />
        );
      }
    }

    return (
      <HomePageStyled>
        <div className="content-container">
          <Header />
          <div className="container">
            <p>Books (54)</p>
            <button onClick={this.handleOpen}>Add +</button>
          </div>
          {waiting}
          {bookCards}
        </div>
        {bookForm}
      </HomePageStyled>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    isLoading: state.listBookReducer.isLoading,
    listBook: state.listBookReducer.listBook,
    countries: state.listBookReducer.countries
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getAllBook: () => dispatch(getAllBook()),
    getAllCountries: () => dispatch(getAllCountries())
  };
};

export function createHomePage(injectMapDispatchToProps) {
  return connect(mapStateToProps, injectMapDispatchToProps)(HomePage);
}

export default createHomePage(mapDispatchToProps);
