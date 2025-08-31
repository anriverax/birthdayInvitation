export const Images = () => (
	<div className='grid grid-cols-3 justify-items-center items-center h-[50%]'>
		<img src='/conejo.png' alt='Mi logo' width='100' />
		<img src='/pollitos.jpeg' alt='Mi logo' width='200' />
		<video width='600' autoPlay loop muted playsInline className='sm:w-[400px] sm:h-[200px]'>
			<source src='/video.mp4' type='video/mp4' />
			Tu navegador no soporta video HTML5.
		</video>
	</div>
);
