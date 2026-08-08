import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import heroImg from "./assets/hero.png";
import "./App.css";
import Home from "./pages/Home";
import Blogs from "./pages/Blogs";
import Bookmarks from "./pages/Bookmarks";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="">
      <Home></Home>
      <Blogs></Blogs>
      <Bookmarks></Bookmarks>
    </div>
  );
}

export default App;
