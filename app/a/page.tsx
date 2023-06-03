import Image from 'next/image'

export default function Nav() {
	return (
        <div className="">
            <a className="">
                <Image src="/icon.png" alt="logo" className="" width={100} height={50} />
                <p className="">게시물</p>
            </a>
            <a className="">
                <Image src="/icon.png" alt="logo" className="" width={100} height={50} />
                <p className="">임시1</p>
            </a>
            <a className="">
                <Image src="/icon.png" alt="logo" className="" width={100} height={50} />
                <p className="">임시2</p>
            </a>
        </div>
    )
}