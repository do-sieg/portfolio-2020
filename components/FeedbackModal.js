import Modal from 'react-modal';
import { useState } from 'react';
import { useLang } from '../utils/Lang';

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


const FeedbackModal = ({ children, pageLang }) => {
    const [showModal, setShowModal] = useState(false);
    const lang = useLang(pageLang);

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
                    {lang('FEEDBACK_MODAL_TEXT_LONG')}
                    <button className="btn btn-blue" onClick={closeModal}>{lang('ACTION_BACK')}</button>
                </div>
                <div className="feedback-modal-content short">
                    {lang('FEEDBACK_MODAL_TEXT_SHORT')}
                    <button className="btn btn-blue" onClick={closeModal}>{lang('ACTION_BACK')}</button>
                </div>
            </Modal>
        </>
    );
}

export default FeedbackModal;