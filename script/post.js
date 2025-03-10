const handlePost=()=>{
    // console.log('clicked')
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then((res) => res.json() )
    .then((data) =>{
        // console.log(data)
        displayPost(data)
    } )
}

const displayPost =(posts)=>{
    // console.log(posts)
    const postContainer = document.getElementById('post-container')
    for(const post of posts){
        console.log(post)
        const div = document.createElement('div')
        div.classList.add('card')
        div.innerHTML =`
        
        <h2>${post.id}</h2>
         <h2>${post.title}</h2>
          <p>${post.body}</p>
           <h2>${post.userId}</h2>
           <button onclick ="handleClick(${post.id})">click</button>
          
         
         
        `;
      postContainer.appendChild(div)
    }
};

const handleClick=(postID)=>{
 console.log(`button clicked for post ID: ${postID}`);
}
 
handlePost()