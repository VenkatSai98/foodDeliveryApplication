import { fireEvent, render, screen } from "@testing-library/react";
import { act } from "react-dom/test-utils";
import Body from "../Body";
import restuarantBody from "../mocks/restuarantBody.json";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";
import { afterEach, beforeEach, describe } from "node:test";

global.fetch = jest.fn(() => {
  // making a fake fetch request
  // global refers to fetch of the body component
  return Promise.resolve({
    // fetch returns us a promise and json also returns a promise and gives the actual data
    json: () => {
      return Promise.resolve(restuarantBody); // need to mock the exact data what we are receiving
    },
  });
});

describe("to test over all search functionality", () => {

    // beforeAll(()=> {
    //     console.log("before all")
    // })
    // beforeEach(()=> {
    //     console.log("before each")
    // })
    // afterEach(()=> {
    //     console.log("after each")
    // })
    // afterAll(()=> {
    //     console.log("after all")
    // }) 
    test("to test the search functionality", async () => {
        await act(async () =>
          //we should render inside act when we have async operation or doing state update
          render(
            <BrowserRouter>
              <Body />
            </BrowserRouter>
          )
        );
        //   const cardsBeforeSearch = screen.getByTestId("resCard")
        //   expect(cardsBeforeSearch.length).toBeGreaterThan(10)
        const searchBtn = screen.getByRole("button", { name: "Search" });
        const searchInput = screen.getByTestId("search-input");
        fireEvent.change(searchInput, { target: { value: "burger" } }); // jsdom do not have e.target.value as browser has
        // when we have burger in the input field and after firing click event on my search button screen should load 2 cards
        fireEvent.click(searchBtn);
        //   const cards = screen.getAllByTestId("resCard");
        //   expect(cards.length).toBeGreaterThan(1);
      });
      
      test("to test the top rated restaurants", async () => {
        await act(async () =>
          render(
            <BrowserRouter>
              <Body />
            </BrowserRouter>
          )
        );
      
        const searchBtn = screen.getByRole("button", {
          name: "Top Rated Restaurants",
        });
        fireEvent.click(searchBtn);
        const cards = screen.getAllByTestId("resCard");
        // console.log(cards.length);
        expect(cards.length).toBeGreaterThan(5);
      });
      
      test("to test the low rated restaurants", async () => {
          await act(async () =>
            render(
              <BrowserRouter>
                <Body />
              </BrowserRouter>
            )
          );
        
          const searchBtn = screen.getByRole("button", {
            name: "Low Rated Restaurants",
          });
          fireEvent.click(searchBtn);
          const cards = screen.getAllByTestId("resCard");
        //   console.log(cards.length);
          expect(cards.length).toBeGreaterThan(5);
        });


})


