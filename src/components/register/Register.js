import { useState } from "react";
import "./Register.css";
import { useForm } from "react-hook-form";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Alert } from '@mui/material';


function Register() {
  let [error, setError] = useState("");
  let [selectedFile,setSelectedFile]=useState(null)
  const navigate = useNavigate();
  let {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  let addNewUser = (newUser) => {
    let fd=new FormData();

    fd.append("user",JSON.stringify(newUser))
   
    fd.append("photo",selectedFile)

    axios
      .post("http://localhost:4000/user-api/register-user", fd)
      .then((response) => {
        
        if (response.status === 201) {
        
          navigate('/login')
        }
        if(response.status!==201){
          setError(response.data.message)
        }
      })
      .catch((err) => {
        if (err.response) {
          setError(err.message);
        }
        else if (err.request) {
          setError(err.message);
        }
        else {
          setError(err.message);
        }
      });
  };
 const onFileSelect=(e)=>{
  setSelectedFile(e.target.files[0])
 }
  return (
    <div className="add-user">
      <p className="register-text text-center">Register</p>
      {error.length !== 0 && (
        <p className="display-3 text-danger text-center">{error}</p>
      )}
      <div className="row">
        <div className="col-11 col-sm-8 col-md-6 mx-auto">
          <form onSubmit={handleSubmit(addNewUser)}>
            <div className="mb-3">
              <label htmlFor="name">Username</label>
              <input
                type="text"
                id="username"
                className="form-control"
                placeholder="e.g. John"
                {...register("username", { required: true })}
              />
              {errors.username?.type === "required" && (
                <p className="text-danger fw-bold fs-5">
                  <Alert severity="error">* Username is required</Alert>
                
                </p>
              )}
            </div>
            <div className="mb-3">
              <label htmlFor="name">Type of User</label>
              <select
                type="text"
                id="typeofuser"
                className="form-select"
                placeholder="e.g. John"
                {...register("typeofuser", { required: true })}>
                <option value="Farmer">Farmer</option>
                <option value="Food Hub">Food Hub</option>
                <option value="Customer">Customer
                </option>
                </select>
             
              {errors.typeofuser?.type === "required" && (
                <p className="text-danger fw-bold fs-5">
                  <Alert severity="error">* Type of User is required</Alert>
                
                </p>
              )}
            </div>
            <div className="mb-3">
              <label htmlFor="name">Phone number</label>
              <input
                type="text"
                id="phonenumber"
                className="form-control"
              
                {...register("phonenumber", { required: true,maxLength:"10",minLength:"10" })}
              />
              {errors.phonenumber?.type === "required" && (
                <p className="text-danger fw-bold fs-5">
                  <Alert severity="error">* phone number is required</Alert>
                
                </p>
              )}
               {errors.phonenumber?.type === "minLength" && (
                <p className="text-danger fw-bold fs-5">
                  <Alert severity="error">* minLength is 10</Alert>
                
                </p>
              )}
          
            {errors.phonenumber?.type === "maxLength" && (
                <p className="text-danger fw-bold fs-5">
                  <Alert severity="error">* maxLength is 10</Alert>
                
                </p>
              )}
            </div>
            
            {/* password */}
            <div className="mb-3">
              <label htmlFor="name">Password</label>
              <input
                type="password"
                placeholder="***"
                id="password"
                className="form-control"
                {...register("password", { required: true })}
              />
              {/* validation errors for name */}
              {errors.password?.type === "required" && (
                <p className="text-danger fw-bold fs-5">
                  <Alert severity="error">* Password is required</Alert>
                
                </p>
              )}
            </div>
            {/* email */}
            <div className="mb-3">
              <label htmlFor="name">Email</label>
              <input
                type="email"
                placeholder="e.g. example@mail.com"
                id="email"
                className="form-control"
                {...register("email", { required: true })}
              />
              {/* validation errors for email */}
              {errors.email?.type === "required" && (
                <p className="text-danger fw-bold fs-5"><Alert severity="error">*Email is Required</Alert></p>
              )}
            </div>
            {/* date of birth */}
            <div className="mb-3">
              <label htmlFor="dob">Date of birth</label>
              <input
                type="date"
                id="dob"
                className="form-control"
                {...register("dob", { required: true })}
              />
              {/* validation errors for name */}
              {errors.dob?.type === "required" && (
                <p className="text-danger fw-bold fs-5">
                  <Alert severity="error">*Date of birth is required</Alert>
                  
                </p>
              )}
            </div>
            
            <div className="mb-3">
              <label htmlFor="name">Address</label>
              <textarea
                type="text"
                id="Address"
                className="form-control"
                placeholder="e.g.Kukatpally,Hyderabad,500072"
                {...register("Address", { required: true })}
              />
              {errors.Address?.type === "required" && (
                <p className="text-danger fw-bold fs-5">
                  <Alert severity="error">* Address is required</Alert>
                
                </p>
              )}
            </div>


            {/* image url */}
            <div className="mb-3">
              <label htmlFor="name">Select profile pic</label>
              <input
                type="file"
                id="image"
                className="form-control"
                {...register("image", { required: true })}
                onInput={onFileSelect}
              />
              {/* validation errors for image */}
              {errors.image?.type === "required" && (
                <p className="text-danger fw-bold fs-5">
                  <Alert severity="error">*Image URL is required</Alert>
                </p>
              )}
            </div>


            {/* submit button */}
            <button type="submit" className="btn btn-primary mb-5">
              Register
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Register;