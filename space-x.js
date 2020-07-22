console.log("this works");
const container = document.querySelector(".container")
console.log (container)
//telling the system to go "fetch this info"
fetch("https://api.spacexdata.com/v3/capsules")
//and then push out a response
.then(response => {
    return response.json();

})
.then(data =>{
    for(let i= 0; i < data.length; i++) {
        let eachCapsule = data[i];
       // console.log(eachCapsule);
   const obj = {
       capsuleID: eachCapsule.capsule_id,
       details: eachCapsule.details,
       landings: eachCapsule.landings
       
      
   }
   console.log(obj);

   const capsuleElement = document.createElement("p");
   capsuleElement.textContent = obj.capsuleID;
   container.appendChild(capsuleElement)
}
    



//console.log(data);
//     const firstElement = data[0];
//     console.log(firstElement);
//     let capsuleID = firstElement.capsule_id;
//     console.log(capsuleID);
//     let details = firstElement.details;
//     console.log(details);
//     let landings = firstElement.landings
//     console.log(landings);
})