import Link from 'next/link';
import { useEffect } from 'react';
import { useRouter } from 'next/router';

const NotFound = () => {
    const router = useRouter();

    useEffect(() => {
        setTimeout(() =>{
            router.push('/');
        },2000);
    }, []);

    return ( 
        <div>
            <h1 className='not-found'>Oppss</h1>
            <p>Page not found</p>
            <Link href="/"><button>Go back</button></Link>
        </div>
    );
}
 
export default NotFound;