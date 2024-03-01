import { fireEvent, render, screen } from "@testing-library/react";
import Header from "../Header";
import { Provider } from "react-redux";
import appStore from "../../utils/appStore";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";

test("testing login button is there or not", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );
  const button = screen.getByRole("button"); // or getByText("login")  but role is a good way to find
  //const button = screen.getByRole("button", {name: "login"});  // if there are multiple buttons but we want to find that particular button which has text as login
  expect(button).toBeInTheDocument();
});

test("should render cart items with zero", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );
  const cartItems = screen.getByText("Cart (0 - Items)");
  expect(cartItems).toBeInTheDocument();
});

test("should check whether cart is present or not", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );
  const cartItems = screen.getByText(/Cart/); // regex expression / / to check, it will not check whole exact text
  expect(cartItems).toBeInTheDocument();
});

test("to test login and logout functionality like toggle feature", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );
  const loginButton = screen.getByRole("button", { name: "Login" }); // to get the text of exact button
  fireEvent.click(loginButton); // we are firing click event on login button
  const logoutButton = screen.getByRole("button", { name: "Logout" }); // to get the text of exact button use name : ""
  expect(logoutButton).toBeInTheDocument();
});
