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
        return (
            <HomePageStyled>
            <Header />
            <div className="container">
                <p>Books (54)</p>
                <button>Add +</button>
            </div>
            <BookCard />
            <BookCard />
            <BookCard />
        </HomePageStyled>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        isLoading: state.listBookReducer.isLoading,
        listBook: state.listBookReducer.listBook
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getAllBook: () => dispatch(getAllBook())
    }
}

export function createHomePage(injectMapDispatchToProps) {
    return connect(mapStateToProps, injectMapDispatchToProps)(HomePage);
}

export default createHomePage(mapDispatchToProps);
