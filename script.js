let para1 = document.getElementById('para1');
let id1 = document.getElementById('id1');
let id2 = document.getElementById('id2');
let id3 = document.getElementById('id3');
let id4 = document.getElementById('id4');
let para2 = document.getElementById('para2');
let id21 = document.getElementById('id21');
let id22 = document.getElementById('id22');
let id23 = document.getElementById('id23');
let id24 = document.getElementById('id24');

 function test() {
     
     fetch("https://reqres.in/api/users?page=2")
    .then((res) => { return res.json() })
    .then((result) => {
    id1.value=result.data[0].id;
    id2.value=result.data[0].first_name;
    id3.value=result.data[0].last_name;
    para1.href=result.data[0].avatar;
    id4.value=result.data[0].email;
    }).catch((f) => {
    console.log('error')
    });

    fetch("https://reqres.in/api/unknown")
    .then((res2) => { return res2.json() })
    .then((result2) => {       
   id21.value=result2.data[0].id;
   id22.value=result2.data[0].name;
   id23.value=result2.data[0].year;
   para2.href=result2.support.url;
   id24.value=result2.data[0].color;
   }).catch((f) => {
   console.log('error')
   });
}

test();














// let c = JSON.stringify(result);
// par1.innerText=Object.values(result[0].name);
// par1.innerText = c;
// console.log("color:"+ result.data[0].avatar);
// para1.href=result.data[0].avatar;
// console.log(c);


