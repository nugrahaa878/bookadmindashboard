import React from "react";
import BookCardStyled from "./style";

const BookCard = (props) => {
    return (
        <BookCardStyled>
            <div className="grid-container">
                <div className="left">
                    <div className="title-container">
                        <h2>{props.title}</h2>
                        <p>Book by {props.author}</p>
                    </div>
                    <div className="desc-container">
                        <div className="desc-left">
                            <div className="detail">
                                <p className="title">ISBN</p>
                                <p>{props.isbn}</p>
                            </div>
                            <div className="detail">
                                <p className="title">Published on</p>
                                <p>{props.publishedOn}</p>
                            </div>
                        </div>
                        <div className="desc-right">
                            <div className="detail">
                                <p className="title">Number of Page</p>
                                <p>{props.page} Pages</p>
                            </div>
                            <div className="detail">
                                <p className="title">Country Publisher</p>
                                <p>{props.country}</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="right">
                    <img src={props.imgUrl} className="poster" alt="Poster Buku"/>
                </div>
            </div>
        </BookCardStyled>
    );
}

export default BookCard;