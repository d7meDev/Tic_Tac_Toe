let player = "X";
let boxes = document.querySelectorAll(".box");
let gameWinner = "";
let count = 0;
let draw = false;

boxes.forEach(box =>{
    box.addEventListener('click', event => {
     
        if(!(gameWinner.length != 0|| draw || box.textContent == "X" || box.textContent == "O")){
            count++;
            isDraw();
            let token = document.createElement("h1");
            token.classList.add("token");
            token.textContent = player;
            box.appendChild(token);
            if(isWinner(player)){
                gameWinner=player;
                let  message = document.createElement("h1");
                message.classList.add("message");
                message.textContent = `The Winner is ${player} !!!`
                document.body.appendChild(message);

                message.addEventListener("click",event => {
                    message.remove();
                    reset();
                })

            }
            
            else if(draw){
                  gameWinner=player;
                  let  message = document.createElement("h1");
                  message.classList.add("message");
                  message.textContent = `It is a Draw`;
                  document.body.appendChild(message);

                    message.addEventListener("click",event => {
                    message.remove();
                    reset();
                })
            }
            
            togglePlayer();
        }
        

    })
})


function togglePlayer(){
    player = player == "X"? "O" : "X";
}

function isDraw(player){

 if(!isWinner(player) && count == 9){
    console.log("did")
   draw = true;
 }
 
}

function isWinner(player){
    
    if(player == boxes.item(0).textContent && player == boxes.item(1).textContent && player == boxes.item(2).textContent){
        return true;
    }
   else if(player == boxes.item(3).textContent && player == boxes.item(4).textContent && player == boxes.item(5).textContent){
        return true;
    }
   else if(player == boxes.item(6).textContent && player == boxes.item(7).textContent && player == boxes.item(8).textContent){
        return true;
    }
   else if(player == boxes.item(0).textContent && player == boxes.item(4).textContent && player == boxes.item(8).textContent){
        return true;
    }
   else if(player == boxes.item(2).textContent && player == boxes.item(4).textContent && player == boxes.item(6).textContent){
        return true;
    }
   else if(player == boxes.item(0).textContent && player == boxes.item(3).textContent && player == boxes.item(6).textContent){
        return true;
    }
   else if(player == boxes.item(1).textContent && player == boxes.item(4).textContent && player == boxes.item(7).textContent){
        return true;
    }
   else if(player == boxes.item(2).textContent && player == boxes.item(5).textContent && player == boxes.item(8).textContent){
        return true;
    }
    else{
        return false;
    }
    
}

function reset(){

 player = "X";
 gameWinner = "";
 count = 0;
 draw = false;
 boxes.forEach(box => {
    box.textContent = "";
 })

}