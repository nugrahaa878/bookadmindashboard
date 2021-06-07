import React, { Component } from "react";
import { connect } from "react-redux";
import BookCard from "../../components/BookCard/BookCard";
import Header from "../../components/Header/Header";
import { getAllBook } from "../../store/actions/books";
import HomePageStyled from "./style";

class HomePage extends Component {
  componentDidMount() {
    this.props.getAllBook();
  }

  render() {
    var isLoading = this.props.isLoading;
    var listBook = this.props.listBook;
    var bookCards = [];

    if (!isLoading && listBook) {
      for (let idx = 0; idx < listBook.length; idx++) {
        console.log("Hey" + listBook[idx].title);
        bookCards.push(
          <BookCard
            title={listBook[idx].title}
            author={listBook[idx].author}
            isbn={listBook[idx].isbn}
            page={listBook[idx].numberOfPages}
            publishedOn={listBook[idx].publishedOn}
            country={listBook[idx].country}
            imgUrl={listBook[idx].imageUrl}
          />
        );
      }
    }

    return (
      <HomePageStyled>
        <Header />
        <div className="container">
          <p>Books (54)</p>
          <button>Add +</button>
        </div>
        {bookCards}
      </HomePageStyled>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    isLoading: state.listBookReducer.isLoading,
    listBook: state.listBookReducer.listBook,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getAllBook: () => dispatch(getAllBook()),
  };
};

export function createHomePage(injectMapDispatchToProps) {
  return connect(mapStateToProps, injectMapDispatchToProps)(HomePage);
}

export default createHomePage(mapDispatchToProps);
