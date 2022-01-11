import React, { useState } from "react";
import "/node_modules/bootstrap/dist/css/bootstrap.min.css";
import loginimg from "../assets/login-orange.png";
import swal from "sweetalert";

function Main(props) {
  const [user, setUser] = useState("");
  const [pass, setPass] = useState("");
  const handleValidate = (e) => {
    e.preventDefault();
    if (user === "reactjs12@gmail.com" && pass === "123456")
      swal("Successful Login", "Welcome ReactJS", "success");
    else swal("Wrong Credientials", "Please try again", "error");
  };
  return (
    <main>
      <div className="heading">
        <h1 className="text-center">Authentication Portal</h1>
      </div>
      <div className="row d-flex flex-row bd-highlight mb-3">
        <div className="col-md-6">
          <img
            className="float-right p-5"
            width="300"
            alt="login"
            src={loginimg}
          />
        </div>
        <div className="col-md-6 my-auto bg-dark p-5 rounded">
          <div>
            <form onSubmit={handleValidate}>
              <div className="mb-3">
                <label className="form-label">Email address</label>
                <input
                  value={user}
                  type="email"
                  className="form-control"
                  placeholder="Enter Email"
                  onChange={(e) => setUser(e.target.value)}
                />
              </div>
              <div className="mb-3">
                <label className="form-label">Password</label>
                <input
                  value={pass}
                  type="password"
                  className="form-control"
                  placeholder="Enter Password"
                  onChange={(e) => setPass(e.target.value)}
                />
              </div>
              <button type="submit" className="btn btn-primary">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Main;
