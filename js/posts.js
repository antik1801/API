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
       div.classList.add('bg-blue-200','rounded-xl','mb-5','p-4','mr-4')
       div.innerHTML = `
       <h3 class='font-bold'>User-id: ${post.userId}</h3>
       <h5 class='font-semibold'>Post: ${post.title}</h5>
       <p>Post-description: ${post.body}</p>
       `
       postContainer.appendChild(div); 
    }
}


loadPosts();