
class BelbinApi{
    constructor(){
        this.host = process.env.REACT_APP_BELBIN_API_HOST;
        this.contextPath = process.env.REACT_APP_BELBIN_API_CONTEXT_PATH;
        this.contextUrl=this.host+this.contextPath;
    }

    getRoleByName(name){
        return fetch(this.contextUrl+"/roles/"+name, {
            method:"GET"
        });
    }

    getQuestionBlank(){
        return fetch(this.contextUrl+"/questions/blank", {
            method:"GET"
        });
    }

    
    postQuestionBlank(){
        return fetch(this.contextUrl+"/questions/blank", {
            method:"POST"
        });
    }

    getQuestionBlock(blockNumber){
        return fetch(this.contextUrl+"/questions/block/"+blockNumber, {
            method:"GET"
        });
    }
}


const belbinApi = new BelbinApi();

export default belbinApi;