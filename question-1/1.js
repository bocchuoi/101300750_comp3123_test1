function lowerCaseWords(arr) {
    let myPromise = new Promise(function(resolve, reject) {
        let stringArr = arr.filter((element) => {
                return (typeof element === 'string' || element instanceof String)
    
        });
        if (stringArr.length <= 0) {
            reject("No string :(")
        }
        else {
            resolve(stringArr.map((str) => {
                return str.toLowerCase()
            }))
        }
    });
    return myPromise
}

let promise1 = lowerCaseWords(["PIZZA",10,true,25,false,"Wings"]);
promise1.then(
    (res) => console.log(res),
    (res) => console.log(res)
)

let promise2 = lowerCaseWords([10,true,25,false]);
promise2.then(
    (res) => console.log(res),
    (res) => console.log(res)
)