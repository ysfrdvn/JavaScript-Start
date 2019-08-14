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

async function asyncExample() {
    const user2 = await GetUser(); // async await ile 46 . satır bitmeden 47 ye geçmeyecek
    const friends2 = await GetFriends(user2.id);
    console.log(user2);
    console.log(friends2);

}
asyncExample();