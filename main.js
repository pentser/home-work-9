//**************************************************** */
//tar 1
//? using flag

const $changeColor=document.getElementById("id_change");
const $cancel=document.getElementById("id_cancel");
const $div=document.getElementById("id_board");

let clearTimeOut;
let flag=false;

$changeColor.addEventListener("click", ()=>{
    
    clearTimeOut=setTimeout(()=>{
        $changeColor.removeAttribute("disabled");
        flag=false;
    },2000);

    flag=true;
    $changeColor.setAttribute("disabled","true");
    $div.style.backgroundColor="blue";
    
})

$cancel.addEventListener("click", ()=>{
    if(flag) {
    $div.style.backgroundColor="white";
    $changeColor.removeAttribute("disabled");
    clearTimeOut(clearTimeOut);
    flag=false;
    }
   });

//**************************************************** */
//tar 2
//? שעון עצר 10 שניות
let $span= document.getElementById("id_timer");
let counter=10;
let clearIntr=setInterval(()=>{
    let timer = new Date().getSeconds();
    $span.innerText=counter--;
},1000);

setTimeout(()=>{
    clearInterval(clearIntr);
    $span.innerText="Game Over";
},10000
);



//**************************************************** */
//tar 3
//? customIndexOf

function customIndexOf(str,chr) {
    try {

        if(typeof(str)!='string'||typeof(char)!='string') {
            throw "illegal parameter, enter string only";
        }

        for(let i=0;i<str.length;i++) {
            if(str[i]===chr)
            {
               return i;
            }
        }
        return -1;


    }
    catch(err) {
        console.error(err);

    }
    
}

console.log(customIndexOf(123,"i"));  //error
console.log(customIndexOf("Eliyahu","i")); // index 2



//**************************************************** */
//tar 4
//? fetch

async function fetchUser() {
  try {
    let url= "https://jsonplaceholder.typicode.com/users";
    let resp= await fetch (url);
    let data = await resp.json();
    let $list= document.querySelector("#id_ul");
    data.forEach(user => {
        let $li = document.createElement("li");
        $li.innerText=`name: ${user.name},city :${user.address.city}`;
        $list.append($li);
        
    });
  }
  catch(err) {

    console.error(err);

  }

}

fetchUser();


