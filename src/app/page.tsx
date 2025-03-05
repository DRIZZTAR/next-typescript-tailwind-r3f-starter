import Scene from '@/components/Scene';

export default function Home() {
	return (
		<main className='relative h-screen w-full overflow-hidden bg-black'>
			{/* 3D Scene as background */}
			<div className='absolute inset-0 z-0'>
				<Scene />
			</div>

			{/* Overlay UI with glass morphism distributed in corners */}
			<div className='relative z-10 h-full w-full pointer-events-none'>
				{/* Mobile layout - positioned at top and bottom edges */}
				<div className='md:hidden w-full h-full pointer-events-none'>
					{/* Bottom controls - features & links */}
					<div className='absolute bottom-4 left-4 right-4 pointer-events-auto'>
						<div className='backdrop-blur-md bg-white/5 p-3 rounded border border-white/10 shadow-xl'>

							{/* Bottom row with GitHub link and credits */}
							<div className='flex justify-between items-center'>
								<a
									href='https://github.com/DRIZZTAR/next-typescript-tailwind-r3f-starter'
									target='_blank'
									rel='noopener noreferrer'
									className='px-4 py-1.5 text-xs rounded bg-white/10 hover:bg-white/20 text-white font-medium transition'
								>
									GitHub
								</a>
								<p className='text-[10px] text-white/50 text-right'>
									Next.js 15, R3F, Drei,
									<br />
									TailwindCSS v4 & TS
								</p>
							</div>
						</div>
					</div>
				</div>

				{/* Desktop layout - corner positioning */}
				<div className='hidden md:block'>
					{/* Bottom left - Links */}
					<div className='absolute bottom-8 left-8 pointer-events-auto'>
						<div className='backdrop-blur-md bg-white/5 p-4 rounded border border-white/10 shadow-xl'>
							<div className='flex flex-wrap gap-3'>
								<a
									href='https://github.com/DRIZZTAR/next-typescript-tailwind-r3f-starter'
									target='_blank'
									rel='noopener noreferrer'
									className='px-5 py-2 text-sm rounded bg-white/10 hover:bg-white/20 text-white font-medium transition'
								>
									GitHub
								</a>
							</div>
						</div>
					</div>

					{/* Bottom right - Credits */}
					<div className='absolute bottom-8 right-8 pointer-events-auto'>
						<div className='backdrop-blur-md bg-white/5 p-4 rounded border border-white/10 shadow-xl text-right'>
							<p className='text-xs text-white/50'>
								Built with Next.js 15, React Three Fiber,
								<br />
								Drei, TailwindCSS v4 & TypeScript
							</p>
						</div>
					</div>
				</div>
			</div>
		</main>
	);
}
