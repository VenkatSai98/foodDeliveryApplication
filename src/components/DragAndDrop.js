// import React, { useState } from "react";

// const DragAndDrop = () => {
//   const [dragging, setDragging] = useState(false);

//   const handleDragStart = (e, id) => {
//     e.dataTransfer.setData("id", id);
//     setDragging(true);
//   };

//   const handleDragOver = (e) => {
//     e.preventDefault();
//   };

//   const handleDrop = (e, category) => {
//     const id = e.dataTransfer.getData("id");
//     // Perform actions based on the dropped item and category
//     setDragging(false);
//   };

//   return (
//     <div className="w-1/2 mx-auto mt-20">
//       <div
//         onDragOver={(e) => handleDragOver(e)}
//         onDrop={(e) => handleDrop(e, "category1")}
//         style={{ border: "1px solid black", padding: "10px" }}
//       >
//         <h2>Category 1</h2>
//         <div
//           draggable
//           onDragStart={(e) => handleDragStart(e, "item1")}
//           style={{
//             background: dragging ? "lightblue" : "white",
//             padding: "5px",
//             margin: "5px",
//           }}
//         >
//           Item 1
//         </div>
//       </div>
//       <div
//         onDragOver={(e) => handleDragOver(e)}
//         onDrop={(e) => handleDrop(e, "category2")}
//         style={{
//           border: "1px solid black",
//           padding: "10px",
//           marginTop: "20px",
//         }}
//       >
//         <h2>Category 2</h2>
//         <div
//           draggable
//           onDragStart={(e) => handleDragStart(e, "item2")}
//           style={{
//             background: dragging ? "lightblue" : "white",
//             padding: "5px",
//             margin: "5px",
//           }}
//         >
//           Item 2
//         </div>
//       </div>
//     </div>
//   );
// };

// export default DragAndDrop;

import React, { useState, useRef } from "react";

const DragAndDrop = () => {
  const dragItem = useRef();
  const dragOverItem = useRef();
  const [list, setList] = useState([
    "Item 1",
    "Item 2",
    "Item 3",
    "Item 4",
    "Item 5",
    "Item 6",
  ]);

  const dragStart = (e, position) => {
    dragItem.current = position;
    console.log(e.target.innerHTML);
  };

  const dragEnter = (e, position) => {
    dragOverItem.current = position;
    console.log(e.target.innerHTML);
  };

  const drop = (e) => {
    const copyListItems = [...list];
    const dragItemContent = copyListItems[dragItem.current];  // copyListItems[1]
    copyListItems.splice(dragItem.current, 1);  // 1 (item 2)
    copyListItems.splice(dragOverItem.current, 0, dragItemContent); 0 
    dragItem.current = null;
    dragOverItem.current = null;
    setList(copyListItems);
  };

  return (
    <>
      {list &&
        list.map((item, index) => (
          <div
            style={{
              backgroundColor: "lightblue",
              margin: "20px 25%",
              textAlign: "center",
              fontSize: "40px",
            }}
            onDragStart={(e) => dragStart(e, index)}
            onDragEnter={(e) => dragEnter(e, index)}
            onDragEnd={drop}
            key={index}
            draggable
          >
            {item}
          </div>
        ))}
    </>
  );
};
export default DragAndDrop;
