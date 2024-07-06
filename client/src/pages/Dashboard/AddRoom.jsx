import React, { useContext, useState } from "react";
import AddRoomForm from "../../components/Forms/AddRoomForm";
import { useLocation } from "react-router-dom";
import { imageUpload } from "../../api/imageUpload";
import { AuthContext } from "../../providers/AuthProvider";
import { addRoom } from "../../api/rooms";

const Addroom = () => {
  // user er data

  const { user } = useContext(AuthContext);

  //

  const [dates, setDates] = useState({
    startDate: new Date(),
    endDate: new Date(),
    key: "selection",
  });
  const [loading, setLoading] = useState(false);
  const [uploadButtonText, setUploadButtonText] = useState("Upload Image");
  // handelform submit
  const handleSubmit = (event) => {
    event.preventDefault();
    setLoading(true);
    const location = event.target.location.value;
    const title = event.target.title.value;
    const from = dates.startDate;
    const to = dates.endDate;
    const price = event.target.price.value;
    const total_guest = event.target.total_guest.value;
    const bedrooms = event.target.bedrooms.value;
    const bathrooms = event.target.bathrooms.value;
    const description = event.target.description.value;
    const category = event.target.category.value;
    const image = event.target.image.files[0];

    // TODO:
    imageUpload(image)
      .then((data) => {
        // console.log(data);
        // console.log(data.data.display_url);

        const roomData = {
          image: data.data.display_url,
          location,
          title,
          from,
          to,
          price,
          total_guest,
          bedrooms,
          description,
          bathrooms,
          category,
          host: {
            name: user?.displayName,
            image: user?.photoURL,
            email: user?.email,
          },
        };

        //!  post room data to server
        addRoom(roomData)
          .then((data) => {
            console.log(data);
          })
          .catch((err) => {
            console.log(err);
          });

        setLoading(false);
      })
      .catch((err) => {
        console.log(err.message);
        setLoading(false);
      });
    // console.log("ok");
  };

  // ?
  const handleImageChange = (image) => {
    setUploadButtonText(image.name);
  };

  //
  const handleDates = (ranges) => {
    // return console.log(ranges.selection);
    setDates(ranges.selection);
  };
  return (
    <AddRoomForm
      handleSubmit={handleSubmit}
      handleImageChange={handleImageChange}
      loading={loading}
      uploadButtonText={uploadButtonText}
      dates={dates}
      handleDates={handleDates}
    >
      {" "}
    </AddRoomForm>
  );
};

export default Addroom;
