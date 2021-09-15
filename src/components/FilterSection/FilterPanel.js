import React from "react";
import { categoryList, ratingList } from "../../data";
import FilterListToggle from "../common/FilterListToggle";
import { makeStyles } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";
import SliderProton from "../common/Slider";
import CheckBox from "../common/CheckBox";
// import CheckBox from "../common/CheckBox";
// import SliderProton from "../common/Slider";

const useStyles = makeStyles((theme) => ({
  root: {
    overflowX: "hidden",
  },
  title: {
    paddingTop: theme.spacing(1),
    color: "#000",
  },
}));

const FilterPanel = ({
  selectedCategory,
  selectToggle,
  selectedRating,
  selectRating,
  cuisines,
  changeChecked,
  selectedPrice,
  changedPrice,
}) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      {/* Category */}
      <div className="p-4">
        <Typography variant="h6" className={classes.title}>
          Category
        </Typography>
        <FilterListToggle
          options={categoryList}
          value={selectedCategory}
          selectToggle={selectToggle}
        />
      </div>
      {/* Region */}
      <div className="hidden md:block p-4">
        <Typography variant="h6" className={classes.title}>
          Region
        </Typography>
        {cuisines.map((cuisine) => (
          <CheckBox
            key={cuisine.id}
            cuisine={cuisine}
            changeChecked={changeChecked}
          />
        ))}
      </div>
      {/* Price Range */}
      <div className="hidden md:block p-4">
        <Typography variant="h6" className={classes.title} gutterBottom>
          Price Range
        </Typography>
        <SliderProton value={selectedPrice} changedPrice={changedPrice} />
      </div>

      {/* Star Rating */}
      <div className="hidden md:block p-4">
        <Typography variant="h6" className={classes.title}>
          Star Rating
        </Typography>
        <FilterListToggle
          options={ratingList}
          value={selectedRating}
          selectToggle={selectRating}
        />
      </div>
    </div>
  );
};

export default FilterPanel;
