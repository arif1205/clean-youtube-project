import PlaylistItem from "../components/shared/PlaylistItem";
import thumnail from "../assets/images/react-redux.jpg";

const Favorites = () => {
	return (
		<div className='py-28 w-[85%] mx-auto min-h-screen'>
			<div className='flex flex-row items-stretch flex-wrap gap-y-8'>
				<PlaylistItem imgurl={thumnail} title='React Redux Tutorial...' />
				<PlaylistItem imgurl={thumnail} title='React Redux Tutorial...' />
				<PlaylistItem imgurl={thumnail} title='React Redux Tutorial...' />
				<PlaylistItem imgurl={thumnail} title='React Redux Tutorial...' />
				<PlaylistItem imgurl={thumnail} title='React Redux Tutorial...' />
			</div>
		</div>
	);
};

export default Favorites;
