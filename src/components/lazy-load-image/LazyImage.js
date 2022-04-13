import { LazyLoadImage } from 'react-lazy-load-image-component';

function LazyImage({ image }) {
	return (
		<>
			<LazyLoadImage
				alt={image.alt}
				height={image.height}
				src={image.src} // use normal <img> attributes as props
				width={image.width}
				placeholderSrc="Loading..."
				delayTime
			/>
			<span>{image.caption}</span>
		</>
	);
}

export default LazyImage;
