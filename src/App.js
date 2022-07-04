import { useState } from 'react';
import './App.css';
import { useSelector, useDispatch } from 'react-redux/es/exports';
import { Form } from './components/Form';
import { deleteEmployees, editEmployees, toggleModal, toggleModalEdit } from './redux/actions/employeeActions';
import { EditForm } from './components/EditForm';


function App() {
  const dispatch = useDispatch();

  const employees = useSelector((state) => state.allEmployees.employees);
  const openmodal = useSelector((state) => state.allEmployees.modalOpen);
  const openeditmodal = useSelector((state) => state.allEmployees.modalEditOpen);

  const handlemodalopen = () =>{
    dispatch(toggleModal(true));
  }

  const handleclose = () => {
    dispatch(toggleModal(false));
  }

  const handleeditclose = () => {
    dispatch(toggleModalEdit(false))
  }

  const handlclick = (item) => {
    dispatch(editEmployees(item.id));
   dispatch(toggleModalEdit(true));
 }

 
  
  //  const [openmodal, setOpenmodal] = useState();

  // const handlemodalopen=()=>{
  //   openmodal === false ? setOpenmodal(true) : setOpenmodal(false);
  // }

  const handledelete =(item)=>{
    dispatch(deleteEmployees(item.id))
  }
  
  return (
    <div className="App">
         <div className='header-container'>
          <span className='main-title'>List of employees </span>
          <button className='btn' onClick={handlemodalopen}>Add Employee</button>
      </div>
       {openmodal && 
              <div className='modal-container'>
                <div className='modal'>
                  <span className='close' onClick={handleclose}>X</span>
                    <Form />
                </div>
              </div>
      } 
      
      <table className='main-table'>
        <tbody>
          <tr>
            <th>SN.</th>
            <th>Name:</th>
            <th>Address:</th>
            <th>Email:</th>
            <th>Phone</th>
            <th>Gender</th>
            <th>occupation</th>
            <th></th>
          </tr>
           {employees.map((item, index) =>  (
              <tr key={item.id}>
                  <td>{index + 1}</td>
                  <td>{item.name}</td>
                  <td>{item.address}</td>
                  <td>{item.email}</td>
                  <td>{item.phone}</td>
                  <td>{item.gender}</td>
                  <td>{item.occupation}</td>
                  <td><span onClick={()=>handlclick(item)}>EDIT</span><br/>
                      <span onClick={()=>handledelete(item)}>DELETE</span></td>
                
              </tr>
            ))} 
                  {openeditmodal && 
              <div className='modal-container'>
                <div className='modal'>
                  <span className='close' onClick={handleeditclose}>X</span>
                    <EditForm/>
                </div>
              </div>
      }  
        </tbody>
      </table>

    </div>
  );
}

export default App;
