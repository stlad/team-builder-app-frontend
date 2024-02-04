
class BelbinApi{
    constructor(){
        let isDev = false //change to false before  build
        this.host =document.location.protocol + "//" +document.location.hostname + (isDev ? ":8090" : ""); 
        this.contextPath = '/api/belbin';
        this.contextUrl=this.host+this.contextPath;
        console.log("Server address: "+this.host);
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

    
    postQuestionBlank(answerBlank){
        return fetch(this.contextUrl+"/questions/blank", {
            method:"POST",
            headers: {
              "Content-Type": "application/json",
            },
            body:JSON.stringify(answerBlank)
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