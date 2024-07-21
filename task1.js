// Завдання: отримання даних про користувачів 
// За допомогою засобі Fetch отримати інформацію про користувачів
// за посиланням - https://jsonplaceholder.typicode.com/users 
// Імена користувачів відобразити в ненумерованому списку ul.usersList,
// який створений у файлі index.html
// Запустити програму за допомогою Live Server
// Перевірити за допомогою команди npm tests/task1.test.js 


fetch('https://jsonplaceholder.typicode.com/users')
  .then(res => {
    if (!res.ok) {
        throw new Error ('response wasn`t ok: ' + res.statusText );
    }    
    return res.json();
})
  .then(data => {
    const names = data.map(user => user.name);
    const elUl = document.getElementsByClassName('usersList')[0];
    names.forEach(name => {
        const elLi = document.createElement('li');
        elLi.textContent = name;
        elUl.appendChild(elLi);
    });
    
})
  .catch(error =>{
    console.error('You have error:', error)
});
  

