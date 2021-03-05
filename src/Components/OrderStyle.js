import React from "react";
import { Link } from "react-router-dom";

import "./Styles/OrderStyle.css";

function OrderStyle(props) {

  const delivery = 2000

  return (
    <section className="order">
      <div className="title">
        <h1>Mi Carrito</h1>
        <i className="fas fa-cart-arrow-down"></i>
      </div>

      <div className="message-container">
        <div className="message">
          <h1>Recuerda:</h1>
          <p>Tu orden será enviada a nuestro whatsapp en donde coordinaremos la entrega y el pago</p>
        </div>
      </div>

      <div className="articles">
        {props.shoppingList.map((item, idx) => {
          return (
            <div className="article-container" key={item.id}>
              <article>
                <figure style={{backgroundImage: `url('${item.url}')`}}></figure>
                <div className="contents">
                  <h4>{item.dish}</h4>
                  
                  {item.id == "fav0" || item.id == "fav1" || item.id == "fav2" || item.id == "fav3" ?
                    props.listSelected[idx].map((e)=> {
                    return(
                      <p>{`${Object.keys(e)} ${Object.values(e)}`}</p>
                    )
                        }
                    ) : false
                  }
                  <p>$ {item.price}</p>
                  <p>{props.cartValues[idx]}</p>
                </div>
              </article>
            </div>
          )
        })}
      </div>

      <div className="resume">
        <div>
          <Link  to="/menu">
            <p>Agregar más productos</p>
          </Link>
        </div>

        <div>
          <div className="row">
            <p>Envío (opcional)</p>
            <p>$ {delivery}</p>
          </div>
          <div className="row">
            <p>Total</p>
            <p>$ {props.total + delivery}</p>
          </div>
        </div>

        <div>
          <a href={`https://api.whatsapp.com/send?phone=${props.phone}&text=${props.message}`}>
            <p>Confirmar orden</p>
            <i className="fab fa-whatsapp"></i>
          </a>
        </div>
      </div>
    </section>
  )
}

export default OrderStyle;