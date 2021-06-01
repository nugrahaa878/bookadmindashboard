import React from "react";
import BookCardStyled from "./style";
import poster from '../../assets/poster.jpeg';

export default function BookCard() {
    return (
        <BookCardStyled>
            <div className="grid-container">
                <div className="left">
                    <div className="title-container">
                        <h2>Fleishman Is in Trouble</h2>
                        <p>Book by Ari Angga Nugraha</p>
                    </div>
                    <div className="desc-container">
                        <div className="desc-left">
                            <div className="detail">
                                <p className="title">ISBN</p>
                                <p>978-123-2-1231-123</p>
                            </div>
                            <div className="detail">
                                <p className="title">Published on</p>
                                <p>January 30 2021</p>
                            </div>
                        </div>
                        <div className="desc-right">
                            <div className="detail">
                                <p className="title">Number of Page</p>
                                <p>288 Pages</p>
                            </div>
                            <div className="detail">
                                <p className="title">Country Publisher</p>
                                <p>U.S</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="right">
                    <img src={poster} className="poster"/>
                </div>
            </div>
        </BookCardStyled>
    );
}
