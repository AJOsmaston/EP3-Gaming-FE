const LogOut = () => {

  const logOut = async () => {
    const apiUrl = "http://localhost:3000/logout";
    const res = await fetch(apiUrl, { method: "GET" })
    const json = await res.json();
    console.log(json);
  }

  return (
    <button onClick={logOut}>Log out</button>
  )
}

export default LogOut;