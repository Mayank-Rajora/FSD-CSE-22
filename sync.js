function register(){
    console.log("register here: ");
    waitfordelay(10000);
}

function login(){
    console.log("login here: ");
    waitfordelay(6000);
}

function get_data(){
    console.log("fetch data: ");
    waitfordelay(4000);
}

function display_data(){
    console.log("dispaly data: ");
    waitfordelay(4000);
}

function waitfordelay(delay){
    const mt = Date.now() + delay;
    while(Date.now()<mt){

    }
}
register();
login();
get_data();
display_data();

console.log("call another application");