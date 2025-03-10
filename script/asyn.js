const handleUser =()=>{
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then((res) => res.json() )
    .then((data) =>{
        console.log(data)
     
    } )
    .catch((err) =>{
        console.log('error is this line', err)
    } )
}

handleUser()