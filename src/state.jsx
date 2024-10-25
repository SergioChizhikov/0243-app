const user = {
  name: "Иван",
  lastname: "Иванов",
  id: "1",
  email: "ivan@mail.io",
  about: "Тут я рассказываю интересную историю",
  avatar:
    "https://img.freepik.com/free-psd/3d-illustration-bald-person-with-glasses_23-2149436184.jpg",
};

const users = {
  0: { name: "Валерия", lastname: "Смирнова" },
  1: { name: "Павел", lastname: "Николаев" },
  2: { name: "Владислав", lastname: "Тетерин" },
  3: { name: "Юлия", lastname: "Петрова" },
  4: { name: "Ксения", lastname: "Иванова" },
};

export function getUser() {
  return user;
}

export function getUsers() {
  return users;
}
