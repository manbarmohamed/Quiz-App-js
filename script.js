let Questions = [
    {
        question: "What is the correct declaration of an array in Java?",
        answer: [
            "a) array int[] myArray;",
            "b) int[] myArray;",
            "c) myArray int[];",
            "d) int myArray[];",
        ],
        correct: "b) int[] myArray;"
    },
    {
        question: "How do you initialize an array in Java with literal values?",
        answer: [
            "a) int[] myArray = new int[] {1, 2, 3, 4, 5};",
            "b) int[] myArray = {1, 2, 3, 4, 5};",
            "c) int myArray = {1, 2, 3, 4, 5};",
            "d) int myArray[] = {1, 2, 3, 4, 5};",
        ],
        correct: "b) int[] myArray = {1, 2, 3, 4, 5};"
    },
    {
        question: "Which method is used to obtain the length of an array in Java?",
        answer: [
            "a) size()",
            "b) length()",
            "c) size",
            "d) length",
        ],
        correct: "d) length"
    },
    {
        question: "How do you fill an array with random values in Java?",
        answer: [
            "a) Use the Random class",
            "b) Use the Scanner class",
            "c) Use the Math class",
            "d) None of the above",
        ],
        correct: "a) Use the Random class"
    },
    {
        question: "What is the method to access an element of an array in Java?",
        answer: [
            "a) array.get(index)",
            "b) array[index]",
            "c) array.access(index)",
            "d) array.getItem(index)",
        ],
        correct: "b) array[index]"
    },
    {
        question: "What is the syntax to declare and initialize an array of integers with 5 elements in Java?",
        answer: [
            "a) int[5] myArray;",
            "b) int myArray[5];",
            "c) int[] myArray = new int[5];",
            "d) int[] myArray = {1, 2, 3, 4, 5};",
        ],
        correct: "c) int[] myArray = new int[5];"
    },
    {
        question: "How do you access the last element of an array named 'myArray' in Java?",
        answer: [
            "a) myArray[last];",
            "b) myArray[length - 1];",
            "c) myArray[end];",
            "d) myArray[5];",
        ],
        correct: "b) myArray[length - 1];"
    },
    {
        question: "How do you iterate through all elements of an array named 'myArray' in Java?",
        answer: [
            "a) for (int i = 0; i < myArray.size(); i++)",
            "b) for (int i = 0; i < myArray.length; i++)",
            "c) for (int i : myArray)",
            "d) foreach (int i : myArray)",
        ],
        correct: "b) for (int i = 0; i < myArray.length; i++)"
    },
    {
        question: "Which method is used to copy elements from one array to another in Java?",
        answer: [
            "a) System.copyArray()",
            "b) Arrays.copyOf()",
            "c) arrayCopy()",
            "d) array.clone()",
        ],
        correct: "b) Arrays.copyOf()"
    },
    {
        question: "Which method is used to sort elements of an array in Java?",
        answer: [
            "a) Arrays.sort()",
            "b) Array.sort()",
            "c) sort()",
            "d) Collections.sort()",
        ],
        correct: "a) Arrays.sort()"
    },
]


let score = 0
let nextscore = document.getElementById("next-score")
let qst = document.getElementById("Question")
let answerbuttons = document.getElementById("answer-buttons")
let btns = document.getElementById("btns")
let count = document.getElementById("count")
let i = 0


function getData() {
    if (i == Questions.length) {
        answerbuttons.innerHTML =
            `<a href="" id="reload">Reload`
    } else {
        for (let j = 0; j < Questions[i].answer.length; j++) {
            qst.innerHTML = Questions[i].question
            answerbuttons.innerHTML +=
                `<button class="answer" id="b1">${Questions[i].answer[j]}</button>`
        }
        count.innerHTML = `<p>${i + 1}  of ${Questions.length} Questions </p>`;
    }
}
getData();
function Change() {
    document.querySelectorAll(".answer").forEach((e) => {
        e.addEventListener("click", function () {
            answerbuttons.innerHTML = ""
            qst.innerHTML = ""
            if (this.innerHTML == Questions[i].correct) {
                score += 20;
                nextscore.innerHTML =
                    `<p>Your Score is ${score} </p>`;
            }
            i++;
            let mid = (20*Questions.length)/2
            console.log(mid);
            if (score >= mid) {
                qst.innerHTML = "congratulation"
                nextscore.style.backgroundColor = "#74E291";

            }
            else {
                qst.innerHTML = "You Lose!! try again"
                nextscore.style.backgroundColor = "red";
            }
            getData();
            Change();
        })
    })
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



