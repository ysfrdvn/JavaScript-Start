const user = { id:1 , name: "yusuf"};
const friends = [{id:2, name: "kemal"}, {id:3, name: "halit"}];

const GetUser = () =>{
    return new Promise((resolve , reject) =>{
        setTimeout(() => {
            resolve(user);
        }, 2000);
    })
};

const GetFriends = (userId) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(friends);
        }, 500);
    })
};

 // callback hell promise yapısıyla çağıralım

let userId;
GetUser().then((user1) => {
    userId = user1.id;
    GetFriends(userId).then((friends1) =>{
        console.log(user1);
        console.log(friends1);

    })
})
 


//şimdi promise chain kullanalım

GetUser().then((user1) =>{
    console.log(user1);
    return GetFriends(user1.id);
}).then((friends1) =>{
    console.log(friends1);
})

// şimdi async await yapısı kullanalım
 

async function asyncExample() {
    const user2 = await GetUser(); // async await ile 46 . satır bitmeden 47 ye geçmeyecek
    const friends2 = await GetFriends(user2.id);
    console.log(user2);
    console.log(friends2);

}
asyncExample();