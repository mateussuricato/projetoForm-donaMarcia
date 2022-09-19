import "./App.css";
import FullPage from "./components/FullPage";
import { ToastContainer, toast } from 'react-toastify';

function App() {
  return (
    <div className="App">
      <FullPage />
      <ToastContainer/>
    </div>
  );
}

export default App;
