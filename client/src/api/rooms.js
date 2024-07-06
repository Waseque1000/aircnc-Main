// TODO: Add Rooms

export const addRoom = async (roomData) => {
  const responce = await fetch(`${import.meta.env.VITE_API_URL}/rooms`, {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify(roomData),
  });
  const data = await responce.json();
  return data;
};

// get all rooms

export const getAllRooms = async () => {
  const responce = await fetch(`${import.meta.env.VITE_API_URL}/rooms`);
  const data = await responce.json();
  return data;
};

// get single room

export const getRoom = async (id) => {
  const responce = await fetch(`${import.meta.env.VITE_API_URL}/room/${id}`);
  const data = await responce.json();
  return data;
};
