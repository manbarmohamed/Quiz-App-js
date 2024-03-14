let Questions = [
    {
        quetstion: "what's capital of maroc",
        answer: [
            "Fes",
            "CasaBlanca",
            "Algerie",
            "Rabat",
        ],
        corect: "Rabat"
    },
    {
        quetstion: "what's capital of Spain",
        answer: [
            "Barcalone",
            "Bilbao",
            "Madrid",
            "Paris",
        ],
        corect: "Madrid"
    },
    {
        quetstion: "what's capital of France",
        answer: [
            "Toulouse",
            "Nes",
            "Paris",
            "Milan",
        ],
        corect: "Paris"
    },
    {
        quetstion: "what's capital of Italie",
        answer: [
            "Napoli",
            "Torino",
            "Milan",
            "Roma",
        ],
        corect: "Roma"
    },
]

let score=0

let nextscore=document.getElementById("next-score")

let qst=document.getElementById("Question")
let answerbuttons=document.getElementById("answer-buttons")
let btns=document.getElementById("btns")
let count=document.getElementById("count")

let i=0

function getData(){
    for(let j=0;j<Questions[i].answer.length;j++){
        qst.innerHTML=Questions[i].quetstion
      answerbuttons.innerHTML +=
        `<button class="answer" id="b1">${Questions[i].answer[j]}</button>`
    }
    count.innerHTML= `<p>${i + 1}  of ${Questions.length} Questions </p>`;

}
getData();

function Change(){
    document.querySelectorAll(".answer").forEach((e)=>{
        e.addEventListener("click",function(){
            answerbuttons.innerHTML=""
            qst.innerHTML=""
            if(this.innerHTML == Questions[i].corect){
                score +=20;
                nextscore.innerHTML=
                `<p>Your Score is ${score} </p>`;
            }
            
            i++;
            if(score>=40){
                qst.innerHTML="congratulation"
            }
            else{
                qst.innerHTML="You Lose!! try again"             
            }
            getData();
            Change();    
        })

    }
   )
}
Change();





// let j = 0
// let next_btn = document.getElementById('next-btn')
// let qst = document.getElementById('Question');
// let btn = document.getElementsByClassName('answer');

// function show() {
//     for (let i = 0; i < Questions[j].answer.length; i++) {

//         qst.innerHTML = Questions[j].quetstion;
//         btn[i].innerHTML = Questions[j].answer[i]
//     }
//     j++
// }
// next_btn.onclick = show;



