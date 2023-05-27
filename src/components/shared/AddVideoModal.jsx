const AddVideoModal = () => {
	return (
		<div className='w-[95%] mx-auto'>
			<h1 className='text-center mb-8'>
				Please Enter - <span className='font-[600]'>Playlist ID or, Link</span>
			</h1>
			<form>
				<input
					type='text'
					placeholder='Please Enter Playlist ID or Link'
					className='w-full border-2 border-slate-400 rounded-[15px] px-4 py-2 mb-4 focus:outline-none focus:ring-2 focus:ring-green focus:border-transparent transition duration-300 ease-in-out'
					name='idOrLink'
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
