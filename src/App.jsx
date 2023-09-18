import { BrowserRouter, Route, Routes } from "react-router-dom";
import Register from "./Register";
import Login from "./Login";
import Blog from "./Blog";
import FormTest from "./FormTest";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/form" element={<FormTest />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
