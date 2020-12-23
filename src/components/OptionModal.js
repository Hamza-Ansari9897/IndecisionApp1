import React from'react'
import Modal from 'react-modal'

const OptionModal=(props)=>(
    <Modal
     isOpen={!!props.selectedOption}
     onRequestClose={props.handleclearSelectedOption}
     contentLabel="Selected Option"
     closeTimeoutMS={200}
     className="modal"
    >
    <h3 className="modal__title">Selected options</h3>
    {props.selectedOption && <p className="modal__body">{props.selectedOption}</p>}
    <button className="button" onClick={props.handleclearSelectedOption}>Okay</button>
    </Modal>
);


export default OptionModal;