import Lottie from 'lottie-react';
import React, { useContext } from 'react';
import RegisterLottie from '../assets/Register.json'
import { AuthContext } from './AuthProvider';

const Register = () => {

  const { createUser } = useContext(AuthContext);
  const handleRegister = e => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    alert(email, password);
    createUser(email, password)
      .then(res => { 
        // console.log(res.user) 
      })
      .catch(err => { 
        // console.log(err.message) 
      })
  }

  return (
    <div>
      <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content flex-col ">
          <div className="text-center ">
            <h1 className="text-5xl font-bold">Register now!</h1>
            <div>
              <Lottie animationData={RegisterLottie}></Lottie>
            </div>
          </div>

          <div className="card bg-base-100 w-full  shrink-0 shadow-2xl">
            <form onSubmit={handleRegister} className="card-body">

              {/* Name */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  name='name'
                  type="name" placeholder="Name" className="input input-bordered" required />
              </div>

              {/* Email */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  name='email'
                  type="email" placeholder="Email" className="input input-bordered" required />
              </div>

              {/* Password */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  name='password'
                  type="password" placeholder="Password" className="input input-bordered" required />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                </label>
              </div>

              {/* checkbox */}
              <div className="form-control mt-4">
                <p className='font-semibold'>Why are you here ?</p>
                <div className='flex justify-between'>

                  <label className="label flex gap-3 cursor-pointer">
                    <span className="label-text">Hr/Organization</span>
                    <input type="checkbox" className="checkbox" name='hr'
                    // checked={isChecked}
                    />
                  </label>

                  <label className="label flex gap-3 cursor-pointer">
                    <span className="label-text"> Candidate </span>
                    <input
                    name='candidate'
                    type="checkbox" className="checkbox" />
                  </label>
                </div>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Register</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;