// bookings rooms

export const addBookingData = async (bookingData) => {
  const responce = await fetch(`${import.meta.env.VITE_API_URL}/bookings`, {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify(bookingData),
  });
  const data = await responce.json();
  return data;
};

// update  status

export const updateStatus = async (id, status) => {
  const responce = await fetch(
    `${import.meta.env.VITE_API_URL}/rooms/status/${id}`,
    {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ status }),
    }
  );
  const data = await responce.json();
  return data;
};

// ! get all bookings  for a user  by email
export const getBookings = async (email) => {
  const responce = await fetch(
    `${import.meta.env.VITE_API_URL}/bookings?email=${email}`,
    {
      method: "GET",
      headers: {
        "content-type": "application/json",
      },
    }
  );
  const bookings = await responce.json();
  return bookings;
};
