// // const promiseOne = new Promise((resolve, reject)=>{
// //     setTimeout(()=>{
// //         console.log("Async task is completed");
// //         resolve();
// //     },0);
// // });

// // promiseOne.then(()=>{
// //     console.log("Successfully created your first promise")
// // })


// const promiseThree = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         console.log("Hello using the promise to send the data")
//         resolve({
//             name: "Parth",
//             netWorth: "Million $",
//             age: "25"
//         })
//     },1000)
// }) 

// promiseThree.then((obj) => {
//     console.log(obj)
// })

const promiseFour = new Promise((resolve, reject) => {
    setTimeout(() => {
        let error = false;
        if(!error){
        resolve({username: "parAEdox", processor: "5600H", VRam: "4Gigs"})
        }
        else{
            reject("Error has occurred")
        }
    })
})

async function consumingPromise() {
   try {
        const response = await promiseFour
        console.log(response)
   } catch (error) {
        console.log(`E: ${error}`)
   }
}

consumingPromise()

// promiseFour
// .then((user) => {
//     console.log("Promise resolved")
//     console.log("The data obtained")
//     return user.username
// })
// .then((username) => {
//     console.log(`Username : ${username}`)
// })
// .catch((err) => {
//     console.log(err)
// })

