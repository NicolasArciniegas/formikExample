import React from "react";
import { useFormik } from "formik";
import "./index.css";
// TODO: import useFormik from formik library

function App() {
  // TODO: add a const called formik assigned to useFormik()
  const formik = useFormik({
    initialValues: { email: "", password: "" },
    onSubmit: (values) => {
      console.log("form", values);
      if (formik.errors) {
        alert("Login Succesful");
      } else;
    },
    validate: (values) => {
      const errors = {};
      const passwordRegex = /(?=.*[0-9])/;
      // Checkando email
      if (!values.email) errors.email = "Required";
      else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email))
        errors.email = "Invalid email address";
      // Checkango contrasena
      if (!values.password) errors.password = "Required";
      else if (values.password.length < 8)
        errors.password = "Password too short";
      else if (!passwordRegex.test(values.password))
        errors.password = "Invalid password. Must contain at least a number";
      return errors;
    },
  });
  return (
    <div>
      <form onSubmit={formik.handleSubmit}>
        <div className="contenedor">
          <div>Email: </div>{" "}
          <input
            id="emailField"
            name="email"
            type="text"
            onChange={formik.handleChange}
            value={formik.values.email}
          />
        </div>
        <div className="errores" id="emailError">
          {formik.errors.email}
        </div>
        <div className="contenedor">
          <div>Password: </div>{" "}
          <input
            id="pswField"
            name="password"
            type="text"
            onChange={formik.handleChange}
            value={formik.values.password}
          />
        </div>
        <div className="errores" id="pswError">
          {formik.errors.password}
        </div>
        <button id="submitBtn">Enviar</button>
      </form>
    </div>
  );
}

export default App;
