import React from "react";
import { useForm, Controller } from "react-hook-form";
import useAuthService from "../../service/authService";

import "./style.scss";

export const LoginForm = () => {
  const {
    control,
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();

  const { login } = useAuthService();

  const onSubmit = (data) => {
    login(data)
  };

  return (
    <div className="login-container">
      <div className="login-form">
        <h2>Login</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div>
            <label>Email</label>
            <input
              id="email"
              type="text"
              placeholder="Email..."
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /\S+@\S+\.\S+/,
                  message: "Invalid email address",
                },
              })}
            />
            {errors?.email && <p className="error">{errors?.email?.message}</p>}
          </div>
          <div>
            <label>Password</label>
            <input
              id="password"
              type={"password"}
              placeholder="Password..."
              {...register("password", {
                required: "Password is required",
                minLength: {
                  value: 8,
                  message: "Password must be at least 8 characters",
                },
              })}
            />
          </div>
          <div>
            <button type="submit">Login</button>
          </div>
        </form>
      </div>
    </div>
  );
};
