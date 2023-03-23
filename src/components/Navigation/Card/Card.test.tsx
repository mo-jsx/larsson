import React from "react";
import { render, screen } from "@testing-library/react";
import Card from "./Card";
import CardProps from "types/Card";

describe("Card", () => {
    const cardProps: CardProps = {
        title: "Lorem ipsum dolor sit amet.",
        desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maxime, et.",
        imgSrc: "https://picsum.photos/200/200",
        imgAlt: "Lorem, ipsum dolor.",
        href: "#",
    };
    test("Card is rendering", () => {
        render(
            <Card
                title={cardProps.title}
                desc={cardProps.desc}
                imgSrc={cardProps.imgSrc}
                imgAlt={cardProps.imgAlt}
                href={cardProps.href}
            />
        );

        expect(screen.getByText(cardProps.title)).toBeInTheDocument;
    });
});
