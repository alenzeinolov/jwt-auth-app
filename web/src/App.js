import axios from "axios";
import "./App.css";

const useIsAuth = async () => {
  const res = await axios.get("http://localhost:5000/me/", {
    withCredentials: true,
  });
  console.log(res);
};

function App() {
  useIsAuth();

  const login = async () => {
    const response = await axios.post("http://localhost:5000/login/", null, {
      withCredentials: true,
    });
    console.log(response);
  };

  return (
    <div className="App">
      <button onClick={login}>LOGIN</button>
    </div>
  );
}

export default App;
