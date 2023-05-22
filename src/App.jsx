/**
 * @info Root of the application
 * @author Md. Ariful Islam
 */

import { Helmet } from "react-helmet";
// import Navbar from "./components/layout/Navbar";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Favorites from "./pages/Favorites";
import Navbar from "./components/layout/Navbar";

function App() {
	return (
		<>
			<Helmet>
				<title>Home - Clean Youtube</title>
				<meta
					name='description'
					content='Claan youtube project will help you to concerntrate on your own career or goal. You have may lead you to distract. Here will be no extra suggestion or distraction to stop you.'
				/>
			</Helmet>
			<Navbar />
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/favorites' element={<Favorites />} />
			</Routes>
		</>
	);
}

export default App;
