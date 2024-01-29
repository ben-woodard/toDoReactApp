import React from "react";
import Footer from "../Footer/footer";
import Header from "../Header/header";

const ToDoApp = () => {
  const firstName = "Ben";

  return (
    <div>
      <Header />
      <div>
        <h1>Hello World</h1>
        <h3>My name is {firstName}</h3>
      </div>
      <Footer />
    </div>
  );
};

export default ToDoApp;
