function getPhotoByGender(gender) {
  const num = Math.floor(Math.random() * 100);
  return `https://randomuser.me/api/portraits/${gender}/${num}.jpg`;
}

const male = "men";
const female = "women"

const youtubers = [
  {
    id: 1,
    name: "Jhon Doe",
    profileImage: getPhotoByGender(male),
    live: true,
  },
  {
    id: 2,
    name: "Jane Doe Manuel Something",
    profileImage: getPhotoByGender(female),
    notificationBlue: true,
  },
  {
    id: 3,
    name: "Jhon Doe",
    profileImage: getPhotoByGender(male),
  },
  {
    id: 4,
    name: "Jhon Doe",
    profileImage: getPhotoByGender(male),
    notificationBlue: true,
  },
  {
    id: 5,
    name: "Jhon Doe",
    profileImage: getPhotoByGender(female),
  },
  {
    id: 6,
    name: "Jane Doe",
    profileImage: getPhotoByGender(female),
    notificationBlue: true,
  },
  {
    id: 7,
    name: "Jhon Doe",
    profileImage: getPhotoByGender(male),
  },
  {
    id: 8,
    name: "Jhane Doe",
    profileImage: getPhotoByGender(female),
    notificationBlue: true,
  },
  {
    id: 9,
    name: "Jhon Doe",
    profileImage: getPhotoByGender(male),
  },
];

export { youtubers , getPhotoByGender }