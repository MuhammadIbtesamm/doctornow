"use server"

export async function addRequest(data){
const add =  await fetch (`${process.env.BASE_URI}api/requests`,{
    method: "POST",
    body: JSON.stringify( data ),

})
return add
}