
const isDev = true //change to false before  build

class BelbinApi{
    constructor(){
        this.host =document.location.protocol + "//" +document.location.hostname + (isDev ? ":8090" : ""); 
        this.contextPath = '/api/belbin';
        this.contextUrl=this.host+this.contextPath;
        console.log("Belbin Server address: "+this.host);
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


class AdminApi{
    constructor(){
        this.host =document.location.protocol + "//" +document.location.hostname + (isDev ? ":8095" : ""); 
        this.contextPath = '/api/admin';
        this.contextUrl=this.host+this.contextPath;
        console.log("Admin Server address: "+this.host);
    }
    
    getUserById(id){
        return fetch(this.contextUrl+"/users/"+id, {
            method:"GET"
        });
    }

}

class HardSkillsApi{
    constructor(){
        this.host =document.location.protocol + "//" +document.location.hostname + (isDev ? ":8091" : ""); 
        this.contextPath = '/api/hardskills';
        this.contextUrl=this.host+this.contextPath;
        console.log("Hardskills Server address: "+this.host);
    }
    
    getAllRoles(id){
        return fetch(this.contextUrl+"/roles/all", {
            method:"GET"
        });
    }

}

const belbinApi = new BelbinApi();
const adminApi = new AdminApi();
const hardskillsApi = new HardSkillsApi();

export {belbinApi, adminApi,hardskillsApi};