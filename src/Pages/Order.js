import React, { useContext } from "react";

import { Contxt } from "../Components/ShoppingCart";
import OrderStyle from "../Components/OrderStyle";

function Order() {
  const { items, cart, increase, decrease } = useContext(Contxt);
  
  let keys = [];
  let values = [];

  Object.values(cart).forEach((value, idx) => {
    if (value > 0) {
      keys.push(Object.keys(cart)[idx]);
      values.push(value);
    }
  });

  let shoppingList = [];

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

  shoppingList.forEach((item, idx) => {
    request.push(`Producto ${idx+1}
      ${item.name}: ${values[idx]}
      descripcion: ${item.description}//
    `);
  });

  const message = `Nuevo pedido:
  
  ${request.join(`
  `)}
  `;

  return (
    <OrderStyle
      cartValues={values}
      shoppingList={shoppingList}
      increase={increase}
      decrease={decrease}
      phone={phone}
      message={message}
      total={total}
    />
  )
}

export default Order;