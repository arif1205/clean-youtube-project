import PlaylistItem from "../components/shared/PlaylistItem";
import thumnail from "../assets/images/react-redux.jpg";
import thumnail2 from "../assets/images/fullstackarmy.jpg";

const Home = () => {
	return (
		<div className='py-28 w-[85%] mx-auto min-h-screen'>
			<div className='flex flex-row items-stretch flex-wrap gap-y-8'>
				<PlaylistItem imgurl={thumnail} title='React Redux Tutorial...' />
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
