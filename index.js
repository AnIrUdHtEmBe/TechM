function fetchData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let success = true; // Change to false to simulate failure
            if (success) {
                resolve("Data fetched successfully!");
            } else {
                reject("Error fetching data.");
            }
        }, 2000);
    });
}

fetchData()
    .then(response => {
        console.log(response); 
    })
    .catch(error => {
        console.error(error); 
    });


// async function fetchdata() {
//     console.log("1st log!");
//     function ani () {
//     return new Promise(resolve => { 
//         setTimeout(() => {
//             console.log("Hii");
//             resolve();
//         },3000) }
//     )}

//     await ani();  
//     console.log("After delay");  
// }
// fetchdata();
