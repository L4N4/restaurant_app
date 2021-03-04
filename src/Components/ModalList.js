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

    return (
        <div>
            <button className="openModal" onClick={openModal}>Selecciona sabor</button>
            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                className="modalList"
            >
                <button className="closeModal" onClick={closeModal} >X</button>

                <div style={styles.title}>
                    <h1 style={styles.h1} >Sabores</h1>
                </div>
                <form>
                    <div style={styles.articles}>
                    {flavors.map(e => {
                        return (
                            <div style={styles.articleContainer} key={e.dish}>
                                <article style={styles.article}>
                                    <div style={styles.contents}>
                                        <h4 style={styles.h4}>{e.dish}</h4>
                                        <p style={styles.p1}>{e.description}</p>
                                        <p style={styles.p2}>{props.meats[props.idFav][e.dish]}</p>
                                    </div>
                                    <div style={styles.buttonLeft} onClick={(ev) => props.decreaseFl(ev, props.idFav)} data-product={e.dish}>
                                        <div style={styles.circle} data-product={e.dish}>-</div>
                                    </div>
                                    <div style={styles.buttonRight} onClick={(ev) => props.increaseFl(ev, props.idFav)} data-product={e.dish}>
                                        <div style={styles.circle} data-product={e.dish}>+</div>
                                    </div>
                                </article>
                            </div>
                        )
                    })}
                    </div>
                    <button onClick={closeModal} className="ready">Listo</button>
                </form>

            </Modal>
        </div>
    )
}

export default ModalList;