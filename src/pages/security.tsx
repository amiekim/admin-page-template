import React from "react";

const SecurityPage = () => {
  return (
    <main className="d-flex jc-center h-full-screen">
      {[1, 2, 3, 4, 5].map((b: number, bIndex: number) => (
        <div className="square-box__container">
          <input type="text" />
        </div>
      ))}
    </main>
  );
};

export default SecurityPage;
