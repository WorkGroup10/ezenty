import React, { Fragment, useState, useEffect } from "react";
import { useAlert } from "react-alert";
import { useDispatch, useSelector } from "react-redux";
import MetaData from "../layout/Metadata";
import { register, clearErrors } from "../../actions/userActions";
import { useNavigate } from "react-router-dom";

export const Register = () => {
  const [user, setUser] = useState({
    nombre: "",
    email: "",
    password: "",
  });
  const navigate = useNavigate();
  const { nombre, email, password } = user;
  const [avatar, setAvatar] = useState("");
  const [avatarPreview, setAvatarPreview] = useState(
    "https://cdn-icons-png.flaticon.com/512/5464/5464139.png"
  );
  const alert = useAlert();
  const dispatch = useDispatch();
  const { isAuthenticated, error, loading } = useSelector(
    (state) => state.auth
  );

  useEffect(() => {
    if (isAuthenticated) {
      navigate("/usuario");
    }
    if (error) {
      dispatch(clearErrors);
    }
  }, [dispatch, isAuthenticated, error, alert]);

  const submitHandler = (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.set("nombre", nombre);
    formData.set("email", email);
    formData.set("password", password);
    formData.set("avatar", avatar);

    dispatch(register(formData));
  };

  const onChange = (e) => {
    if (e.target.name === "avatar") {
      const reader = new FileReader();

      reader.onload = () => {
        if (reader.readyState === 2) {
          setAvatarPreview(reader.result);
          setAvatar(reader.result);
        }
      };
      reader.readAsDataURL(e.target.files[0]);
    } else {
      setUser({ ...user, [e.target.name]: e.target.value });
    }
  };

  return (
    <Fragment>
      {loading ? (
        <i class="fa fa-refresh fa-spin fa-3x fa-fw"></i>
      ) : (
        <Fragment>
          <MetaData title={"Crear Usuario"} />
          <div className="row wrapper">
            <div className="col-10 col-lg-8">
              <form
                className="shadow-lg"
                onSubmit={submitHandler}
                encType="multipart/form-data"
              >
                <h1 className="mb-3">Empieza aqui</h1>

                <div className="form-group">
                  <label htmlFor="name_field" style={{color:'White'}}>Tu Nombre</label>
                  <input
                    type="name"
                    id="name_field"
                    className="form-control"
                    name="nombre"
                    value={nombre}
                    onChange={onChange}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="email_field" style={{color:'White'}}>Tu Correo</label>
                  <input
                    type="email"
                    id="email_field"
                    className="form-control"
                    name="email"
                    value={email}
                    onChange={onChange}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="password_field" style={{color:'White'}}   >Tu contraseña</label>
                  <input
                    type="password"
                    id="password_field"
                    className="form-control"
                    name="password"
                    value={password}
                    onChange={onChange}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="avatar_upload" style={{color:'White'}}>Avatar</label>
                  <div className="d-flex align-items-center">
                    <div>
                      <figure className="avatar mr-3 item-rtl">
                        <img
                          src={avatarPreview}
                          className="rounded-circle"
                          alt="Vistar Previa del Avatar"
                        ></img>
                      </figure>
                    </div>
                    <div className="custom-file">
                      <input
                        type="file"
                        name="avatar"
                        className="custom-file-input"
                        id="customFile"
                        accept="images/*"
                        onChange={onChange}
                        style={{color:'White'}}
                      />
                      <label className="custom-file-label" htmlFor="customFile">
                        Escoger Avatar
                      </label>
                    </div>
                  </div>
                </div>

                <button
                  id="register_button"
                  type="submit"
                  className="btn btn-block py-3"
                  style={{backgroundColor:'#771f6a', border:'#771f6a'}}
                >
                  Registrar
                </button>
              </form>
              <br/>
            </div>
          </div>
        </Fragment>
      )}
    </Fragment>
  );
};
