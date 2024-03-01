// import React, { useEffect, useState } from "react";

// const googleSearchResults = (searchText) => {
//   const [resultsData, setResultsData] = useState([]);
//   useEffect(() => {
//     searchResults();
//   }, []);
//   const searchResults = async () => {
//     const results = await fetch(
//       "http://suggestqueries.google.com/complete/search?client=firefox&q=" +
//         searchText
//     );
//     const resultsList = await results.json();
//     setResultsData(resultsList);
//   };
//   return resultsData;
// };

// export default googleSearchResults;
