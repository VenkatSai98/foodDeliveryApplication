import React, { useState } from "react";
import MenuItemsList from "./MenuItemsList";

const MenuItems = (props) => {
  const itemNames = props?.menu?.card?.card?.itemCards;

  const handleClick = () => {
    // setShowMenuItems(true);
    props?.showIndexItems();
  };

  return (
    <>
      {itemNames && (
        <div
          className="item-details flex items-center justify-between mb-6 cursor-pointer border-b-2"
          onClick={() => handleClick(props.index)}
        >
          <span className="font-normal text-lg font-mono">
            {props?.menu?.card?.card?.title}
          </span>
          <span>
            <svg
              data-accordion-icon
              class="w-3 h-3 rotate-180 shrink-0"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 10 6"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M9 5 5 1 1 5"
              />
            </svg>
          </span>
        </div>
      )}
      {props?.showItems && <MenuItemsList itemNames={itemNames} data="hello" />}
    </>
  );
};

export default MenuItems;
