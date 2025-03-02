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
					{/* Top - Title */}
					<div className='absolute top-4 left-4 right-4 pointer-events-auto'>
						<div className='backdrop-blur-md bg-white/5 p-3 rounded-2xl border border-white/10 shadow-xl'>
							<h1 className='text-xl font-thin bg-clip-text text-transparent bg-gradient-to-r from-white to-blue-100 text-center'>
								Next.js + R3F + Tailwind v4
							</h1>
						</div>
					</div>

					{/* Bottom controls - features & links */}
					<div className='absolute bottom-4 left-4 right-4 pointer-events-auto'>
						<div className='backdrop-blur-md bg-white/5 p-3 rounded-2xl border border-white/10 shadow-xl'>
							{/* Features stacked vertically in 2 columns */}
							<div className='grid grid-cols-2 gap-2 mb-2'>
								<div className='p-2 bg-white/10 rounded-lg flex items-center'>
									<span className='w-1.5 h-1.5 mr-2 bg-brand rounded-full'></span>
									<span className='text-xs text-white/80'>
										Responsive
									</span>
								</div>
								<div className='p-2 bg-white/10 rounded-lg flex items-center'>
									<span className='w-1.5 h-1.5 mr-2 bg-brand rounded-full'></span>
									<span className='text-xs text-white/80'>
										3D Performance
									</span>
								</div>
								<div className='p-2 bg-white/10 rounded-lg flex items-center'>
									<span className='w-1.5 h-1.5 mr-2 bg-brand rounded-full'></span>
									<span className='text-xs text-white/80'>
										Tailwind v4
									</span>
								</div>
								<div className='p-2 bg-white/10 rounded-lg flex items-center'>
									<span className='w-1.5 h-1.5 mr-2 bg-brand rounded-full'></span>
									<span className='text-xs text-white/80'>
										TypeScript
									</span>
								</div>
							</div>

							{/* Bottom row with GitHub link and credits */}
							<div className='flex justify-between items-center'>
								<a
									href='https://github.com/DRIZZTAR/next-typescript-tailwind-r3f-starter'
									target='_blank'
									rel='noopener noreferrer'
									className='px-4 py-1.5 text-xs rounded-full bg-white/10 hover:bg-white/20 text-white font-medium transition'
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
					{/* Top left - Title */}
					<div className='absolute top-8 left-8 max-w-md pointer-events-auto'>
						<div className='backdrop-blur-md bg-white/5 p-6 rounded-2xl border border-white/10 '>
							<h1 className='text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-blue-100'>
								Next.js + R3F + Tailwind v4
							</h1>
							<p className='mt-3 text-lg text-white/80'>
								A modern starter template for creating immersive
								3D experiences
							</p>
						</div>
					</div>

					{/* Top right - Features */}
					<div className='absolute top-8 right-8 w-64 pointer-events-auto'>
						<div className='backdrop-blur-md bg-white/5 p-4 rounded-2xl border border-white/10 shadow-xl'>
							<h3 className='text-lg font-medium text-white'>
								Features
							</h3>
							<ul className='mt-2 space-y-2 text-sm'>
								<li className='flex items-center text-white/80'>
									<span className='w-2 h-2 mr-2 bg-brand rounded-full'></span>
									Responsive Design
								</li>
								<li className='flex items-center text-white/80'>
									<span className='w-2 h-2 mr-2 bg-brand rounded-full'></span>
									3D Performance
								</li>
								<li className='flex items-center text-white/80'>
									<span className='w-2 h-2 mr-2 bg-brand rounded-full'></span>
									TailwindCSS v4
								</li>
								<li className='flex items-center text-white/80'>
									<span className='w-2 h-2 mr-2 bg-brand rounded-full'></span>
									TypeScript
								</li>
							</ul>
						</div>
					</div>

					{/* Bottom left - Links */}
					<div className='absolute bottom-8 left-8 pointer-events-auto'>
						<div className='backdrop-blur-md bg-white/5 p-4 rounded-2xl border border-white/10 shadow-xl'>
							<div className='flex flex-wrap gap-3'>
								<a
									href='https://github.com/DRIZZTAR/next-typescript-tailwind-r3f-starter'
									target='_blank'
									rel='noopener noreferrer'
									className='px-5 py-2 text-sm rounded-full bg-white/10 hover:bg-white/20 text-white font-medium transition'
								>
									GitHub
								</a>
							</div>
						</div>
					</div>

					{/* Bottom right - Credits */}
					<div className='absolute bottom-8 right-8 pointer-events-auto'>
						<div className='backdrop-blur-md bg-white/5 p-4 rounded-2xl border border-white/10 shadow-xl text-right'>
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
