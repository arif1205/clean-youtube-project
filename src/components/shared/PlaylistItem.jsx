import PropTypes from "prop-types";
import { useRef, useState } from "react";
import { useRipple } from "react-use-ripple";
import { MdOutlineFavoriteBorder, MdOutlineFavorite } from "react-icons/md";
import { FaPlay } from "react-icons/fa";
import { RxCross1 } from "react-icons/rx";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/opacity.css";

const PlaylistItem = ({ title, imgurl }) => {
	const [isFav, setIsFav] = useState(false);
	const favBtnRef = useRef(null);
	useRipple(favBtnRef, { rippleColor: "#f3126050" });

	return (
		<div className='basis-[25%] px-4'>
			<div className='h-full cursor-pointer bg-white rounded-xl shadow-lg overflow-hidden group flex flex-col'>
				<div className='img-box relative h-[170px]'>
					<LazyLoadImage
						src={imgurl}
						alt={title}
						effect='opacity'
						className='object-cover w-full h-[170px]'
					/>
					{/* <img src={imgurl} alt={title} className='object-cover' /> */}
					<div className='absolute left-0 top-0 w-full h-full flex justify-center items-center text-white text-2xl bg-black/60 opacity-0 group-hover:opacity-100 duration-300 transition-opacity'>
						<FaPlay />
					</div>
					<div className='absolute right-0 top-0 bg-white px-3 py-2 rounded-bl hidden group-hover:block '>
						<RxCross1 />
					</div>
				</div>
				<div className='content-box px-4 py-4 font-medium font-poppins flex justify-between items-center'>
					<h1 className=''>{title}</h1>
					<button
						className={`fav-icon px-[5px] py-[5px] rounded-full text-[22px] bg-purple/30 text-purple relative overflow-hidden`}
						onClick={() => setIsFav((prev) => !prev)}
						ref={favBtnRef}>
						{!isFav ? <MdOutlineFavoriteBorder /> : <MdOutlineFavorite />}
					</button>
				</div>
			</div>
		</div>
	);
};

PlaylistItem.propTypes = {
	title: PropTypes.string.isRequired,
	imgurl: PropTypes.node.isRequired,
};

export default PlaylistItem;
