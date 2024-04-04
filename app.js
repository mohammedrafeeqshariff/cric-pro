// document.addEventListener("DOMContentLoaded", function() {
//     const players = document.getElementsByClassName('player_name');
  
//     for (let i = 0; i < players.length; i++) {
//       players[i].addEventListener('click', function() {
//         const image = this.nextElementSibling;
  
//         if (image.style.display === 'none') {
//           image.style.display = 'block';
//         } else {
//           image.style.display = 'none';
//         }
//       });
//     }
//   });
  

// const player = document.getElementsByClassName('player_name')

// for(let i=0; i<player.length; i++){
//     player[i].addEventListener('click',()=>{
//         const image = this.nextElementSibling;

//         image.style.display =="none" ? image.style.display == "block" : image.style.display="none"
//     })
// }


const players = document.getElementsByClassName('player_name');

for(let i = 0; i < players.length; i++) {
    players[i].addEventListener('click', function() {
        const image = this.nextElementSibling;

        image.style.display = (image.style.display === "none") ? "block" : "none";
    });
}
