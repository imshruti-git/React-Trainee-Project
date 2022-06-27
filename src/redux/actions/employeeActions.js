import { ActionTypes } from "../constants/action-types"

export const toggleModal = () => {
    return {
        type: ActionTypes.TOGGLE_MODAL
    }
}

export const getEmployees = (employees) => {
    return {
        type: ActionTypes.GET_EMPLOYEES,
        payload: employees,
    };
};

export const addEmployees = (employee) => {
    return {
        type: ActionTypes.ADD_EMPLOYEES,
        payload: {
            employee
        },
    };
};

// export const editEmployees = () => {
//     return {
//         type: ActionTypes.EDIT_EMPLOYEES,
//     };
// };

export const deleteEmployees = (id) => {
    return {
        type: ActionTypes.DELETE_EMPLOYEES,
        id

    };
};