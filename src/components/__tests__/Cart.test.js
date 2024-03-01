import { render, act, screen, fireEvent } from "@testing-library/react";
import RestaurantMenuDetails from "../RestaurantMenuDetails";
import restauarantMenuList from "../mocks/restauarantMenuList.json";
import "@testing-library/jest-dom";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import appStore from "../../utils/appStore";
import Header from "../Header";
import Cart from "../Cart";

global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve(restauarantMenuList),
  })
);

test("to test the add to cart functionality", async () => {
  await act(() => {
    render(
      <BrowserRouter>
      <Provider store={appStore}>
        <RestaurantMenuDetails />
        <Header/>
        <Cart/>
        </Provider>
      </BrowserRouter>
    );
  });
  const recommendedText = screen.getByText("Recommended");
  fireEvent.click(recommendedText);
  const addBtn = screen.getAllByRole("button", { name: "ADD +" });
  fireEvent.click(addBtn[0]);
  const cartItemsInHeader = screen.getByText("Cart (1 - Items)")
  expect(cartItemsInHeader).toBeInTheDocument();
  fireEvent.click(addBtn[1]);
  const cartItemsInHeader2 = screen.getByText("Cart (2 - Items)")
  expect(cartItemsInHeader2).toBeInTheDocument();
  const cartIt = screen.getAllByTestId("cartItems")
  expect(cartIt.length).toBeGreaterThan(1)
  const clearBtn = screen.getByRole("button", {name:"Clear All"})
  expect(clearBtn).toBeInTheDocument();
  fireEvent.click(clearBtn)
  expect(cartIt.length).toBe(22);
  expect(screen.getByText("Cart (0 - Items)")).toBeInTheDocument();


//   const accordionHeader = screen.getByText("Biriyani (5)");
//   fireEvent.click(accordionHeader);
//   expect(screen.getAllByTestId("foodItems").length).toBe(5);
//   expect(screen.getByText("Cart - (0 items)")).toBeInTheDocument();
//   const addBtns = screen.getAllByRole("button", { name: "Add +" });
//   fireEvent.click(addBtns[0]);
//   expect(screen.getByText("Cart - (1 items)")).toBeInTheDocument();
//   fireEvent.click(addBtns[1]);
//   expect(screen.getByText("Cart - (2 items)")).toBeInTheDocument();
//   expect(screen.getAllByTestId("foodItems").length).toBe(7);
//   fireEvent.click(screen.getByRole("button", { name: "Clear Cart" }));
//   expect(screen.getAllByTestId("foodItems").length).toBe(5);
//   expect(
//     screen.getByText("Cart is empty. Add Items to the cart!")
//   ).toBeInTheDocument();
});
