import "./App.css";
import Header from "./Components/Header/header";
import Footer from "./Components/Footer/footer";

function App() {
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
}

export default App;
