// На сторінці index.html знаходяться поля зазначені коментарем Task2
// При введені імені користувача в поле #userNameInput та натиску на кнопку
// #getUserButton потрібно зробити запит Fetch за посиланням - https://jsonplaceholder.typicode.com/users
// Віднайти користувача із введеним ім'ям, отримати місто його проживанння та
// відобразити у тезі #userCity
// Запустити програму потрібно за допомогою Live Server
// Перевірити правильність програми - команда node tests/task2.test.js

document.getElementById("getUserButton").onclick = getCity;

function getCity() {

  const userName = document.getElementById("userNameInput").value;
  if (userName === "") {
    document.getElementById("userCity").textContent = "Please enter user name.";
    return; 
  }  

  console.log(userName);  
  fetch("https://jsonplaceholder.typicode.com/users")
    .then((res) => {
      if (!res.ok) {
        throw new Error("Response wasn`t ok: " + res.statusText);
      }
      return res.json();
    })
    .then((data) => {
      const userNameInfo = data.filter(user => user.name == userName)
      const userCity = userNameInfo.map(user => user.address.city);
      document.getElementById("userCity").textContent = userCity[0];
    })
    .catch((error) => {
      console.error("You have error:", error);
    });
}

