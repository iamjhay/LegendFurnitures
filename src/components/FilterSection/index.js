import React, { useEffect, useState } from "react";
import FilterPanel from "./FilterPanel";
import { dataList } from "../../data";
import ListPanel from "./ListPanel";
import EmptyView from "../common/EmptyView";

const Filter = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedRating, setSelectedRating] = useState(null);
  const [selectedPrice, setSelectedPrice] = useState([1000, 5000]);
  const [list, setList] = useState(dataList);
  const [resultFound, setResultFound] = useState(true);
  const [cuisines, setCuisines] = useState([
    {
      id: 1,
      checked: false,
      label: "American",
    },
    {
      id: 2,
      checked: false,
      label: "Chinese",
    },
    {
      id: 3,
      checked: false,
      label: "Italian",
    },
  ]);

  const handleSelectedToggle = (event, value) =>
    !value ? null : setSelectedCategory(value);

  const handleSelectedRating = (event, value) =>
    !value ? null : setSelectedRating(value);

  const handleChangeChecked = (id) => {
    const cuisinesStateList = cuisines;

    const changeCheckedCuisines = cuisinesStateList.map((item) =>
      item.id === id ? { ...item, checked: !item.checked } : item
    );
    setCuisines(changeCheckedCuisines);
  };

  const handleChangedPrice = (event, value) => setSelectedPrice(value);

  const applyFilters = () => {
    let updatedList = dataList;

    // Rating Filter
    if (selectedRating) {
      updatedList = updatedList.filter(
        (item) => parseInt(item.rating) === parseInt(selectedRating)
      );
    }

    //Category Filter
    if (selectedCategory) {
      updatedList = updatedList.filter(
        (item) => item.category === selectedCategory
      );
    }

    //Cuisine Filter
    const cuisineChecked = cuisines
      .filter((item) => item.checked)
      .map((item) => item.label.toLowerCase());

    if (cuisineChecked.length) {
      updatedList = updatedList.filter((item) =>
        cuisineChecked.includes(item.cuisine)
      );
    }

    // Price Filter
    const minPrice = selectedPrice[0];
    const maxPrice = selectedPrice[1];

    updatedList = updatedList.filter(
      (item) => item.price >= minPrice && item.price <= maxPrice
    );

    setList(updatedList);

    !updatedList.length ? setResultFound(false) : setResultFound(true);
  };

  useEffect(() => {
    applyFilters();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedRating, selectedCategory, cuisines, selectedPrice]);

  return (
    <div className="min-h-screen w-full lg:mt-20 xl:my-0">
      <div className="dark:text-white flex flex-col md:flex-row">
        <div className="dark:bg-gray-50 w-full md:w-[280px] lg:w-[300px] sticky top-16 z-40 bg-gray-50 md:h-screen border-r">
          <FilterPanel
            selectedCategory={selectedCategory}
            selectToggle={handleSelectedToggle}
            selectedRating={selectedRating}
            selectRating={handleSelectedRating}
            cuisines={cuisines}
            changeChecked={handleChangeChecked}
            selectedPrice={selectedPrice}
            changedPrice={handleChangedPrice}
          />
        </div>
        <div className="flex-1 px-4 py-4 z-10">
          {resultFound ? <ListPanel list={list} /> : <EmptyView />}
        </div>
      </div>
    </div>
  );
};

export default Filter;
