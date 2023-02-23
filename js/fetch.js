// fetch('https://jsonplaceholder.typicode.com/todos/1')
//       .then(response => console.log(response))
//       .then(json => console.log(json))


function loadData(){
    const url = "https://jsonplaceholder.typicode.com/todos/1";
    fetch(url)
        .then(Response => Response.json())
        .then(json => console.log(json))
}