let resolvedPromised = new Promise(function(resolve, reject) {
    setTimeout(() => {
        resolve("Success")
    }, 500)
})



let rejectedPromise = new Promise(function(resolve, reject) {
    setTimeout(() => {
        reject("Failed")
    }, 500)
})

resolvedPromised.then(
    (res) => console.log(res)
)

rejectedPromise.then(
    (res) => console.log(res),
    //(res) => console.log(res)
).catch(
    (res) => console.log(res)
)