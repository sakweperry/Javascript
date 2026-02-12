


// let vote=(age)=>
// {
//     if(age<10){
//        age="infant";
//     }
//     else if(age>=10 && age<20){
//          age="teenagers";
//     }
//     else if(age>=20 && age<30){
//         age="adult";
//     }
//     else if(age>=30 && age<40){
//         age="working"
//     }
//     else{
//         age="old";
//     }
//     return age;
// }
// let votinage=vote(11);
// console.log(votinage);

// const title = document.getElementById('main-heading');
// console.log(title);
// const listItems = document.getElementsByClassName('list-items');
// console.log(listItems);
// const listItems = document.getElementsByTagName('li');
// console.log(listItems);

// const boy = document.querySelector('div');
// console.log(boy);

// styling elements
// const title = document.querySelector('#main-heading');
// title.style.color='red';
// title.style.border='1px solid red';

// const listItem=document.querySelectorAll('.list-items');
// for(i=0; i<listItem.length; i++){
//     listItem[i].style.fontSize='50px';
// }

// const para = document.querySelector('#demo');
// para.innerHTML="Date: " + Date();
// document.write("hi cameroon");

// javascript object
// let computer = {
//    name : "hp",
//    speed : 64,
//    storage : 128,

//    typing: function(){
//     console.log("start typing");
//    },
//    video: function(){
//     console.log("play video");
//    },
//    audio: function(){
//     console.log("play audio");
//    }
// };
// console.log(computer.name);
// console.log(computer.speed);
// console.log(computer.storage);

// computer.typing();
// computer.video();
// computer.audio();

// const ul = document.querySelector('ul');
// const li = document.createElement('li');
// const rice=document.createElement('li');
// ul.append(rice);
// ul.append(li);
// rice.innerText="rice";
// li.innerText="perry";
// li.classList="list-items"
// ul.childNodes[3].style.color='red';
// console.log(ul);
// const div=document.querySelector('div');
// const p=document.createElement('p');
// div.append(p);
// p.innerText="how old are you?";

// addEventListener
// const button1 = document.querySelector('.btn1');
// function alertBtn1(){
//    alert('i love perry');
// }
// button1,addEventListener('click', alertBtn1);

const revealBtn=document.querySelector('.reveal-btn');
const hiddenConten=document.querySelector('.hidden-conten');

function revealConten(){
   if(hiddenConten.classList.contains('reveal-btn')){
      hiddenConten.classList.remove('reveal-btn');
   }
   else{
        hiddenConten.classList.add('reveal-btn');
   }
}
revealBtn.addEventListener('click',revealConten );
