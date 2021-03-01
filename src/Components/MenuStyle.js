import React from "react";
import { Link } from "react-router-dom";

import "./Styles/MenuStyle.css";

function MenuStyle(props) {

  // const activeFavorites = cart.map(e => {
  //   if(e.id.indexOf(fav) != -1) {
      
  //     return (
  
  //     )
  //   }
  // })

  return (
    <section className="menu">
      {/* <form action="" className="form" onSubmit={e => e.preventDefault()}>
        <label htmlFor="search" className="label">
          <input id="search" type="text" name="search" onChange={props.handleChange} placeholder="Search"/>
          <i className="fas fa-search"></i>
        </label>
      </form> */}
      <div className="title">
        <h1>Nuestro menú</h1>
      </div>

      <div className="container-general-articles">
        <div className="general-articles">
          {/* <div className="arrow"><i className="fas fa-chevron-left"></i></div> */}
          <div className="articles">
            {props.categories.map((e, index) => {
              return (
                <figure onClick={props.clickCategories} data-category={e.category} key={index}>
                  <div style={{backgroundImage: `url('${e.url}')`}} data-category={e.category}></div>
                  <figcaption data-category={e.category}>{e.name}</figcaption>
                </figure>
              )
            })}
          </div>
          {/* <div className="arrow"><i className="fas fa-chevron-right"></i></div> */}
        </div>
      </div>

      <div className="list-of-items">
        {props.list.map((e) => {
          return (
            <article key={e.id}>
              <figure style={{backgroundImage: `url('${e.url}')`}}></figure>
              <div className="contents">
                <h4>{e.dish}</h4>
                <p>{e.description}</p>
                <p>$ {e.price}</p>
                <p>{props.amount[e.id]}</p>
              </div>
              <div className="button button-left" onClick={props.decrease} data-product={e.id}>
                <div className="circle" data-product={e.id}>-</div>
              </div>
              <div className="button button-right" onClick={props.increase} data-product={e.id}>
                <div className="circle" data-product={e.id}>+</div>
              </div>
            </article>
          )
        })}
      </div>

      <div>
        {/* {if (condition) {
          
        } else {
          
        }} */}

        <Link to="/order" className="to-shopping-cart">
          <i className="fas fa-cart-arrow-down"></i>
          <p className="quantity">{props.totalAmount}</p>
        </Link>
      </div>
    </section>
  )
}
export default MenuStyle;