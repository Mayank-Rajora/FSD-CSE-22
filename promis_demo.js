function register(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("register here")
            reject("failed to register")
       

        },2000)

    })
    
    
}

function login(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("login here")
            resolve();
       

        },4000)

    })
    
}

function get_data(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("fetch data")
            resolve();
       

        },6000)

    })
    
}

function display_data(){
    setTimeout(()=>{
        console.log("display data")

    },8000)
    
}
// register()
//     .then(login)
//     .then(get_data)
//     .then(display_data)

//     .catch((err)=>{
//         console.log("error",err);
//     })

async function test(){
    try{
        await register();
        await login();
        await get_data();
        display_data();

    }catch(err){
        console.log("error",err);
    }
}
test();


console.log("call another application");