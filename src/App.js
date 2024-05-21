import "./App.css";
import Body from "./Body";
import DeleteRequest from "./DeleteRequest";
import Footer from "./Footer";
import { Provider } from "react-redux";
import store from "../src/Redux/Store";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import DeleteAccount from "./DeleteAccount";
import Terms from "./Terms";
import Privacy from "./Privacy";
function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Router>
          <Footer />
          <Routes>
            <Route path="/delete-account" element={<DeleteRequest />} />
            <Route path="/verify-deletion/:token" element={<DeleteAccount />} />
            <Route path="/" element={<Body />} />
            <Route path="/terms" element={<Terms />} />
            <Route path="/privacy-policy" element={<Privacy />} />
          </Routes>
        </Router>
      </div>
    </Provider>
  );
}

export default App;
  