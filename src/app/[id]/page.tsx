import React from "react";
const getUser = async (id:number) => {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/users/${id}`
  );

  if (!response.ok) {
    throw new Error("failed to fetch data");
  }
  return response.json();
};

const UsersDetail =async ({ params:{id} }:any) => {
  const userData = await getUser(id)
  
  return (
    <div className="p-8 space-y-2">
      <h1 className="underline text-2xl font-semibold">User Info</h1>
      <p>id: {userData.id}</p>
      <p>Name: {userData.name}</p>
      <p>User Name:{userData.username}</p>
      <p>Phone: {userData.phone}</p>
      <p>Email {userData.email}</p>
    </div>
  )
};

export default UsersDetail