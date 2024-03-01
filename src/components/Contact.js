import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { cacheSearchResults } from "../utils/searchSlice";
import googleSearchResults from "../utils/googleSearchResults";
import { getProducts } from "../utils/productSlice";

const Contact = () => {
  const [searchText, setSearchText] = useState("");
  const [showList, setShowList] = useState(false);
  const [resultsData, setResultsData] = useState([]);
  const dispatch = useDispatch();
  const searchCache = useSelector((store) => store.search);
  const {data: dummy, status} = useSelector((store) => store.products);


  // const results = googleSearchResults(searchText);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (searchCache[searchText]) {
        setResultsData(searchCache[searchText]);
      } else {
        searchResults();
      }
    }, 200);
    return () => {
      clearTimeout(timer); // destroy the timer when we type next letter below 200ms (when component is unmounted)
    };
  }, [searchText]);

 

  useEffect(()=> {
    dispatch(getProducts())
  }, [])

  const searchResults = async () => {
    const results = await fetch(
      "http://suggestqueries.google.com/complete/search?client=firefox&q=" +
        searchText
    );
    const resultsList = await results.json();
    setResultsData(resultsList[1]);
    dispatch(cacheSearchResults({ [searchText]: resultsList[1] }));
  };

  if(status === "pending") {
    return <h1 className="font-extrabold">Status is pending</h1>
  }

  return (
    <>
      <div className="flex flex-col items-center mt-6">
        <h1 className="font-normal text-2xl">
          This is contact page, Below Input Box is
          <strong> Google Search Suggestions</strong>, <br />
          It will give the Suggestions as soon as we enter text
        </h1>
        <div className="flex flex-col">
          <input
            type="text"
            className="border border-gray-600 focus:outline-none rounded p-1 mx-1 mt-10 w-96 mb-2"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
            onFocus={() => setShowList(true)}
            onBlur={() => setShowList(false)}
          />
          {showList && (
            <div className="shadow-lg">
              {resultsData?.map((item, index) => (
                <li
                  key={index}
                  className="list-none py-1 hover:bg-gray-100 rounded-lg cursor-default pl-2"
                >
                  {item}
                </li>
              ))}
            </div>
          )}
          <div className="my-20">
                {dummy?.map(item => <li key={item?.id}>{item?.title}</li>)}
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;

// import React from 'react'

// const Contact = () => {
//   return (
//     <div><h1>Contact  </h1>
//     <button>hello</button>
//     <input type="text" />
//     <input type="text" />

//     <input type="text" />

//     </div>
//   )
// }

// export default Contact
