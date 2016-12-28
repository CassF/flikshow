// $(() => {
//     $.ajax({
//         url: '/',
//             method: 'POST',
//             data:{
//                 irish: "Cass"
//             }
//         })
//         .then((data) =>  {
//             let theData = data.result;
//             $("#putShitHere").append(`<h2>${data.irish}</h2>`);
//             for (let i in  theData){
//                 console.log(theData[i]);
//                 $("#putShitHere").append(`<p>${theData[i].title}</p>`);
//             }
//     });
// });