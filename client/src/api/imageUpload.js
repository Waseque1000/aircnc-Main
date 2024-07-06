// upload imgase imgbb
export const imageUpload = async (image) => {
  const formData = new FormData();
  formData.append("image", image);
  const url = `https://api.imgbb.com/1/upload?key=${
    import.meta.env.VITE_IMGBB_KEY
  }`;
  const responce = await fetch(url, {
    method: "POST",
    body: formData,
  });
  const data = await responce.json();
  return data;
};
