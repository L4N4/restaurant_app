import React, { useState } from "react";
import Modal from 'react-modal';
import flavors from "../Pages/itemsObject/flavors.json"

import "./Styles/modalList.css"
import styles from "./Styles/modalStyles"

Modal.setAppElement('#root')

function ModalList(props) {

    const [modalIsOpen, setModalIsOpen] = useState(false);
    function openModal() {
        setModalIsOpen(true);
    }

    function closeModal() {
        setModalIsOpen(false);
    }

    function handleSubmit() {

    }

    //--------------- List of meats------------------
    //     const idFavorites = props.items.favorites.map((e) => e = e.id)

    //     let flavorEl = {}
    //     for (let fl of flavors){
    //         flavorEl = Object.assign (flavorEl, {
    //             [fl.dish]: {
    //                 quantity: 0
    //             }
    //         })
    //     }

    //     let initialStateMeats = {};
    //     for (let i of idFavorites) {
    //         initialStateMeats[i] = flavorEl
    //     }

    //   const [meats, setMeats] = React.useState(initialStateMeats);

    //   const increase = e => {
    //     console.log(e.target.dataset.product)
    //     console.log(meats)

    //     setMeats(prevMeats => ({
    //       ...prevMeats,
    //       [props.idFav]:{ ...prevMeats[props.idFav],
    //           [e.target.dataset.product]: {
    //               quantity: meats[props.idFav][e.target.dataset.product].quantity + 1,
    //           }
    //       }
    //     }));
    //   }

    //   const decrease = e => {
    //     if(meats[props.idFav][e.target.dataset.product].quantity > 0) {
    //         setMeats(prevMeats => ({
    //             ...prevMeats,
    //             [props.idFav]:{ ...prevMeats[props.idFav],
    //                 [e.target.dataset.product]: {
    //                     quantity: meats[props.idFav][e.target.dataset.product].quantity - 1,
    //                 }
    //             }
    //           }))
    //     }
    //   }

    return (
        <div portalClassName="modalList">
            <button onClick={openModal}>Selecciona tipo de carne</button>
            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                portalClassName="modalList"
            >
                <button onClick={closeModal} >X</button>

                <div style={styles.title}>
                    <h1 style={styles.h1} >Sabores</h1>
                </div>
                <form onSubmit={handleSubmit}>
                    {flavors.map(e => {
                        return (
                            <div portalClassName="article-container" key={e.dish}>
                                <article>
                                    <div portalClassName="contents">
                                        <h4 className="h4">{e.dish}</h4>
                                        <p className="p1">{e.description}</p>
                                        <p className="p2">{props.meats[props.idFav][e.dish]}</p>
                                    </div>
                                    <div className="button button-left" onClick={(ev) => props.decreaseFl(ev, props.idFav)} data-product={e.dish}>
                                        <div className="circle" data-product={e.dish}>-</div>
                                    </div>
                                    <div className="button button-right" onClick={(ev) => props.increaseFl(ev, props.idFav)} data-product={e.dish}>
                                        <div className="circle" data-product={e.dish}>+</div>
                                    </div>
                                </article>
                            </div>
                        )
                    })}
                    <button className="ready" type="submit">Listo</button>
                </form>

            </Modal>
        </div>
    )
}

export default ModalList;