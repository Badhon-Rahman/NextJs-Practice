import Link from 'next/link';
import Image from 'next/image';

const Navbar = () => {
    return ( 
        <nav>
            <div className="logo">
                <Image src="/logo.jpg" height={50} width={100}></Image>
                <Link href="/"><a>Home</a></Link>
                <Link href="/about"><a>About</a></Link>
                <Link href="/user"><a>User Portal</a></Link>
            </div>
        </nav> 
    );
}
 
export default Navbar;