import React from "react";
import "./styles.scss";
import CardProps from "types/Card";

const Card = (props: CardProps) => {
    const { imgSrc, imgAlt, href, title, desc, variant = "light" } = props;

    return (
        <div className={`card ${variant}`}>
            <a href={href} className="img">
                <img src={imgSrc} alt={imgAlt} />
            </a>

            <div className="text">
                <h2 className="title">
                    <a href={href}>{title}</a>
                </h2>
                <p className="desc">{desc}</p>
            </div>
        </div>
    );
};

export default Card;
