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
import Recent from "./pages/Recent";
import AddVideoModal from "./components/shared/AddVideoModal";
import Rodal from "rodal";
import { useState } from "react";

function App() {
	const [visible, setVisible] = useState(false);

	return (
		<>
			<Helmet>
				<title>Home - Clean Youtube</title>
				<meta
					name='description'
					content='Claan youtube project will help you to concerntrate on your own career or goal. You have may lead you to distract. Here will be no extra suggestion or distraction to stop you.'
				/>
			</Helmet>
			<Navbar setVisible={setVisible} />

			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/favorites' element={<Favorites />} />
				<Route path='/recent' element={<Recent />} />
			</Routes>

			<Rodal
				visible={visible}
				onClose={() => setVisible(false)}
				closeOnEsc={true}
				animation='door'
				customStyles={{ borderRadius: "15px", height: "fit-content" }}
				className='w-[600px] rounded-lg'>
				<AddVideoModal />
			</Rodal>
		</>
	);
}

export default App;
