/**
 * Created by sundeepnarang on 3/28/17.
 */


import React, { Component } from 'react';
import {Modal}              from 'react-bootstrap';

export default class AlertModal extends Component {
    render(){


        const {
            showModal,
            closeModal,
            title ="Alert",
            text= "Alert!!",
            onClose= () => console.log("Alert Closed!"),
            type="warning",
            html,
            okBtnText="Ok"

        } = this.props;



        
        return (
            <Modal  bsClass={`bootstrap-dialog type-${type} modal`} show={showModal} onExit={()=>onClose()}>
                <Modal.Header>
                    <div className="bootstrap-dialog-header">
                        <div className="bootstrap-dialog-title">
                            <Modal.Title>{title}</Modal.Title>
                        </div>
                    </div>
                </Modal.Header>
                <Modal.Body>
                    {
                        renderIfElse(html)
                        (html, <h3>{text}</h3>)
                    }

                </Modal.Body>
                <Modal.Footer>
                    <button className="btn btn-default" onClick={closeModal}>{okBtnText}</button>
                </Modal.Footer>
            </Modal>
        )

    }

}