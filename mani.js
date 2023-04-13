const gamebord=document.querySelector('#game');

const infomessage=document.querySelector('#info');
let go='circle';
infomessage.textContent="circle.goes first";

const cellnumber=9;
let cells=[];
for(let i=1; i<=cellnumber; i++){
  cells.push("");
}
function createBoard(){

  cells.forEach((key,index)=>{
    const cellEl= document.createElement('div');
    cellEl.classList.add('square');
    cellEl.id=index;
    gamebord.appendChild(cellEl);
    
    cellEl.addEventListener('click',addUp)
    })
}
createBoard();

function addUp(e){
  const goDisplay=document.createElement('div');
  goDisplay.classList.add(go);
  e.currentTarget.appendChild(goDisplay);

  go=go==='circle'?'cross':'circle'
  infomessage.textContent="it  is now "+go
  +"go";
 e.currentTarget.removeEventListener('click',addUp);

 checkScore();
}

function checkScore(){
  const allSquares = document.querySelectorAll(".square");
  
  const winngComb=[
    [0,1,2],[3,4,5],[2,4,6]
  ]
 
 winngComb.forEach((arry)=>{
  const circleWins =arry.every((cell)=>
    allSquares[cell].firstChild?.classList.contains('circle'))
  

    if(circleWins){
      infomessage.textContent='circle win';
      allSquares.forEach(square=>square.replaceWith(square.cloneNode(true)))
      return;
    }
  })
} 