const loadUser=()=>{
    // console.log('hello bro')
    fetch("https://jsonplaceholder.typicode.com/users")
    .then((res) =>res.json() )
    .then((data) => {
           sowUser(data)
    })
}

// const sowUser=(users)=>{
// // console.log(user)
// const userContainer =document.getElementById('usersUl')
// for(const user of users){
//     // console.log(user)
//     const li = document.createElement('li');
//     li.innerText= user.name;
//     userContainer.appendChild(li);
// }
// }

const sowUser=(users)=>{
    // console.log(users)
    const userContainer = document.getElementById('usersUl')
    for(const user of users){
        // console.log(user)
        const li = document.createElement('li')
        li.innerText = user.name
        userContainer.appendChild(li)
    }
}