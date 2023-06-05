import Image from 'next/image'

export default function Section() {
    return (
        <div className="">
            <div className="weekly-best-room">
                <a className="">
                    <Image src="/best-room.png" alt="logo" className="" width={100} height={50} />
                    <p className="">게시물</p>
                </a>
            </div>
            <div className="weekly-best-item">
                <a className="">
                    <Image src="/best-room.png" alt="logo" className="" width={100} height={50} />
                    <p className="">게시물</p>
                </a>
            </div>
            <div className="new-room">
                <a className="">
                    <Image src="/best-room.png" alt="logo" className="" width={100} height={50} />
                    <p className="">게시물</p>
                </a>
            </div>
		</div>
    )
}