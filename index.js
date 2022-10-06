// Question 1
function filterArrayPromise(arr) {
    let myPromise = new Promise(function(resolve, reject) {
        let stringArr = arr.filter((element) => {
                return (typeof element === 'string' || element instanceof String)
    
        });
        if (stringArr.length <= 0) {
            reject("No string :(")
        }
        else {
            resolve(stringArr)
        }
    });
    return myPromise
}

let promise1 = filterArrayPromise(["PIZZA",10,true,25,false,"Wings"]);
promise1.then(
    (res) => console.log(res),
    (res) => console.log(res)
)

let promise2 = filterArrayPromise([10,true,25,false]);
promise2.then(
    (res) => console.log(res),
    (res) => console.log(res)
)

// Question 2
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






















// Question 3
var fs = require('fs');
var process = require('process');
if (!fs.existsSync("./logs")) {
    fs.mkdirSync("./logs", { recursive: true })
}
process.chdir("./logs")
for (let i = 0; i < 10; i++) {
    // fs.writeFile(`log${i}.txt`, 'something', function (err) {
    //         if (err) throw err;
    //         console.log(`log${i}.txt1`);
    //     }
    // )
    fs.writeFileSync(`log${i}.txt`, 'something')
    console.log(`log${i}.txt`);
}
for (let i = 0; i < 10; i++) {
    fs.unlinkSync(`log${i}.txt`)
    console.log(`log${i}.txt is destroyed, reduced to atom`);
}