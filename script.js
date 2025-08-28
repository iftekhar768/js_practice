
const student={
    name: "Iftekhar",
    ID: 11,
    study: function(time){
        console.log(time,"Studying");
    }
}
const liCollection = document.getElementsByTagName('li');
// console.log(liCollection);
for(const li of liCollection){
    console.log(li.innerText);
}

const allHeading = document.getElementsByTagName('h1');

for(const h1 of allHeading){
    console.log(h1.innerText);
}

const paragraph = document.getElementsByTagName('p');
for(const p of paragraph){
    console.log(p.innerText);
}
const foot =document.getElementsByTagName('footer')
for(const footer of foot){
    console.log(footer);
}

const he1 =document.getElementById("he1");
const places=document.getElementsByClassName('place');
// console.log(places);
for(place of places){
    console.log(place.innerText);
}