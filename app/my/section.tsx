import Image from 'next/image'

export default function Section() {
    return (
        <div className="">
            <div className="weekly-best">
                <a className="" href="/weekly">
                    <p className="">
                        <Image src="/best-room.png" alt="logo" className="inline-block" width={30} height={30} />
                        이번주 화제의 인테리어
                        <Image src="/best-room.png" alt="logo" className="inline-block" width={30} height={30} />
                    </p>
                </a>
            </div>
            <div className="new-room">
                <a className="" href="/post">
                    <p className="">
                        <Image src="/new.png" alt="logo" className="inline-block" width={30} height={30} />
                        새로 올라온 인테리어
                        <Image src="/new.png" alt="logo" className="inline-block" width={30} height={30} />
                    </p>
                </a>
            </div>
		</div>
    )
}