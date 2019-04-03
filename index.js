//UI LOgic
function checkanswer() {
    var q1 = document.questionForm.question1.value;
    var q2 = document.questionForm.question2.value;
    var q3 = document.questionForm.question3.value;
    var q4 = document.questionForm.question4.value;
    var q4 = document.questionForm.question5.value;
    var markscounter = 0;
    //BUSINESS LOGIC
    if (q1 == "c") {
        markscounter++;
    }
    if (q2 == "b") {
        markscounter++;
    }
    if (q3 == "a") {
        markscounter++;
    }
    if (q4 == "a") {
        markscounter++;
    }
    if (q5 == "c") {
        markscounter++;
    }
    alert("YOUR SCORE IS " + markscounter + " PERCENT")
}

