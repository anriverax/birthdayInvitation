import { motion } from 'framer-motion';

export const Cloud = () => (
	<>
		<motion.div
			animate={{ x: [0, 30, 0] }}
			transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY, ease: 'easeInOut' }}
			className='cloud w-[100px] h-[50px] sm:w-[180px] sm:h-[60px] bg-[#bff] absolute right-10 top-20 rounded-full after:w-12 sm:after:w-16 after:h-12 sm:after:h-[72px] after:-top-6 after:left-10 sm:after:left-5 after:rounded-full before:w-12 sm:before:w-24 before:h-12 sm:before:h-[72px] before:-top-4 sm:before:-top-8 before:right-11 sm:before:right-6 before:rounded-full'
		/>
		<motion.div
			className='absolute top-30 right-5 text-6xl'
			animate={{ y: [0, -15, 0], rotate: [0, 5, 0] }}
			transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY, ease: 'easeInOut' }}
		>
			🎈
		</motion.div>
		<motion.div
			animate={{ x: [0, 30, 0] }}
			transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY, ease: 'easeInOut' }}
			className='w-[100px] h-[50px] sm:w-[180px] sm:h-[60px] bg-[#bff] absolute right-10 top-50 sm:top-70 rounded-full after:w-12 sm:after:w-16 after:h-12 sm:after:h-[72px] after:-top-6 after:left-10 sm:after:left-5 after:rounded-full before:w-12 sm:before:w-24 before:h-12 sm:before:h-[72px] before:-top-4 sm:before:-top-8 before:right-11 cloud sm:before:right-6 before:rounded-full'
		/>
	</>
);
