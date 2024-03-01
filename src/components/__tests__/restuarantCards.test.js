import { render, screen } from "@testing-library/react";
import RestaurantCards from "../RestaurantCards";
import restaurantMock from "../mocks/restaurantMock.json";
import "@testing-library/jest-dom";

test("to test the mock data and find whether ", () => {
  render(<RestaurantCards data={restaurantMock} />);
  const textData = screen.getByText("Shah Ghouse Hotel & Restaurant");
  expect(textData).toBeInTheDocument();
});
