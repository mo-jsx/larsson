import React from "react";
import { render, screen } from "@testing-library/react";
import SimpleButton from "./SimpleButton";
import ButtonProps from "types/Button";

describe("Simple Button Component", () => {
    const simpleButton: ButtonProps = {
        label: "Simple Button",
        type: "button",
        variant: "primary",
    };

    test("Is rendering", () => {
        render(
            <SimpleButton
                label={simpleButton.label}
                type={simpleButton.type}
                variant={simpleButton.variant}
            />
        );
        expect(screen.getByText("Simple Button")).toBeInTheDocument;
        expect(screen.getByRole("button").innerHTML).toContain("Simple Button");
    });
});
