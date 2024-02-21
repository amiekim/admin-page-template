import React from "react";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const navigate = useNavigate();
  return (
    <main>
      <section className="bg-light-gray">
        <form action="">
          <div>
            <label htmlFor="id">id</label>
            <input type="text" id="id" />
          </div>
          <div>
            <label htmlFor="password">password</label>
            <input type="password" id="password" />
          </div>
        </form>
        <button onClick={() => navigate("security")}>로그인</button>
      </section>
    </main>
  );
};

export default LoginPage;
