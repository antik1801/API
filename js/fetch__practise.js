
// fetch 3 steps
//step 1: fetch url
const url = 'https://jsonplaceholder.typicode.com/todos/1'

function loadData(){
    fetch(url)
    // step 2. get a promise respose
    .then(response=> response.json()) // close to JSON.parse()
    //step 3: console the response
    .then(json => console.log(json));
}
