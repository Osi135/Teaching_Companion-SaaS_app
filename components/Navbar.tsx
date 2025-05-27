import Link from "next/link"
import Image from "next/image";
import NavItems from "./NavItems";

const Navbar = () => {
  return (
    <nav className="navbar">
        <Link href={"/"}>
            <div className="flex items-center gap-2.5 cursor-pointer">
                <Image src={"/images/logo.svg"} alt="logo" width={46} height={44}></Image>
            </div>
        </Link>
        <div className="flex items-center gap-8">
            <NavItems></NavItems>
            <Link href={"/sign-in"} className="text-lg font-semibold text-gray-800 hover:text-blue-600">
                Sign In
            </Link>
        </div>
    </nav>
  )
}

export default Navbar