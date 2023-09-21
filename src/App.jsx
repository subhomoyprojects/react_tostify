import { BrowserRouter, Route, Routes } from "react-router-dom";
import Register from "./Register";
import Login from "./Login";
import Blog from "./Blog";
import FormTest from "./FormTest";
import FormDataPass from "./FormDataPass";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/form" element={<FormTest />} />
          <Route path="/formData" element={<FormDataPass />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
