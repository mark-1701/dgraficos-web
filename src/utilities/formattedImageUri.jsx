const formattedImageUri = imageUri => {
  return `${import.meta.env.VITE_IMAGES_URL}/${imageUri}`;
};

export default formattedImageUri;
