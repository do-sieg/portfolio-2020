import Modal from 'react-modal';
import { useState } from 'react';
import { U_EMAIL, DEV_EMAIL } from '../config/constants';

Modal.setAppElement('#__next');

// Deactivated by custom classes, here for reference
const modalStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
    },
    overlay: {
        zIndex: 1000,
    }
};


const FeedbackModal = ({ children }) => {
    const [showModal, setShowModal] = useState(false);

    function openModal() {
        setShowModal(true);
    }

    function closeModal() {
        setShowModal(false);
    }

    return (
        <>
            <div onClick={openModal}>{children}</div>

            <Modal
                isOpen={showModal}
                //         onAfterOpen={afterOpenModal}
                onRequestClose={closeModal}
                style={modalStyles}
            // contentLabel="Example Modal"
            >
                <div className="feedback-modal-content long">

                    <h2>Oups... Vous êtes déjà sur ce site</h2>
                    <p>Cependant, pourquoi ne pas utiliser cette opportunité pour me donner votre avis ?</p>
                    <p>Vous pouvez me joindre par mail à l'adresse suivante :</p>

                    <a href={U_EMAIL}>{DEV_EMAIL}</a>

                    <button className="btn btn-blue" onClick={closeModal}>Retour</button>
                </div>
                <div className="feedback-modal-content short">

                    <h2>Vous êtes déjà sur ce site</h2>
                    <p>Pourquoi ne pas utiliser cette opportunité pour me donner votre avis ?</p>
                    <p>Vous pouvez me joindre par mail :</p>

                    <a href={U_EMAIL}>{DEV_EMAIL}</a>

                    <button className="btn btn-blue" onClick={closeModal}>Retour</button>
                </div>
            </Modal>
        </>
    );
}

export default FeedbackModal;