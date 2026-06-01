async function getUsers() {
  const response = await fetch("http://localhost:3000/users");

  const data = await response.json();
  console.log(response.json());
}

getUsers();

let user2 = {
  name: "davit",
  age: "20",
  id: "54",
};

async function postUsers() {
  try {
    const response = await fetch("http://localhost:3000/users", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(user2),
    });

    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.log(error);
  }
}

//settimeout
setTimeout(() => {
  //   postUsers();
}, 3000);
