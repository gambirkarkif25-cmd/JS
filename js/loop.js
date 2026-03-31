const subjects = ["htmlcssjs", "python", "database", "nepal parichaya"];

console.log(`i read ${subjects[0]}`);
console.log(`i read ${subjects[1]}`);
console.log(`i read ${subjects[2]}`);
console.log(`i read ${subjects[3]}`);

// for (i=0; i<subjects.length; i++){console.log(`i read ${subjects[i]}`)}

// how to find lenght of array.

console.log({ size: subjects.length });

// i want o/p htmlcssjs, python,daytabase, nepalparichaya
console.log({String: subjects.toString()});

// i want o/p htmlscssjs, python, database, nepalparichaya 
console.log({join: subjects.join("@")})

//  i want to remove last element of array
console.log({oldsubjects: subjects})
subjects.pop()
console.log({lastEleremoved: subjects    })

// i want to remove 1st element of array 
subjects.shift()
console.log({FirstElement: subjects})

// Add element to end of array
subjects.push("sscc")
console.log({subjects})

subjects.push("okkkk")
console.log({subjects})

//Add element to start of array
subjects.unshift("Java")
console.log({subjects})