class SecurityUtils{

    mockLogin = ()=>{
        console.log("LOGGING")
        localStorage.setItem("user_id", 1);
        localStorage.setItem("username", "Ivan");
        localStorage.setItem("firstname", "Иван");
        localStorage.setItem("lastname", "Иванов");
        window.location.reload();
    }
    
    logout = ()=>{
        console.log("LOGGING OUT")
        localStorage.removeItem("user_id");
        localStorage.removeItem("username");
        localStorage.removeItem("firstname");
        localStorage.removeItem("lastname");
        window.location.href = '/';
    }
    
    getCurrentUserId = ()=> localStorage.getItem("user_id");
    
    isLogged = () =>!(localStorage.getItem("user_id")===null || localStorage.getItem("user_id")===undefined)
}

const securityUtils = new SecurityUtils();

export {securityUtils}