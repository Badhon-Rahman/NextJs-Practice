import Link from 'next/link';
import Head from 'next/head';
import Style from '../../styles/User.module.css';

export const getStaticProps = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await res.json();

    return {
        props: { users: data }
    }
}

const User = ({users}) => {
    return ( 
        <>
            <Head>
                <title>User Portal</title>
                <meta name='style' content='nextjs'></meta>
            </Head>
            <div>
                <h1>User Dashboard</h1>
                <br/>
                <h4>User List</h4>
                {users.map(user => (
                    <Link href={`/user/${user.id}`} key={user.id}>
                        <a className={Style.single}>{user.name}</a>
                    </Link>
                ))}
            </div>
        </>
        
    );
}
 
export default User;