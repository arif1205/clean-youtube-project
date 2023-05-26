import { Link } from "react-router-dom";
import logo from "../../assets/images/youtube-logo.99c262f92d33e5faa23d.png";

const Navbar = () => {
	return (
		<nav className=' bg-white shadow-lg py-1 fixed top-0 w-full z-50'>
			<div className='flex justify-between items-center w-[85%] mx-auto'>
				{/* left side  */}
				<div className=''>
					<Link to='/'>
						<img src={logo} alt='Youtube Logo' className='w-[110px]' />
					</Link>
				</div>
				<div>
					<div className='flex'>
						<Link to='/recent'>
							<button
								type='button'
								className='uppercase font-[600] text-sm text-gray-600 hover:bg-purple/20 hover:text-purple px-8 py-2 rounded-lg transition duration-300 ease-in-out font-poppins'>
								Recent
							</button>
						</Link>
						<Link to='/favorites'>
							<button
								type='button'
								className='uppercase font-[600] text-sm text-purple hover:bg-purple/20 hover:text-purple px-8 py-2 rounded-lg transition duration-300 ease-in-out mr-4'>
								Favorite
							</button>
						</Link>
						<button
							type='button'
							className='font-[400] text-sm text-white bg-green px-4 py-2 rounded-lg transition duration-300 ease-in-out hover:shadow-lg hover:shadow-green/40'>
							Add playlist
						</button>
					</div>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
