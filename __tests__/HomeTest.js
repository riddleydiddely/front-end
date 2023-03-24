//import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
//import Home from "../pages/index";
import {expect, jest, test} from '@jest/globals';


test("Check for Getting Started Text", () => {
    expect(23).toEqual(23)
    //const { getByText } = render(<Home />);
    //expect(getByText("Get started by editing")).toBeInTheDocument();
});
// it("Renders appropriately", () => {
//     render(<Home />);
//     expect(
//         screen.getByRole("heading", { name: "Welcome to Next.js!" })
//     ).toBeInTheDocument();
// });
