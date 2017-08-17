export const ADD_ALERT                  = 'ADD_ALERT';
export const CLOSE_ALERT                = 'CLOSE_ALERT';

export function addAlert(alertData={}) {
    return {
        type: ADD_ALERT,
        payload: {data:alertData}
    }
}

export function closeAlert(id=null) {
    return {
        type: CLOSE_ALERT,
        payload: {id}
    }
}