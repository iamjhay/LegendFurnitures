import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  cardImg: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
  },
  content: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: "0.5rem",
    zIndex: 20,
  },
  footer: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: "0.5rem",
    fontSize: "0.8rem",
  },
  rating: {
    backgroundColor: "#eeeeee",
    padding: "0.5rem",
    borderRadius: "10px",
  },
  subtitle: {
    display: "flex",
    alignItems: "center",
  },
  delivery: {
    marginLeft: theme.spacing(1),
    color: "rgba(0, 0, 0, 0.26)",
  },
}));

const ListItem = ({ item }) => {
  const { title, coverSrc, rating, serviceTime, deliveryFee, price } = item;

  const classes = useStyles();
  return (
    <div className="mx-auto md:mx-0 max-w-[345px] h-[250px] relative shadow-lg rounded-xl overflow-hidden cursor-pointer">
      <img
        src={coverSrc}
        alt={title}
        className="absolute top-0 left-0 object-cover object-center w-full h-full"
      />
      <div
        className="z-20 px-3 text-white absolute top-0 left-0 right-0 bottom-0 bg-gray-900  hover:bg-gray-900 bg-opacity-20 hover:bg-opacity-50 flex flex-col justify-end"
        // onClick={() => alert("yes")}
      >
        <div className={classes.content}>
          <p className="text-white text-lg font-bold capitalize">{title}</p>
          <span className="text-black p-2 bg-gray-50 rounded-md">
            🌟 {rating}
          </span>
        </div>
        <div className={classes.footer}>
          <div className={classes.subtitle}>
            <p className="">{serviceTime}</p>
            <p className="ml-2 text-gray-200 absolute top-[-10px] left-2 p-2 bg-yellow-600 bg-opacity-90">
              Delivery Fee ${deliveryFee}
            </p>
          </div>
          <Typography variant="body2" fontWeight="fontWeightBold">
            ${price}
          </Typography>
        </div>
      </div>
    </div>
  );
};

export default ListItem;

// id: 1,
//     title: "lounge resort",
//     serviceTime: "45-60min",
//     deliveryFee: 3.44,
//     category: "place",
//     cuisine: "american",
//     rating: 5,
//     price: 2500,
//     coverSrc: "/images/places/ameri.jpg",
