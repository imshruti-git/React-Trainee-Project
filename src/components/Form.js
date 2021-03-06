import React, {useState} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { addEmployees } from '../redux/actions/employeeActions';


export const Form = () => {


  const dispatch = useDispatch();

  const [ isEmail, setIsEmail ] = useState(false);
  const [ isNumber, setIsNumber ] = useState(false);
  const [ adduser, setAdduser ] = useState({
    name: "",
    address: "",
    email: "",
    phone: "",
    gender: "",
    occupation: ""
  });

 console.log(adduser);
  const { name, address, email, phone, gender, occupation } = adduser;

  const handleinputchange = (e) =>{
    let { name, value } = e.target;
    setAdduser({...adduser, id:new Date().getTime().toString(), [name]: value });
  };

  // console.log(adduser)
  
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addEmployees(adduser));

    setAdduser({
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
      <input type="text" value={name} name="name" required minLength="2" maxLength="28" onChange={handleinputchange} />
    </label>
    <label>Address: <br/>
      <input type="text"  value={address} required minLength="2" maxLength="28" name="address" onChange={handleinputchange}/>
    </label>
    <label>Email:<br/>
      <input 
            type="email" 
            value={email} 
            name="email" 
            required 
            // onChange={handleinputchange}
            onChange={(e)=>{
                            // console.log(e.target.value);
                            const regEx = /[a-zA-Z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,8}(.[a-z{2,8}])?/g;
                            if (!regEx.test(e.target.value)) {
                              setIsEmail(true);
                              // console.log(isEmail);
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
            required 
            // pattern="^[0-9]{7,10}$" 
            // onChange={handleinputchange}
            onChange={(e)=>{
              // console.log(e.target.value);
              const regEx = /^(?:(?:\(?(?:00|\+)([1-4]\d\d|[1-9]\d+)\)?)[\-\.\ \\\/]?)?((?:\(?\d{1,}\)?[\-\.\ \\\/]?)+)(?:[\-\.\ \\\/]?(?:#|ext\.?|extension|x)[\-\.\ \\\/]?(\d+))?$/i;
              if (!regEx.test(e.target.value)) {
                setIsNumber(true);
                // console.log(isEmail);
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
     <select name="gender" value={gender} onChange={handleinputchange}>
        <option disabled value=''>select gender</option>
        <option value="Male">Male</option>
        <option value="Female">Female</option>
    </select> 
  </label>
    <label>Occupation:<br/>
      <input type="text" value={occupation} name="occupation" onChange={handleinputchange}/>
    </label>
    <button className='btn add-btn'> ADD</button>
  </form>
  )
}

