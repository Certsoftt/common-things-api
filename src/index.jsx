import { useState } from "react";

export function Get(input){
    this.input = input
    this.response;
    this.data;
}

Get.prototype.api = async function (endpoint=""){
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
    return fetch
}
