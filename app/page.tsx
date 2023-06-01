import Image from 'next/image'

export default function Home() {
	return (
		<main className="flex min-h-screen flex-col items-center justify-between p-5">
			<div className="z-10 w-full items-center justify-between font-mono text-sm lg:flex">
				<a className="pointer-events-none flex flex-col place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0" href='#'>
					<Image src="/icon.png" alt="logo" className="dark:invert" width={100} height={50} />
					<p className="text-cyan-600 bold">우리의 집</p>
				</a>
			</div>
		</main>
	)
}
