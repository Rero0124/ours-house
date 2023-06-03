import Image from 'next/image'

export default function Header() {
	return (
        <div className="">
            <a className="" href='#'>
                <Image src="/icon.png" alt="logo" className="" width={100} height={50} />
                <p className="">우리의 집</p>
            </a>
            <div className="">
                <form name="search">
                    <input type="text" className=""/>
                    <button type="button" className="">aa</button>
                </form>
            </div>
        </div>
    )
}