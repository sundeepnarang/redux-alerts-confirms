import React, { Component } from 'react';
import { connect }          from 'react-redux';

import AlertModal from "./alert_modal";

import {closeAlert} from '../actions/index';

class AlertModals extends Component {

    closeModal(id){
        this.props.closeAlert(id);
    }

    render(){
        const {alertsData :{ alerts}} = this.props;
        return (
            <div>
                {alerts.map(alert=>{
                    return <AlertModal key={alert.id} {...alert} closeModal={()=>{this.closeModal(alert.id)}} />
                })}
            </div>
        )
    }


}


function mapStateToProps({alertsData}){
    return {alertsData}
}

export default connect(mapStateToProps,{closeAlert})(AlertModals);