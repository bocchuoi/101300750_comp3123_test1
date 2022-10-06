var fs = require('fs');
var process = require('process');

if (fs.existsSync("./logs")) {
    console.log("Directory logs exist")
    process.chdir("./logs")
    console.log("Deleting the log files")
    for (let i = 0; i < 10; i++) {
        if (fs.existsSync(`log${i}.txt`)) {
            fs.unlinkSync(`log${i}.txt`)
            console.log(`log${i}.txt deleted`);
        }

    }
    process.chdir("..")
    console.log("Removed the logs folder")
    fs.rmdirSync("logs")
}

console.log("Creating the logs directory")
fs.mkdirSync("logs")
process.chdir("logs")
for (let i = 0; i < 10; i++) {
    // fs.writeFile(`log${i}.txt`, 'something', function (err) {
    //         if (err) throw err;
    //         console.log(`log${i}.txt1`);
    //     }
    // )
    fs.writeFileSync(`log${i}.txt`, 'some text')
    console.log(`log${i}.txt`);

}
