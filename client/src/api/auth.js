// save user to database
export const saveUser = (user) => {
  const currentUser = {
    email: user.email,
  };

  fetch(`${import.meta.env.VITE_API_URL}/users/${user?.email}`, {
    method: "PUT",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify(currentUser),
  })
    .then((res) => res.json())
    .then((data) => console.log(data));
};

//  become a host

export const becomeHost = (email) => {
  const currentUser = {
    role: "host",
  };

  return fetch(`${import.meta.env.VITE_API_URL}/users/${email}`, {
    method: "PUT",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify(currentUser),
  }).then((res) => res.json());
};

// ? get Role
export const getRole = async (email) => {
  const responce = await fetch(
    `${import.meta.env.VITE_API_URL}/users/${email}`,
    {
      method: "GET",
      headers: {
        "content-type": "application/json",
      },
    }
  );
  const user = await responce.json();
  return user.role;
};
