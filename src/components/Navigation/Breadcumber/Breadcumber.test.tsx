import React from "react";
import { render, screen } from "@testing-library/react";
import Breadcumber from "./Breadcumber";
import { BreadcumberProps } from "types/";

describe("Breadcumber", () => {
    const links: BreadcumberProps[] = [
        {
            title: "Shop",
            link: "/shop",
        },
        {
            title: "Product",
            link: "/shop/product",
        },
    ];

    test("Is rendering", () => {
        render(<Breadcumber links={links} />);

        links.forEach((link) => {
            expect(screen.getByText(link.title)).toBeInTheDocument;
        });
    });
});
