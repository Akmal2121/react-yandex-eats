import React from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loginReducer } from "../../store/reducer";

const LoginPage = ({ setEnter }) => {
  const [form, setForm] = useState({ username: "", password: "" });
  const dispatch = useDispatch();
  const { isAuth } = useSelector((state) => state);
  function formLogin(e) {
    e.preventDefault();
    localStorage.setItem("username", form.username);
    dispatch(loginReducer(!isAuth));
    if (form.username === "") {
      alert("Введите имя!");
    } else {
      setEnter("Выйти");
    }
  }
  return (
    <div className="loginPage">
      <div className="login-content">
        <form
          className="form"
          onSubmit={(e) => {
            formLogin(e);
          }}
        >
          <input
            type="text"
            placeholder="username..."
            onChange={(e) => {
              setForm({ ...form, username: e.target.value });
            }}
            value={form.username}
          />
          <input
            type="password"
            placeholder="password..."
            onChange={(e) => {
              setForm({ ...form, password: e.target.value });
            }}
            value={form.password}
          />
          <button className="btn-login">Войти</button>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
