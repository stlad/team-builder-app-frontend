import { use } from "echarts";

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

    postUserResult(userId, roleId){
        return fetch(this.contextUrl+`/results/?userId=${userId}&roleId=${roleId}`, {
            method:"POST"
        });
    }

    getUserResult(userId){
        return fetch(this.contextUrl+`/results/${userId}`, {
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

    updateUserById(id, body){
        return fetch(this.contextUrl+"/users/"+id,{
            method:"PUT",
            headers: {
              "Content-Type": "application/json",
            },
            body:JSON.stringify(body)
        })
    }

    register(body){
        return fetch(this.contextUrl+"/auth/register", {
            method:"POST",
            headers: {
              "Content-Type": "application/json",
            },
            body:JSON.stringify(body)
        });
    }

    login(body){
        return fetch(this.contextUrl+"/auth/login", {
            method:"POST",
            headers: {
              "Content-Type": "application/json",
            },
            body:JSON.stringify(body)
        });
    }
    getAllUsers(id){
        return fetch(this.contextUrl+"/users/all", {
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
    
    getAllRoles(){
        return fetch(this.contextUrl+"/results/catalog", {
            method:"GET"
        });
    }

    postResult(results){
        return fetch(this.contextUrl+"/results/", {
            method:"POST",
            headers: {
              "Content-Type": "application/json",
            },
            body:JSON.stringify(results)
        });
    }

    getUserRole(id){
            return fetch(this.contextUrl+"/results/user/"+id, {
                method:"GET"
            });
        }
}

class TeambuilderApi{
    constructor(){
        this.host =document.location.protocol + "//" +document.location.hostname + (isDev ? ":8093" : ""); 
        this.contextPath = '/api/teambuilder';
        this.contextUrl=this.host+this.contextPath;
        console.log("Hardskills Server address: "+this.host);
    }
    
    getAllUsersWithRoles(){
        return fetch(this.contextUrl+"/teams/users/all", {
            method:"GET"
        });
    }

    getUsersTeam(id){
        return fetch(this.contextUrl+"/teams/users/"+id, {
            method:"GET"
        });
    }

    getTeamById(id){
        return fetch(this.contextUrl+"/teams/"+id+"/full", {
            method:"GET"
        });
    }

    getAllTeamsIds(id){
        return fetch(this.contextUrl+"/teams/ids", {
            method:"GET"
        });
    }

    buildTeams(id){
        return fetch(this.contextUrl+"/tb/start", {
            method:"GET"
        });
    }

    getTeamsOfProj(id){
        return fetch(this.contextUrl+"/projects/teams/"+id+"/all", {
            method:"GET"
        });
    }

    countTeamsOfProj(id){
        return fetch(this.contextUrl+"/projects/teams/"+id+"/count", {
            method:"GET"
        });
    }

    getProjectById(id){
        return fetch(this.contextUrl+"/projects/"+id, {
            method:"GET"
        });
    }
    getAllProjectIds(){
        return fetch(this.contextUrl+"/projects/ids", {
            method:"GET"
        });
    }
}

const belbinApi = new BelbinApi();
const adminApi = new AdminApi();
const hardskillsApi = new HardSkillsApi();
const teambuilderApi = new TeambuilderApi()

export {belbinApi, adminApi,hardskillsApi,teambuilderApi};