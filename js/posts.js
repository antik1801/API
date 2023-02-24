function loadPosts(){
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
    .then(data => displayPost(data))
}
// 1. Get the container element where you want to add element 
// 2. Create child element
// 3. set innerText or innerHTML
// 4. Append child

function displayPost(posts){
    const postContainer = document.getElementById('posts-container');
    for (const post of posts) {
     
       const div = document.createElement('div');
       div.innerHTML = `
       <h4>User-id: ${post.userId}</h4>
       <h5>Post: ${post.title}</h5>
       <p>Post-description: ${post.body}</p>
       `
       postContainer.appendChild(div); 
    }
}


loadPosts();