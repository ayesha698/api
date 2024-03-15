burger = document.querySelector('.burger')
navbarItems = document.querySelector('.navbar-items ')
nav = document.querySelector('.nav')

burger.addEventListener('click',()=>{
    navbarItems.classList.toggle('h-class')
    nav.classList.toggle('v-class')
})



const userContainer = document.getElementById('user_container');

async function fetchUser() {
    let userArray = [];
    await fetch('https://dummyjson.com/users')
    .then((res) => res.json())
    .then((json) => userArray.push(json.users))

    console.log(userArray[0])

    userArray[0].forEach((value) => {
        userContainer.innerHTML += `
        <div class="single_user">
        <img src="${value.image}" class="profile-pic" />
                    <h3>Name : ${value.firstName} ${value.lastName}</h3>
                    <div class="age_gender">
                        <span>Age : ${value.age}</span>
                        <span>Gender : ${value.gender}</span>
                    </div>
                    <p class="phone">Phone : ${value.phone}</p>
                    <p class="email">Email : ${value.email}</p>
                    <p class="pass">Password : ${value.password}</p>
            </div>
        `
    })
}

fetchUser()