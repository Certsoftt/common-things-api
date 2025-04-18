import { useState } from "react";

export function Get(input){
    this.input = input
    this.response;
    this.data;
}

Get.prototype.api = async function (endpoint="",params=""){
    const [fetch, setFetch] = useState()
    if(this.input == "posts"){
        if(endpoint == ""){
            this.response = await fetch(`https://jsonplaceholder.typicode.com/${this.input}`)
            this.data = this.response.json().then(result=>{
                setFetch(result)
            })
        }else{
            this.response = await fetch(`https://jsonplaceholder.typicode.com/${this.input}/${endpoint}`)
            this.data = this.response.json().then(result=>{
                setFetch(result)
            })
        }
    }
    if(this.input == "repos"){
        if(params !== "" && endpoint === ""){
            this.response = await fetch(`https://api.github.com/users/${params}/${this.input}`)
            this.data = this.response.json().then(result=>{
                setFetch(result)
            })
        }else if(params !== "" && endpoint !== ""){
            this.response = await fetch(`https://api.github.com/users/${params}/${this.input}/${endpoint}`)
            this.data = this.response.json().then(result=>{
                setFetch(result)
            })
        }else{
            console.log(`set repo username as it is a required argument`)
        } 
    }
    return fetch
}
