import React, {useState} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { updateEmployees } from '../redux/actions/employeeActions';


export const EditForm = () => {
  const updateEmployee = useSelector((state) => state.allEmployees.update);
  console.log(updateEmployee)

  
  const dispatch = useDispatch();

  const [ isEmail, setIsEmail ] = useState(false);
  const [ isNumber, setIsNumber ] = useState(false);
  const [ edituser, setEdituser ] = useState({
        name: `${updateEmployee.name}`,
        address: `${updateEmployee.address}`,
        email: `${updateEmployee.email}`,
        phone: `${updateEmployee.phone}`,
        gender: `${updateEmployee.gender}`,
        occupation: `${updateEmployee.occupation}`
      });

  console.log(edituser);
  const { name, address, email, phone, gender, occupation } = edituser;

  const handleinputchange = (e) =>{
    let { name, value } = e.target;
    setEdituser({...edituser, id:updateEmployee.id, [name]: value });
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
     dispatch(updateEmployees(edituser));
    console.log(edituser);
    setEdituser({
      name: "",
      address: "",
      email: "",
      phone: "",
      gender: "Male",
      occupation: "" 
    });
  }

  return (
    <form className='modal-form' onSubmit={handleSubmit}>
    <label>Name:<br/>
      <input type="text" 
             value={name} 
             name="name" 
             required 
             minLength="2" 
             maxLength="28" 
             onChange={handleinputchange} 
            />
    </label>
    <label>Address: <br/>
      <input type="text"  
             value={address} 
             required 
             minLength="2" 
             maxLength="28" 
             name="address" 
             onChange={handleinputchange}
            />
    </label>
    <label>Email:<br/>
      <input 
            type="email" 
            value={email} 
            name="email" 
            // required 
            onChange={(e)=>{
                            // console.log(e.target.value);
                            const regEx = /[a-zA-Z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,8}(.[a-z{2,8}])?/g;
                            if (!regEx.test(e.target.value)) {
                              setIsEmail(true);
                            }
                            else {
                              setIsEmail(false);
                          }
                            handleinputchange(e)
                          }}
            /><br/>
            {isEmail &&
              <span className='error_message'>Invalid Email</span>
            }
    </label>
    <label>Phone:<br/>
      <input 
            type="number"  
            value={phone} 
            name="phone" 
            // required 
            // // pattern="^[0-9]{7,10}$" 
            onChange={(e)=>{
              // console.log(e.target.value);
              const regEx = /^(?:(?:\(?(?:00|\+)([1-4]\d\d|[1-9]\d+)\)?)[\-\.\ \\\/]?)?((?:\(?\d{1,}\)?[\-\.\ \\\/]?)+)(?:[\-\.\ \\\/]?(?:#|ext\.?|extension|x)[\-\.\ \\\/]?(\d+))?$/i;
              if (!regEx.test(e.target.value)) {
                setIsNumber(true);
              }
              else {
                setIsNumber(false);
            }
              handleinputchange(e)
            }}
            /><br/>
              {isNumber &&
              <span className='sankbar'>Invalid Pnone Number</span>
            }
    </label>
    <label>Gender:<br/>
     <select name="gender" 
             value={gender} 
             onChange={handleinputchange}
             >
        <option disabled value=''>select gender</option>
        <option value="Male">Male</option>
        <option value="Female">Female</option>
    </select> 
  </label>
    <label>Occupation:<br/>
      <input type="text" 
             value={occupation} 
             name="occupation" 
             onChange={handleinputchange}
            />
    </label>
    <button className='btn add-btn'> EDIT</button>
  </form>
  )
}

