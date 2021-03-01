import React, { useContext } from "react";

import { Contxt } from "../Components/ShoppingCart";
import MenuStyle from "../Components/MenuStyle";


function Menu() {
  const { items, cart, increase, decrease } = useContext(Contxt);

  const [list, setList] = React.useState(items.favorites);
  // const [search, setSearch] = React.useState("");
  // let filteredList = favList;

  function clickCategories(e) {
    setList(items[e.target.dataset.category]);
  }

  function handleChange(e) {
    setList(items.favorites
      .concat(items.appetizers)
      .concat(items.beverages)
    );
  
    // setSearch(e.target.value);
  }

  // search ?
  //   filteredList = list
  //     .filter(element => {
  //       return `${element.name} ${element.description}`
  //         .toLowerCase()
  //         .includes(search.toLowerCase());
  //     })
  // : filteredList = list;

  const totalItems = Object.values(cart).reduce((accum, curr) => accum + curr);

  return(
    <MenuStyle
      handleChange={handleChange}
      categories={items.general}
      clickCategories={clickCategories}
      list={list}
      increase={increase}
      decrease={decrease}
      amount={cart}
      totalAmount={totalItems}
    />
  )
}

export default Menu;