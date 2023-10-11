// forin Loop

// forin loop on Object

const myObject = {
    js: 'javascript',
    cpp: 'C++',
    rb: 'ruby on rails',
    swift: 'swift by apple'
}

for (const key in myObject) {
    console.log(`${key} shotcut is for ${myObject[key]}`);
}