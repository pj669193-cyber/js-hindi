// var c = 300
// let a = 300
// if (true) {
//     let a = 10
//     const b = 20
//     console.log("INNER: ", a);
    
// }

function one(){
    const username = "hitesh"

    function two(){
        const website = "youtube"
        console.log(username);
    }
        console.log(website);

     two()

}

 one()
