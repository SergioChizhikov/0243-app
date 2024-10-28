const user = {
  name: "Иван",
  lastname: "Иванов",
  id: "1",
  email: "ivan@mail.io",
  about: "Тут я рассказываю интересную историю",
  avatar:
    "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?fm=jpg&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZmlsZSUyMHBpY3xlbnwwfHwwfHx8MA%3D%3D&w=300&q=80",
};

const users = {
  0: {
    name: "Валерия",
    lastname: "Смирнова",
    id: 4,
    email: "smirnova82@mail.ru",
    avatar:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D&w=300&q=80",
    about: "Тут я рассказываю интересную историю",
  },
  1: {
    name: "Павел",
    lastname: "Николаев",
    id: 77,
    email: "pasha@pasha.io",
    avatar:
      "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D&w=300&q=80",
    about: "Тут я рассказываю интересную историю",
  },
  2: {
    name: "Владислав",
    lastname: "Тетерин",
    id: 15,
    email: "vladteterin@google.com",
    avatar:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlciUyMHBlcnNvbmF8ZW58MHx8MHx8fDA%3D&w=300&q=80",
    about: "Тут я рассказываю интересную историю",
  },
  3: {
    name: "Юлия",
    lastname: "Петрова",
    id: 3,
    email: "julia@ya.ru",
    avatar:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnN8ZW58MHx8MHx8fDA%3D&w=300&q=80",
    about: "Тут я рассказываю интересную историю",
  },
  4: {
    name: "Ксения",
    lastname: "Иванова",
    id: 9,
    email: "ksu@ya.ru",
    avatar:
      "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8dXNlciUyMHBlcnNvbmF8ZW58MHx8MHx8fDA%3D&w=300&q=80",
    about: "Тут я рассказываю интересную историю",
  },
};

export function getUser(userId) {
  for (let i = 0; i < Object.keys(users).length; i++) {
    if (users[i].id == userId) return users[i];
  }
  return user;
}

export function getUsers() {
  return users;
}
