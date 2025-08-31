export const Invitation = () => (
	<div className='grid grid-cols-3 justify-items-center text-center sm:gap-5'>
		<div className='px-1 border-r-[2px] border-dashed sm:space-y-3 xl:border-0'>
			<h1 className='text-amber-400 font-bold text-xl sm:text-4xl'>Lugar:</h1>
			<p className='text-cyan-600 font-bold sm:text-xl'>Alcandía Municipal de Nueva Exparta</p>
		</div>
		<div className='px-1 border-r-[2px] border-dashed sm:space-y-3 xl:border-0'>
			<h1 className='text-amber-400 font-bold text-xl sm:text-4xl'>Día:</h1>
			<p className='text-cyan-600 font-bold sm:text-xl'>Sábado 20 de septiembre</p>
		</div>
		<div className='sm:space-y-3'>
			<h1 className='text-amber-400 font-bold text-xl sm:text-4xl'>Hora:</h1>
			<p className='text-cyan-600 font-bold sm:text-xl'>3:00 p.m.</p>
		</div>
	</div>
);
