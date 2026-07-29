function register(){
    
    setTimeout(()=>{
        console.log("register here")

    },2000)
}

function login(){
    setTimeout(()=>{
        console.log("login here")

    },4000)
    
}

function get_data(){
    setTimeout(()=>{
        console.log("fetch data")

    },6000)
    
}

function display_data(){
    setTimeout(()=>{
        console.log("display data")

    },8000)
    
}


register();
login();
get_data();
display_data();

console.log("call another application");