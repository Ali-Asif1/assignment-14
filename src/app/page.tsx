
import Link from "next/link";

const getData = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");

  if (!response.ok) {
    throw new Error("failed to fetch data");
  }
  return response.json();
};

type UsersType ={
  id:number;
  name:string;
  username:string;
  email:string;
  phone:number;
}

export default async function Home() {
  const users = await getData()

  return(
    <div>
      <h1 className="p-10 text-4xl font-semibold">Users Data</h1>
      {users.map((user:UsersType) => 
        <p className="px-10" key={user.id}><Link href={`${user.id}`} className="">{user.username}</Link></p>
      )}
    </div>
  )
}
