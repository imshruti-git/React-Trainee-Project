import { ActionTypes } from "../constants/action-types"

export const toggleModal = (value) => {
    return {
        type: ActionTypes.TOGGLE_MODAL,
        payload: value
    }
}
export const toggleModalEdit = (value) => {
    return {
        type: ActionTypes.MODAL_EDIT,
        payload: value
    }
}
export const closeModal = () => {
    return {
        type: ActionTypes.CLOSE_MODAL,
    }
}

// export const getEmployees = (employees) => {
//     return {
//         type: ActionTypes.GET_EMPLOYEES,
//         payload: employees,
//     };
// };

export const addEmployees = (employee) => {
    return {
        type: ActionTypes.ADD_EMPLOYEES,
        payload: {
            employee
        },
    };
};

export const editEmployees = (id) => {
    return {
        type: ActionTypes.EDIT_EMPLOYEES,
        id
    };
};
export const updateEmployees = (updated) => {
    return {
        type: ActionTypes.UPDATE_EMPLOYEES,
        payload: updated,
        };
};

export const deleteEmployees = (id) => {
    return {
        type: ActionTypes.DELETE_EMPLOYEES,
        id

    };
};