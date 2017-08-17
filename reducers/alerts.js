import { ADD_ALERT, CLOSE_ALERT} from '../actions/index';

const INITIAL_STATE = {alerts : []};
let alertCount = 0;

export default function (state=INITIAL_STATE,action) {
    switch (action.type){
        case ADD_ALERT : {
            let {alerts} = state;
            const {data: alert = {}} = action.payload;
            alert.id = alertCount;
            alert.showModal = true;
            alertCount += 1;
            alerts.push(alert);
            return {alerts};
        }
        case CLOSE_ALERT : {
            let {alerts} = state;
            const {id=null} = action.payload;
            if(id!==null) {
                alerts = alerts.filter(d => d.id !== id);
            }
            return {alerts};
        }
        default :
            return state;
    }
}