import React from "react";
import ListItem from "./ListItem";

const ListPanel = ({ list }) => {
  return (
    <>
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {list.map((item, index) => (
          <div clasName="" key={index}>
            <ListItem item={item}></ListItem>
          </div>
        ))}
      </div>
    </>
  );
};

export default ListPanel;
