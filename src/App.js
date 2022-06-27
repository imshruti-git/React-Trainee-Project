import { useState } from 'react';
import './App.css';
import { useSelector, useDispatch } from 'react-redux/es/exports';
import { Form } from './components/Form';
import { deleteEmployees, toggleModal } from './redux/actions/employeeActions';

function App() {
  const dispatch = useDispatch();

  const employees = useSelector((state) => state.allEmployees.employees);
  const openmodal = useSelector((state) => state)
  // console.log(employees);


  //  const [openmodal, setOpenmodal] = useState();

  // const handlemodalopen=()=>{
  //   openmodal === false ? setOpenmodal(true) : setOpenmodal(false);
  // }

  const handlemodalopen = () =>{
    dispatch(toggleModal());
  }

  const handledelete =(item)=>{
    dispatch(deleteEmployees(item.id))
  }
  return (
    <div className="App">
         <div className='header-container'>
          <span className='main-title'>List of employees </span>
          <button className='btn' onClick={handlemodalopen}>Add Employee</button>
      </div>
       {openmodal === true  && 
            
              <div className='modal-container'>
                <div className='modal'>
                  <span className='close' onClick={handlemodalopen}>X</span>
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
                  <td><span>EDIT</span><br/>
                      <span onClick={()=>handledelete(item)}>DELETE</span></td>
              </tr>
            ))} 
        </tbody>
      </table>

    </div>
  );
}

export default App;
