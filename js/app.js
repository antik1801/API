console.log('app.js connected!');

function loadData2(){
    const url = "https://jsonplaceholder.typicode.com/todos/1";
    fetch(url)
    .then(resonse => resonse.json())
    .then(json => console.log(json));
}

function loadDataUsers(){
    const url = 'https://jsonplaceholder.typicode.com/users';
    fetch(url)
    .then(response => response.json())
    .then(json => console.log(json));
}
