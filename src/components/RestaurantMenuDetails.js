import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import Shimmer from "./Shimmer";
import useRestaurantsMenuDetails from "../utils/useRestaurantsMenuDetails";
import MenuItems from "./MenuItems";

const RestaurantMenuDetails = () => {
  const { userId } = useParams();
  const [accordionIndex, setAccordionIndex] = useState(null);
  //   useEffect(() => {
  //     getMenuApi();
  //   }, []);
  //   const getMenuApi = async () => {
  //     let fetchApi = await fetch(
  //       "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=17.44232920998211&lng=78.37452454877891&restaurantId=" +
  //         userId +
  //         "&catalog_qa=undefined&submitAction=ENTER"
  //     );
  //     let apiResponse = await fetchApi.json();
  //     setMenuDetails(apiResponse);
  //   };

  

  // ****** most important useRestaurantsMenuDetails is an custom hook that we have created for getting data (API call) ****** most important

  let menuDetails = useRestaurantsMenuDetails(userId);

  console.log(menuDetails, "menuDetails")

  const { name, cuisines, costForTwoMessage } =
    menuDetails?.data?.cards[2].card.card.info || {};
  const itemCards =
    menuDetails?.data.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards;

  return menuDetails === null ? (
    <Shimmer />
  ) : (
    <>
      <div className="restaurant-menu-details text-center">
        <h1 className="font-bold mt-6 mb-2 text-lg">{name}</h1>
        <p className="font-medium mb-5">
          {cuisines?.join(", ")} - {costForTwoMessage}
        </p>
        <div className="w-6/12 mx-auto">
          {itemCards?.map((menuList, index) => (
            <MenuItems
              menu={menuList}
              key={index}
              showItems={index === accordionIndex}
              showIndexItems={() => setAccordionIndex(index)}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default RestaurantMenuDetails;
