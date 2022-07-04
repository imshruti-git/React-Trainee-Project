import { ActionTypes } from "../constants/action-types"
import data from '../../data'

const initialState = {
    employees: data,
    modalOpen: false,
    modalEditOpen: false,
};

export const employeeReducer = (state = initialState, action) => {
        switch (action.type) {
            case ActionTypes.TOGGLE_MODAL:
                return {
                    ...state,
                    modalOpen: action.payload === true ? true : false,
                }
            case ActionTypes.MODAL_EDIT:
                return {
                    ...state,
                    modalEditOpen: action.payload === true ? true : false,
                }
            // case ActionTypes.GET_EMPLOYEES:
            //     return state;

            case ActionTypes.ADD_EMPLOYEES:

               const {employee } = action.payload
               const { id, name, address, email, phone, gender, occupation} = employee
                return {
                    ...state,
                    modalOpen: false,
                    employees:[
                        ...state.employees,
                        {
                            id, name, address, email, phone, gender, occupation
                        }
                    ]
                }


            case ActionTypes.DELETE_EMPLOYEES:
                const employees = state.employees.filter((elem) => elem.id !== action.id)
                return {
                    ...state,
                    employees
                }

            case ActionTypes.EDIT_EMPLOYEES:
                const update = state.employees.find((elem) => elem.id == action.id)
                return{
                    ...state,
                     update,       
                }
            case ActionTypes.UPDATE_EMPLOYEES:
                 const newvalue = state.employees.map((elem) => elem.id == action.payload.id ? action.payload : elem)
                
                 return{
                    ...state,
                    employees: newvalue ,
                    modalEditOpen:false
                }
                
            default:
                return state;
        }
};