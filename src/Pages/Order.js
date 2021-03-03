import React, { useContext, useState, useEffect } from "react";

import { Contxt } from "../Components/ShoppingCart";
import OrderStyle from "../Components/OrderStyle";

function Order() {
  const { items, cart, meats } = useContext(Contxt);
  
  let keys = [];
  let values = [];

  Object.values(cart).forEach((value, idx) => {
    if (value > 0) {
      keys.push(Object.keys(cart)[idx]);
      values.push(value);
    }
  });

  // let flavors = []

  // const idProducts = items.favorites
  //   .concat(items.appetizers)
  //   .concat(items.beverages)
  //   .map((e) => e = e.id)
  // ;

  // let flavrs = {};

  // const [flavors, setFlavors] = useState({})

  // const updateFlavors = () =>{

  //   for (let i of keys) {  
  //     for (const id in meats) {
  //       if(meats[i] == meats[id]) {
  //         for(const flav in meats[id]) {
  //           if(meats[id][flav].quantity !== 0){
  //             setFlavors(
  //               {
  //                 ...flavors,
  //                 [i]: {[flav]: meats[id][flav].quantity}
  //               }
  //             ) 
  //           }
  //         }
  //       }
          
  //       }
    
  //   }
  // }

  // useEffect(() => {
  //   updateFlavors()
  // }, [])

  let shoppingList = [];

  Object.keys(items).forEach(category => {
    items[category].forEach((item, idx) => {
      keys.forEach(key => {
        if (key === items[category][idx].id) {
          // meats[key].forEach(flav => {
          //   if(flav.quantity != 0) {
             shoppingList.push(items[category][idx]);
          //   }
          // })
        }
      })
    });
  });

  let total = 0;
  shoppingList.forEach((item, idx) => {
    total += item.price * values[idx];
  });

  const phone = 573202383981;
  const request = [];

  shoppingList.forEach((item, idx) => {
    request.push(`Producto ${idx+1}
      ${item.name}: ${values[idx]}
      descripcion: ${item.description}//
    `);
  });

  console.log(shoppingList)
  console.log(keys)
  console.log(values)
  console.log(meats)
  // console.log(flavors)

  const message = `Nuevo pedido:
  
    ${request.join(`
    `)}
  `;

  return (
    <OrderStyle
      cartValues={values}
      shoppingList={shoppingList}
      phone={phone}
      message={message}
      total={total}
      meats={meats}
      // flavors={flavors}
    />
  )
}

export default Order