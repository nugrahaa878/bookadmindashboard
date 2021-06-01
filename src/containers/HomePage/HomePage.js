import React from "react";
import BookCard from "../../components/BookCard/BookCard";
import Header from "../../components/Header/Header";
import HomePageStyled from "./style";

export default function HomePage() {
    return (
        <HomePageStyled>
            <Header />
            <div className="container">
                <p>Books (54)</p>
                <button>Add +</button>
            </div>
            <BookCard />
        </HomePageStyled>
    );
}
