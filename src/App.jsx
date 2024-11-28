function App() {
	const links = ['GitHub', 'Frontend Mentor', 'LinkedIn', 'Twitter', 'Instagram']

	return (
		<div className='flex justify-center items-center h-screen'>
			<div className='basis-[340px] bg-gray-800 rounded-2xl p-6'>
				<img
					src='/assets/avatar-jessica.jpeg'
					alt='profile'
					className='size-24 rounded-full mx-auto mb-6'
				/>

				<div className='text-center'>
					<h1 className='font-bold text-2xl text-white mb-2'>
						Jessica Randall
					</h1>
					<p className='text-gray-400 text-neongreen text-sm font-bold mb-6'>
						London, United Kingdom
					</p>
					<p className='text-gray-400 text-sm mb-4'>
						"Front-end developer and avid reader."
					</p>

					<ul>

						{
							links.map((link, index) => (
								<li key={index} className='text-gray-400 text-sm font-bold mb-4 bg-gray-700 p-3 rounded-lg hover:bg-neongreen hover:text-gray-800 cursor-pointer'>
									<a href='#'>{link}</a>
								</li>
							))
						}
						
					</ul>
				</div>
			</div>
		</div>
	)
}
export default App
