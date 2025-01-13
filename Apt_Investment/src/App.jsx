import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/home";
import ViewDetails from "./Pages/ViewDetails";




function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/investments/details/:id" element={<ViewDetails />} /> 
      </Routes>
    </Router>
  );
}

export default App;
