import React, { useContext } from "react";

import { Contxt } from "../Components/ShoppingCart";
import MenuStyle from "../Components/MenuStyle";


function Menu() {
  const { items, cart, increase, decrease, increaseFl, decreaseFl, meats } = useContext(Contxt);

  const [list, setList] = React.useState(items.favorites);
  // const [search, setSearch] = React.useState("");
  // let filteredList = favList;
  const [category, setCategory] = React.useState("favorites")

  function clickCategories(e) {
    setList(items[e.target.dataset.category]);
    setCategory(e.target.dataset.category)
    console.log(items.general)
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
      category={category}
      categories={items.general}
      clickCategories={clickCategories}
      list={list}
      increase={increase}
      decrease={decrease}
      amount={cart}
      totalAmount={totalItems}
      items={items}
      increaseFl={increaseFl}
      decreaseFl={decreaseFl}
      meats={meats}
    />
  )
}

export default Menu;