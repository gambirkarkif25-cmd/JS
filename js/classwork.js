// if time>=12:PM "good afternoon" else "good morning"
// let time= 20
// if (time>=12)
// console.log("good afternoon")
// else
//     console.log("good morning")


// let isHour=time>=12 ? "good afternoon":"good morning"
// console.log(isHour);

// let isMessage=time<=17 ? "good evening":"good night"
// console.log(isMessage);

let time = 18;
let day = time < 12
    ? "Good morning"
    : time < 17
      ? "Good afternoon"
      
      : time < 21
        ? "Good evening" : "Good night"

console.log(day);