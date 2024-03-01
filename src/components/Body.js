import RestaurantCards from "./RestaurantCards";
import { useEffect, useState, useContext, useMemo } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import userOnlineStatus from "../utils/userOnlineStatus";
import { userPersonalDetails } from "../utils/userPersonalDetails";
// import mockData from "../utils/mockData.json";

// let resName =
//   mockData?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants?.map(
//     (id) => id?.info
//   );

const Body = () => {
  const { userName, setUserInfo } = useContext(userPersonalDetails);
  const [originalData, setOriginalData] = useState([]);
  const [filterItems, setFilterItems] = useState([]);
  const [searchTextValue, setSearchTextValue] = useState("");
  const [noData, setNewData] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(6); // Number of items per page


  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    let apiData = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.44232920998211&lng=78.37452454877891&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    let apiResponse = await apiData.json();

    setFilterItems(
      apiResponse?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants?.map(
        (id) => id?.info
      )
    );
    setOriginalData(
      apiResponse?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants?.map(
        (id) => id?.info
      )
    );
  };

  let userStatus = userOnlineStatus();

  if (!userStatus) {
    return <h1> Hey... you are offline</h1>;
  }

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filterItems.slice(indexOfFirstItem, indexOfLastItem);

  // Logic to paginate
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return filterItems.length === 0 ? (
    <Shimmer />
  ) : (
    <>
      <div className="ratingButtons flex justify-end my-4 mx-11">
        <input
          type="text"
          className="border border-gray-600 focus:outline-none px-1 mx-1 py-1"
          placeholder="Enter Restaurant Name"
          value={searchTextValue}
          data-testid = "search-input"
          onChange={(e) => {
            setSearchTextValue(e.target.value);
          }}
        />
        <button
          className="search-btn border border-gray-800 rounded bg-stone-100 px-2 mx-1"
          onClick={() => {
            setNewData(false)
            const searchData = originalData.filter((res) =>
              res?.name.toLowerCase().includes(searchTextValue.toLowerCase())
            );
            setFilterItems(searchData);
            if (searchData?.length === 0) {
              setNewData(true)
            }
            setSearchTextValue("");
          }}
        >
          Search
        </button>
        <button
          className="topRatedRestaurant border border-gray-800 rounded bg-stone-100 px-2 mx-1"
          onClick={() => {
            setNewData(false)
            const filteredData = originalData?.filter(
              (res) => res?.avgRating > 4
            );
            setFilterItems(filteredData);
            setSearchTextValue("");
          }}
        >
          Top Rated Restaurants
        </button>
        <button
          className="lowRatedRestaurant border border-gray-800 rounded bg-stone-100 px-2 mx-1"
          onClick={() => {
            setNewData(false)
            const filteredData = originalData?.filter(
              (res) => res?.avgRating <= 4
            );
            setFilterItems(filteredData);
            setSearchTextValue("");
          }}
        >
          Low Rated Restaurants
        </button>
        <button
          className="ResetRatedRestaurant border border-gray-800 rounded bg-stone-100 px-2 mx-1"
          onClick={() => {
            setNewData(false)
            const filteredData = originalData?.filter((res) => res);
            setFilterItems(filteredData);
            setSearchTextValue("");
          }}
        >
          Reset
        </button>
      </div>
      <div className="flex flex-wrap mx-4">
        {/* {noData && <h1 className="font-extrabold text-red-900 ml-5 mt-10"> Oops! no Restaurant found</h1>} */}
        {/* {filterItems?.map((items) => (
          <Link to={"/restaurant/" + items?.id} key={items?.id}>
            <RestaurantCards data={items} />{" "}
          </Link>
        ))} */}
        {currentItems.map((items) => (
        <Link to={"/restaurant/" + items?.id} key={items?.id}>
          <RestaurantCards data={items} />
        </Link>
      ))}
      </div>

      {/* Pagination buttons */}
      <div className="pagination text-center mx-auto my-6">
        {Array.from({ length: Math.ceil(filterItems.length / itemsPerPage) }, (_, i) => (
          <button key={i} onClick={() => paginate(i + 1)} className="px-3 mx-1 hover:bg-slate-400 border rounded-2xl">
            {i + 1}
          </button>
        ))}
      </div>
      
    </>
  );
};

export default Body;
