function apiCall(){
    fetch(`https://jsonplaceholder.typicode.com/users`)
    .then(response => response.json())
    .then(data =>{displayUser(data)})
}
function createElementLi(elementId){
     const li = document.createElement('li');
}
function displayUser(data){
    // Data Api loaded
    // step 2: Display user information into the website / system
    const ul = document.getElementById('user-list');
    for (const user of data) {
        const li = document.createElement('li');
        li.innerText = `${user.username}`;
        ul.appendChild(li);
        // console.log(user.username);
    }
}
function displayUsers2(){

}