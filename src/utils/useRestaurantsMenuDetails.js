import React, { useEffect, useState } from "react";

const useRestaurantsMenuDetails = (userId) => {
  const [menuDetails, setMenuDetails] = useState(null);

  useEffect(() => {
    fetchApi();
  }, []);
  const fetchApi = async () => {
    const apiData = await fetch(
      "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=17.44232920998211&lng=78.37452454877891&restaurantId=" +
        userId
    );
    const apiResponse = await apiData.json();
    setMenuDetails(apiResponse);
  };

  return menuDetails;
};

export default useRestaurantsMenuDetails;
