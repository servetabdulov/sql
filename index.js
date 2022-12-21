const fs = require('fs');
fs.readFile('./tasks.json', 'utf8', (err, data) => {
    if (!err) {
        const array = JSON.parse(data);
        const newObject={
            id: 8,
            description: "new description",
            due: "2002-12-01"
        }
        array.push(newObject)
        var filePath = './tasks.json'; 
        fs.unlinkSync(filePath);
        const result = JSON.stringify(array)
        fs.appendFile('tasks.json', result, err => {
            if (err) {
                console.error(err);
            }
        });
    } else {
        console.error(err);
    }
});