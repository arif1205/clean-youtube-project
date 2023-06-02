import PlaylistItem from "../components/shared/PlaylistItem";
import thumnail from "../assets/images/react-redux.jpg";
import thumnail2 from "../assets/images/fullstackarmy.jpg";
import { useSelector } from "react-redux";
import { useGetPlayListByIdQuery } from "../store/features/api";
import { useEffect } from "react";

const Home = () => {
	const state = useSelector((state) => state);
	console.log(state);

	const { data, isLoading, isSuccess, isError } = useGetPlayListByIdQuery({
		playlistID: "PLgH5QX0i9K3q_7q9vZ5-EWpoL2bMuFJFV",
	});

	console.log(data);

	return (
		<div className='py-28 w-[85%] mx-auto min-h-screen'>
			<div className='flex flex-row items-stretch flex-wrap gap-y-8'>
				<PlaylistItem imgurl={thumnail} title='React Redux Tutorial...' />{" "}
				<PlaylistItem
					imgurl={thumnail2}
					title='React Redux Tutorial for full stack army...'
				/>
				<PlaylistItem imgurl={thumnail} title='React Redux Tutorial...' />
				<PlaylistItem imgurl={thumnail} title='React Redux Tutorial...' />
				<PlaylistItem imgurl={thumnail2} title='React Redux Tutorial...' />
			</div>
		</div>
	);
};

export default Home;
