const users = [
  { name: "Shagufta Sen", profile: "https://i.pinimg.com/736x/99/85/23/9985235bfaf38403f571049ae1e21b1d.jpg", bio: "I am a content creator", department : "Content Creation" },
  { name: "Rohan Mehta", profile: "https://i.pinimg.com/736x/d0/cb/d1/d0cbd1380c72ddf3750c896433b2dea1.jpg", bio: "Frontend developer passionate about UI/UX.", department : "Software Development" },
  { name: "Priya Sharma", profile: "https://i.pinimg.com/736x/84/3a/8e/843a8ea27995703ad2412a89da760acd.jpg", bio: "Data analyst who loves turning numbers into stories.", department : "Data Analytics" },
  { name: "Aarav Singh", profile: "https://i.pinimg.com/736x/2b/cc/55/2bcc55b3291035c4e53afbaa5dd1ae83.jpg", bio: "Mobile app developer for Android and iOS.", department : "Software Development" },
  { name: "Neha Verma", profile: "https://i.pinimg.com/736x/7e/11/76/7e117644c9864918788b39b6f59fa04a.jpg", bio: "UI/UX designer crafting human-centered experiences.", department : "UI/UX Design" },
  { name: "Karan Patel", profile: "https://i.pinimg.com/736x/fe/18/ba/fe18baa3b62b57dd1626d806f0f0871a.jpg", bio: "Cloud engineer focusing on scalable solutions.", department : "Software Development" },
  { name: "Ananya Gupta", profile: "https://i.pinimg.com/736x/4d/1a/cc/4d1accca2e0105cff748a38c8385c104.jpg", bio: "AI researcher exploring ethical machine learning.", department : "Research" },
  { name: "Aditya Roy", profile: "https://i.pinimg.com/736x/dd/5e/a9/dd5ea9369523a03e5af2a91f241ac384.jpg", bio: "Full-stack web developer and open-source contributor.", department : "Software Development" },
  { name: "Meera Kapoor", profile: "https://i.pinimg.com/736x/6b/3a/58/6b3a582729be8fc01fee5ad964c57363.jpg", bio: "Travel blogger sharing stories from around the globe.", department : "Content Creation" },
  { name: "Siddharth Nair", profile: "https://i.pinimg.com/736x/a1/18/2f/a1182f1dcb1e9afda517026981fa826e.jpg", bio: "Cybersecurity specialist keeping the internet safe.", department : "Cybersecurity" },
  { name: "Ishita Bose", profile: "https://i.pinimg.com/736x/0c/5d/7e/0c5d7e796152582a786339557b0326d8.jpg", bio: "Photographer capturing timeless moments.", department : "Photography" },
  { name: "Varun Malhotra", profile: "https://i.pinimg.com/736x/28/da/b4/28dab4262a19d942cacb1bb208f0bc4a.jpg", bio: "Game developer creating immersive virtual worlds.", department : "Game Development" },
  { name: "Shweta Singh", profile: "https://i.pinimg.com/736x/8e/5e/92/8e5e9202e9f851dfac8a714f15cb8751.jpg", bio: "Marketing strategist and brand storyteller.", department : "Marketing" },
  { name: "Arjun Desai", profile: "https://i.pinimg.com/736x/88/ae/fb/88aefb54ee3f3e7191b3df89b5230ad0.jpg", bio: "Blockchain developer working on decentralized apps.", department : "Blockchain" },
  { name: "Tanya Sharma", profile: "https://i.pinimg.com/736x/84/a6/0f/84a60fd631320c02392d6c373314a362.jpg", bio: "Fitness coach inspiring healthy lifestyles.", department : "Fitness" }
];

// goal : show all users-> filter users based on input in search bar-> show filtered users


function showUsers(arr){
  const container = document.querySelector(".cards-container");
  container.innerHTML = ""; 
  arr.forEach(function(user){
    let card = document.createElement("div");
    card.classList.add("card");

    let image = document.createElement("img");
    image.src = user.profile;
    image.classList.add("bg-img");
    image.loading = "lazy";

    let blurredLayer = document.createElement("div");
    blurredLayer.style.backgroundImage = `url(${user.profile})`;
    blurredLayer.classList.add("blurred-layer");

    let content = document.createElement("div");
    content.classList.add("content");

    let title = document.createElement("h3");
    title.textContent = user.name;

    let description = document.createElement("p");
    description.textContent = user.bio;

    content.appendChild(title);
    content.appendChild(description);
    card.appendChild(image);
    card.appendChild(blurredLayer);
    card.appendChild(content);
    container.appendChild(card);
  });
}

function updateUserCount(count) {
  const countEl = document.querySelector(".user-count");
  const inpValue = document.querySelector(".inp").value.trim();


  if (inpValue === "") {
    countEl.textContent = "";
  } else if (count === 0) {
    countEl.textContent = "No users found";
  } else {
    countEl.textContent = `${count} user(s) found`;
  }
}


const inp = document.querySelector(".inp");
const filterBox = document.querySelector(".filter-box");

filterBox.addEventListener("change", function () {
  let department = filterBox.value;

  let filteredUsers = users.filter(user => {
    return department === "" || user.department === department;
  });

  showUsers(filteredUsers);
  updateUserCount(filteredUsers.length);
});

inp.addEventListener("input", function () {
  let searchedUsers = users.filter((user) =>
    user.name.toLowerCase().includes(inp.value.toLowerCase())
  );
  showUsers(searchedUsers);
  updateUserCount(searchedUsers.length);
});

showUsers(users);
updateUserCount(users.length);


