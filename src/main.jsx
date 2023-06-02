import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./assets/styles/index.css";
import "react-toastify/dist/ReactToastify.css";
import "rodal/lib/rodal.css";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store/index.js";
import { ToastContainer } from "react-toastify";

ReactDOM.createRoot(document.getElementById("root")).render(
	<>
		<Provider store={store}>
			<BrowserRouter>
				<App />
				<ToastContainer
					autoClose={3000}
					newestOnTop
					theme='light'
					pauseOnFocusLoss={false}
				/>
			</BrowserRouter>
		</Provider>
	</>
);
