import { ActionTypes } from "../constants/action-types"
import data from '../../data'

const initialState = {
    employees: data,
    modalOpen: false,
};

export const employeeReducer = (state = initialState, action) => {
        switch (action.type) {
            case ActionTypes.TOGGLE_MODAL:
                return {
                    moduleOpen: true
                }
            case ActionTypes.GET_EMPLOYEES:
                return state;

            case ActionTypes.ADD_EMPLOYEES:

               const {employee } = action.payload
               const { name, address, email, phone, gender, occupation} = employee
                return {
                    ...state,
                    employees:[
                        ...state.employees,
                        {
                            name, address, email, phone, gender, occupation
                        }
                    ]
                }


            case ActionTypes.DELETE_EMPLOYEES:
                const employees = state.employees.filter((elem) => elem.id !== action.id)
                return {
                    ...state,
                    employees
                }
            default:
                return state;
        }
};