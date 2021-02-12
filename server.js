 


const $postContainer = document.getElementById("posts")

//1.1 js reference to the section element with id users

const $userContainer = document.getElementById("Users")

spawnPosts()

//1.4 call function to spawn user elements

function spawnPosts() {

<div class="post">

<p>${post.text}</p>

<div class="details">

<div>${post.numShares}</div>

<div>${post.user}</div>

<div>${post.time}</div>

</div>

</div>

const postsHTML = loadData().posts.map( post => `

 @@ -15,6 +18,11 @@ function spawnPosts() {

 $postContainer.innerHTML = postsHTML

}



//1.2 define a function to spawn user elements

function spawnUser() {

 const postsHTML = loadData().users.map( user => `

<div class="user">

<p>${user.username}</p>

<div class="details">

<div>${user.lastName}</div>

<div>${user.firstName}</div>

<div>${user.gender}</div>

<div>${user.age}</div>

<button type="button">Add</button>

</div>

</div>

`).join("")

 $userContainer.innerHTML = usersHTML

//1.3 each user element should be a div that shows user info

//... and has a button that says Add Friend (doesn't work)



function loadData() {

 return {

 posts: [

 text: "I love going for jogs in the neighborhood!",

 user: "dogguy23",

 datetime: new Date(),

 numLikes: 3,

 comments: [

 }

 ],

 users: [

 {

 username: "kimmy23",

 firstName: "Kimberly",

 lastName: "Bash",

 gender: "F",

 age: 45

 },

 {

 username: "wordup",

 firstName: "John",

 lastName: "Word",

 gender: "M",

 age: 31

 },

 {

 username: "dogguy23",

 firstName: "Rob",

 lastName: "Obeneur",

 gender: "M",

 age: 62

 },

 {

 username: "silentninja84",

 firstName: "Lesa",

 lastName: "Kirkland",

 gender: "F",

 age: 17

 }

 ]

 }

} 
