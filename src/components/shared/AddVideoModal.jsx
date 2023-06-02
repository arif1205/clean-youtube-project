import { useEffect, useState } from "react";
import { useGetPlayListByIdQuery } from "../../store/features/api";
import { toast } from "react-toastify";

const AddVideoModal = () => {
	const [idOrLink, setIdOrLink] = useState("");
	const [ID, setID] = useState("");
	const { data, isSuccess, isLoading, isError } = useGetPlayListByIdQuery(
		{
			playlistID: ID,
		},
		{
			skip: !ID,
		}
	);

	const handleSubmit = (e) => {
		e.preventDefault();
		let playlistID;
		const youtube = "youtube.com/playlist?list=";
		const regex = new RegExp(youtube, "i");
		const isLink = regex.test(idOrLink);
		if (isLink) {
			const splittedLink = idOrLink.split("list=");
			if (splittedLink.length > 1) playlistID = splittedLink[1];
			else playlistID = "wrong";
		} else {
			playlistID = idOrLink;
		}

		setID(playlistID);
	};
	useEffect(() => {
		console.log(data);
		if (data && isSuccess && !isLoading)
			toast.success("Playlist Added", {
				toastId: "playlistAdded",
			});
		if (isError && !isLoading)
			toast.error("Something went wrong! Please Try again", {
				toastId: "playlistCan'tBeAdded",
			});
	}, [isError, isSuccess, data, isLoading]);

	return (
		<div className='w-[95%] mx-auto'>
			<h1 className='text-center mb-8'>
				Please Enter - <span className='font-[600]'>Playlist ID or, Link</span>
			</h1>
			<form onSubmit={handleSubmit}>
				<input
					type='text'
					placeholder='Please Enter Playlist ID or Link'
					className='w-full border-2 border-slate-400 rounded-[15px] px-4 py-2 mb-4 focus:outline-none focus:ring-2 focus:ring-green focus:border-transparent transition duration-300 ease-in-out'
					name='idOrLink'
					value={idOrLink}
					onChange={(e) => setIdOrLink(e.target.value)}
				/>
				<button
					type='submit'
					className='bg-green w-full rounded-[15px] text-white px-4 py-2 transition duration-300 ease-in-out hover:shadow-lg hover:shadow-green/40'>
					{" "}
					Add Playlist{" "}
				</button>
			</form>
		</div>
	);
};

export default AddVideoModal;
