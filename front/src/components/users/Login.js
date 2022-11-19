import React, { Fragment, useEffect, useState } from "react";
import MetaData from "../layout/Metadata";
import { Link, useNavigate } from "react-router-dom";
import { login, clearErrors } from "../../actions/userActions";
import { useDispatch, useSelector } from "react-redux";

export const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const { isAuthenticated, error, loading } = useSelector(
    (state) => state.auth
  );

  useEffect(() => {
    if (isAuthenticated) {
      navigate("/");
    }
    if (error) {
      dispatch(clearErrors);
    }
  }, [dispatch, isAuthenticated, error]);

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(login(email, password));
  };

  return (
    <Fragment>
      {loading ? (
        <i class="fa fa-refresh fa-spin fa-3x fa-fw"></i>
      ) : (
        <Fragment>
          <MetaData title={"Inicie Sesión"} />
          <div className="row wrapper">
            <div className="col-10 col-lg-10">
              <form className="shadow-lg" onSubmit={submitHandler}>
                <h1 className="mb-2">Inicio de Sesión</h1>
                {/*Campo para email*/}
                <div className="form-group">
                  <label htmlFor="email_field"><h2>Email</h2></label>
                  <input
                    type="email"
                    id="email_field"
                    className="form-control"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  ></input>
                </div>
                {/*Campo para contraseña*/}
                <div className="form-group">
                  <label htmlFor="password_field"><h2>Contraseña</h2></label>
                  <input
                    type="password"
                    id="password_field"
                    className="form-control"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  ></input>
                </div>
                <Link to="/forgotPassword" className="float-right mb-4">
                  <h3>Olvidó su contraseña?</h3>
                </Link>
                {/*Boton iniciar sesiòn*/}
                <button
                  id="login_button"
                  type="submit"
                  className="btn btn-block py-3"
                  style={{backgroundColor:'#771f6a', border:'#771f6a'}}
                >
                  Ingresar
                </button>
                <Link to="/log-up" className="float-right mt-3">
                  <h3>Crear una cuenta nueva</h3>
                </Link>
              </form>
            </div>
          </div>
          <br/>
        </Fragment>
      )}
    </Fragment>
  );
};
