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
    request.push(`Producto ${idx + 1}
      ${item.name}: ${values[idx]}
      descripcion: ${item.description}//
    `);
  });

  console.log(shoppingList)
  console.log(keys)
  console.log(values)
  console.log(meats.fav0)

  const productos = Object.values(meats)

  console.log(productos)
  let valores = []
  let llaves = []


  productos.forEach(producto => {
    llaves.push(Object.keys(producto))
    valores.push(Object.values(producto))


    console.log(producto)
    console.log(producto)
  })

  let listSelected = []
  let counter = []

  valores.forEach((value, i) => {
    if (value.reduce((acc, curr) => acc + curr) > 0) {
      console.log(i)
      value.forEach((cantidad, j) => {
        if (cantidad > 0) {

          counter.push({
            [llaves[i][j]]: cantidad

          }
          )
        }
      })
      listSelected.push(counter)
      counter=[]
    }
  })
  console.log(counter)
  console.log(valores)
  console.log(llaves)
  console.log(listSelected)





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
      listSelected={listSelected}
    // flavors={flavors}
    />
  )
}

export default Order