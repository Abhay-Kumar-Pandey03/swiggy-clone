import { fireEvent, render, screen, act } from "@testing-library/react";
import RestaurantMenu from "../RestaurantMenu";
import Header from "../Header";
import Cart from "../Cart";
import MOCK_DATA_NAME from "../mocks/mockResMenu.json";
import { Provider } from "react-redux";
import appStore from "../../utils/appStore";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";

// Mock useParams to return the restaurant ID
jest.mock("react-router-dom", () => ({
    ...jest.requireActual("react-router-dom"),
    useParams: () => ({ resId: "5934" }),
}));

global.fetch = jest.fn(() =>
    Promise.resolve({
        json: () => Promise.resolve(MOCK_DATA_NAME),
    })
);

it("should Load Restaurant Menu Component", async () => {
    await act(async () =>
        render(
            <BrowserRouter>
                <Provider store={appStore}>
                    <Header />
                    <RestaurantMenu />
                    <Cart />
                </Provider>
            </BrowserRouter>
        )
    );
    
    // Click on the Recommended category to expand it
    const recommendedHeader = screen.getByText("Recommended");
    fireEvent.click(recommendedHeader);
    
    // Now find and click on Crispy Veg Burger item
    const crisplyVegBurger = await screen.findByText("Crispy Veg Burger");
    fireEvent.click(crisplyVegBurger);

    expect(screen.getAllByTestId("foodItems").length).toBe(3);

    expect(screen.getByText("Cart - (0 items)")).toBeInTheDocument();

    const addBtns = screen.getAllByRole("button", { name: "ADD" });
    fireEvent.click(addBtns[0]);

    expect(screen.getByText("Cart - (1 items)")).toBeInTheDocument();

    fireEvent.click(addBtns[1]);

    expect(screen.getByText("Cart - (2 items)")).toBeInTheDocument();

    expect(screen.getAllByTestId("foodItems").length).toBe(5);

    fireEvent.click(screen.getByRole("button", { name: "Clear Cart" }));

    expect(screen.getAllByTestId("foodItems").length).toBe(3);

    expect(
        screen.getByText("Your cart is empty. Please add some items to the cart.")
    ).toBeInTheDocument();
});