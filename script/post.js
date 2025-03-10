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
    console.log(posts)
}

handlePost()