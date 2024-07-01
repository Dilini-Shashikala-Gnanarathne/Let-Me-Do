import React from 'react'

const Login = () => {
  return (
  <section className="section-container">
  <div className="max-width-container">
    <div className="grid-container">
      <div className="image-box">
        <figure className="image-figure">
          {/* <img src={signupImg} alt="Signup" className="signup-image" /> */}
        </figure>
      </div>
      <div className="form-container">
        <h3 className="form-heading">
          Create an <span className="highlighted-text">account</span>
        </h3>
        <form>
        {/* <form onSubmit={submitHandler}> */}
          <div className="input-container">
            <input
              type="text"
              placeholder="Enter Full Name"
              name="name"
            //   value={}
            //   onChange={}
              className="input-field"
              required
            />
          </div>
          <div className="input-container">
            <input
              type="email"
              placeholder="Enter Your Email"
              name="email"
            //   value={formData.email}
            //   onChange={handleInputChange}
              className="input-field"
              required
            />
          </div>
          <div className="input-container">
            <input
              type="password"
              placeholder="Enter Your Password"
              name="password"
            //   value={formData.password}
            //   onChange={handleInputChange}
              className="input-field"
              required
            />
          </div>
          <div className="input-container">
            <label className="label-text">
              Are you a:
              <select
                name="role"
                // value={formData.role}
                // onChange={handleInputChange}
                className="select-field"
              >
                <option value="patient">Patient</option>
                <option value="doctor">Doctor</option>
              </select>
            </label>
            <label className="label-text">
              Gender:
              <select
                name="gender"
                // value={formData.gender}
                // onChange={handleInputChange}
                className="select-field"
              >
                <option value="">Select</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
              </select>
            </label>
          </div>
          <div className="submit-button-container">
            <button>
            Sign Up            
            </button>
          </div>
          <p className="login-text">
            Already have an account?
            {/* <Link to="/login" className="login-link"> */}
              {/* Login
            </Link> */}
          </p>
        </form>
      </div>
    </div>
  </div>
</section>

  )
}

export default Login
