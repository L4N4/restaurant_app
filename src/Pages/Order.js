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

  let shoppingList = [];
  console.log(items)

  Object.keys(items).forEach(category => {
    items[category].forEach((item, idx) => {
      keys.forEach(key => {
        if (key === items[category][idx].id) {
          shoppingList.push(items[category][idx]);
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


  console.log(shoppingList)
  console.log(keys)
  console.log(values)

  const productos = Object.values(meats)

  console.log(productos)
  let valores = []
  let llaves = []


  productos.forEach(producto => {
    llaves.push(Object.keys(producto))
    valores.push(Object.values(producto))
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
      counter = []
    }
  })
  console.log(counter)
  console.log(valores)
  console.log(llaves)
  console.log(listSelected)

  let flav = "";

  shoppingList.forEach((item, idx) => {
    if (item.id == "fav0" || item.id == "fav1" || item.id == "fav2" || item.id == "fav3") {
      listSelected[idx].map(e => {
        return (
          request.push(`Producto ${idx + 1}
          ${item.dish}: ${values[idx]}
          Sabor(es): ${Object.keys(e)} ${Object.values(e)}
          descripcion: ${item.description}//
          `)
        )
      })
    }
    request.push(`Producto ${idx + 1}
      ${item.dish}: ${values[idx]}
      descripcion: ${item.description}//
    `);
  });


  const message = `Nuevo pedido:
  
    ${request.join(`
    `)}
  `;


  console.log(request)

  return (
    <OrderStyle
      cartValues={values}
      shoppingList={shoppingList}
      phone={phone}
      message={message}
      total={total}
      meats={meats}
      listSelected={listSelected}
    />
  )
}

export default Order