const user = { id:1 , name: "yusuf"};
const friends = [{id:2, name: "kemal"}, {id:3, name: "halit"}];

const GetUser = () =>{
    return new Promise((resolve , reject) =>{
        setTimeout(() => {
            reject("kullanıcıya ulaşılamadı");
        }, 2000);
    })
};

async function asyncExample() {
    try{
        const user2 = await GetUser(); //
        const friends2 = await GetFriends(user2.id);
        console.log(user2,friends2);
    }catch(error){
        console.log(error);
    }
    

}
asyncExample();