import React from "react";

const LoginPage = () => {
  return (
    <main>
      <section style={{ backgroundColor: "Gray" }}>
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
      </section>
    </main>
  );
};

export default LoginPage;
