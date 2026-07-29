function register(cb){
    
    setTimeout(()=>{
        console.log("register here")
        cb();

    },2000)
}

function login(cb){
    setTimeout(()=>{
        console.log("login here")
        cb();

    },4000)
    
}

function get_data(cb){
    setTimeout(()=>{
        console.log("fetch data")
        cb();

    },6000)
    
}

function display_data(){
    setTimeout(()=>{
        console.log("display data")

    },8000)
    
}

// callback hell problem
register(
    ()=>{
        login(
            ()=>{
                get_data(
                    ()=>{
                        display_data();
                    }
                );
            }
        );
    }
);




console.log("call another application");