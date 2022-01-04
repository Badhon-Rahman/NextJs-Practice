import Link from 'next/link';

export const getStaticPaths = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await res.json();

    const paths = data.map(user => {
        return{
            params: {id: user.id.toString()}
        }
    });

    return {
        paths,
        fallback: false
    }
}

export const getStaticProps = async (context) => {
    const id = context.params.id;
    const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
    const data = await res.json();

    return {
        props: {user: data}
    }
}

const Profile = ({user}) => {
    return (  
        <>
            <div>
                <h1>User Profile</h1>
            </div>
            <div>
                <div key={user.id}>
                    <h4>{user.name}</h4>
                    <span>{user.email}</span>
                    <h4>Address:</h4>
                    <span>{user.address.street} {user.address.suite}, {user.address.city}- {user.address.zipcode}</span>
                    <div><br/></div>
                </div>
            </div>
            <Link href="/user"><button>Back to Users</button></Link>
        </>
    );
}
 
export default Profile;
