let Questions=[
    {
        quetstion:"what's capital of maroc",
        answer:[
            "Fes",
            "CasaBlanca",
            "Algerie",
            "Rabat",
        ],
        corect:"Rabat"
    },
    {
        quetstion:"what's capital of Spain",
        answer:[
            "Barcalone",
            "Bilbao",
            "Madrid",
            "Paris",
        ],
        corect:"Madrid"
    },
    {
        quetstion:"what's capital of France",
        answer:[
            "Toulouse",
            "Nes",
            "Paris",
            "Milan",
        ],
        corect:"Paris"
    },
    {
        quetstion:"what's capital of Italie",
        answer:[
            "Napoli",
            "Torino",
            "Milan",
            "Roma",
        ],
        corect:"Roma"
    },
]
let j=0
let next_btn= document.getElementById('next-btn')
function show(){
    for(let i=0 ; i<Questions[j].answer.length; i++){
        let qst= document.getElementById('Question');

        let btn= document.getElementsByClassName('answer');
        qst.innerHTML=Questions[j].quetstion;
        btn[i].innerHTML=Questions[j].answer[i]
    } 
    j++   
}
next_btn.onclick=show;
