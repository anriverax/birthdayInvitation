import { motion } from 'framer-motion';
import { Cloud } from './components/cloud';
import { Happy } from './components/happy';
import { Name } from './components/name';
import { Images } from './components/images';
import { Invitation } from './components/invitation';

function App() {
	return (
		<div className='flex justify-center items-center relative h-dvh sm:bg-amber-500 bg-violet-500'>
			<Cloud />
			<div className='bg-white relative rounded-t-full w-full py-20 mt-40 h-[calc(100dvh-10rem)]'>
				<img src='/sol.png' alt='Mi logo' width='200' className='absolute -top-35 -left-1' />
				<Happy />
				<motion.div
					className='absolute top-15 -left-5 text-6xl'
					animate={{ y: [0, -15, 0], rotate: [0, 5, 0] }}
					transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY, ease: 'easeInOut' }}
				>
					🎈
				</motion.div>
				<Name />
				<p className='text-center mt-10 mb-15 text-cyan-700 font-bold text-xl sm:text-4xl'>
					Reyes Mónchez
				</p>
				<Invitation />
				<Images />
				<div className='text-center absolute bottom-0 mb-5 left-0 right-0'>
					<p className='text-cyan-700 sm:text-xl'>¡TE ESPERAMOS!</p>
					<p className='font-bold  sm:text-xl'>MUESTRA DE CARIÑO: REGALO DE SOBRE</p>
				</div>

				<motion.div
					className='absolute bottom-10 left-5 text-3xl'
					animate={{ y: [0, -15, 0], rotate: [0, 5, 0] }}
					transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY, ease: 'easeInOut' }}
				>
					🎈
				</motion.div>
				<motion.div
					className='absolute bottom-20 right-5 text-3xl'
					animate={{ y: [0, -12, 0], rotate: [0, -5, 0] }}
					transition={{
						duration: 2.8,
						repeat: Number.POSITIVE_INFINITY,
						ease: 'easeInOut',
						delay: 0.5,
					}}
				>
					🎈
				</motion.div>
			</div>
		</div>
	);
}

export default App;
