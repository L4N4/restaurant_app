import React, { createContext } from "react";

import items from "../Pages/itemsObject/Items.json";
import flavors from "../Pages/itemsObject/flavors.json"

const Contxt = createContext();

function ShoppingCart(props) {

  // const PRODUCTS = {
  //   general: [
  //     {
  //       id: "gen1",
  //       name: "Empanada",
  //       category: "empanadas",
  //       styles: {
  //         backgroundImage: `url('${empanadaImage}')`
  //       }
  //     },
  //     {
  //       id: "gen2",
  //       name: "Hamburguesa",
  //       category: "hamburgers",
  //       styles: {
  //         backgroundImage: `url('${hamburgerImage}')`
  //       }
  //     },
  //     {
  //       id: "gen3",
  //       name: "Bebidas",
  //       category: "bebidas",
  //       styles: {
  //         backgroundImage: `url('${drinkImage}')`
  //       }
  //     }
  //   ],

  //   empanadas: [
  //     {
  //       id: "emp1",
  //       name: "Empanada de carne",
  //       description: "Empanada de carne con huevo",
  //       cost: 1800,
  //       styles: {
  //         backgroundImage: `url('${empanadaImage}')`
  //       }
  //     },
  //     {
  //       id: "emp2",
  //       name: "Empanada de pollo",
  //       description: "Empanada de pollo con huevo",
  //       cost: 1800,
  //       styles: {
  //         backgroundImage: `url('${empanadaImage}')`
  //       }
  //     }
  //   ],

  //   hamburgers: [
  //     {
  //       id: "ham1",
  //       name: "Hamburguesa",
  //       description: "Hamburguesa sencilla",
  //       cost: 5000,
  //       styles: {
  //         backgroundImage: `url('${hamburgerImage}')`
  //       }
  //     }
  //   ],

  //   bebidas: [
  //     {
  //       id: "beb1",
  //       name: "Cocacola",
  //       description: "gaseosa 2L",
  //       cost: 3000,
  //       styles: {
  //         backgroundImage: `url('${drinkImage}')`
  //       }
  //     },
  //     {
  //       id: "beb2",
  //       name: "Poker",
  //       description: "cerveza 350ml",
  //       cost: 2200,
  //       styles: {
  //         backgroundImage: `url('${drinkImage}')`
  //       }
  //     }
  //   ]
  // }

  //
 
  //-------------shoping cart quantities----------------
  const idProducts = items.favorites
    .concat(items.appetizers)
    .concat(items.beverages)
    .map((e) => e = e.id)
  ;

  let initialStateCart = {};
  for (let i of idProducts) {
    initialStateCart[i] = 0
  }

  const [cart, setCart] = React.useState(initialStateCart);

  const increase = e => {
    console.log(e.target.dataset.product)
    console.log(cart)
    setCart({
      ...cart,
      [e.target.dataset.product]: cart[e.target.dataset.product] + 1
    });
  }

  const decrease = e => {
    if(cart[e.target.dataset.product] > 0) {
      setCart({
        ...cart,
        [e.target.dataset.product]: cart[e.target.dataset.product] - 1
      });
    }
  }

   //--------------- List of meats------------------

  const idFavorites = items.favorites.map((e) => e = e.id)

    let flavorEl = {}
    for (let fl of flavors){
        flavorEl = Object.assign (flavorEl, {
            [fl.dish]: {
                quantity: 0
            }
        })
    }
    
    let initialStateMeats = {};
    for (let i of idFavorites) {
        initialStateMeats[i] = flavorEl
    }

  const [meats, setMeats] = React.useState(initialStateMeats);

  const increaseFl = (e, idFav) => {
    console.log(e.target.dataset.product)
    console.log(meats)
    
    setMeats(prevMeats => ({
      ...prevMeats,
      [idFav]:{ ...prevMeats[idFav],
          [e.target.dataset.product]: {
              quantity: meats[idFav][e.target.dataset.product].quantity + 1,
          }
      }
    }));
  }

  const decreaseFl = (e, idFav) => {
    if(meats[idFav][e.target.dataset.product].quantity > 0) {
        setMeats(prevMeats => ({
            ...prevMeats,
            [idFav]:{ ...prevMeats[idFav],
                [e.target.dataset.product]: {
                    quantity: meats[idFav][e.target.dataset.product].quantity - 1,
                }
            }
          }))
    }
  }


  return (
    <Contxt.Provider value={{ items ,cart, increase, decrease, increaseFl, decreaseFl, meats }}>
      {props.children}
    </Contxt.Provider>
  )
}

export { ShoppingCart, Contxt };