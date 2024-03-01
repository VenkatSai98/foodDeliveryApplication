const RestaurantCards = (data) => {
  const { name, avgRating, costForTwo, cloudinaryImageId, cuisines } =
    data?.data;
  return (
    <div
      className="card-body m-3 p-3 w-[222px] border border-r-gray-100 rounded-xl"
      data-testid="resCard"
    >
      <div className="restaurantDetails">
        <img
          className="h-[220px] w-[222px] border rounded-xl"
          src={
            "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" +
            cloudinaryImageId
          }
          alt="text"
        />
        <p className="my-2 font-bold">{name}</p>
        <div className="flex justify-between items-center my-4">
          <h3 className="font-semibold">Rating: {avgRating}</h3>
          <h5 className="font-semibold">{costForTwo}</h5>
        </div>
        <h4 className="cuisines-text font-serif">{cuisines.join(", ")}</h4>
      </div>
    </div>
  );
};

export default RestaurantCards;
