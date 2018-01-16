import { records } from "./records";

import { getRandomData } from "./demoData";

export const getRecordsData = () => {
    return (dispatch) => {
        dispatch(records.request());

        setTimeout(() => {
            dispatch(records.success(getRandomData()))
        }, 100)
    }
}


