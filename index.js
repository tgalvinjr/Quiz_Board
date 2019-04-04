//UI LOgic
$(document).ready(function () {
    $(".questions").submit(function (event) {
        let score = 0;
        event.preventDefault();
        var q1 = $("input[name='question1']:checked").val();

        var q2 = $("input[name='question2']:checked").val();

        var q3 = $("input[name='question3']:checked").val();

        var q4 = $("input[name='question4']:checked").val();

        var q5 = $("input[name='question5']:checked").val();

        score = addScore(q1) + addScore(q2) + addScore(q3) + addScore(q4) + addScore(q5);
        $("#results").text("YOUR SCORE IS " + score + " PERCENT");

    });



    //BUSINESS LOGIC
    function addScore(params) {
        var markscounter = 0;
        if (params === "c") {//UI LOgic
            function checkanswer() {
                var q1 = document.questionForm.question1.value;
                var q2 = document.questionForm.question2.value;
                var q3 = document.questionForm.question3.value;
                var q4 = document.questionForm.question4.value;
                var q5 = document.questionForm.question5.value;
                var markscounter = 0;
                //BUSINESS LOGIC
                if (q1 == "Hyper Text Markup Language") {
                    markscounter++;
                }
                if (q2 == "The home page") {
                    markscounter++;
                }
                if (q3 == "Quotation marks") {
                    markscounter++;
                }
                if (q4 == "Opening") {
                    markscounter++;
                }
                if (q5 == "Two") {
                    markscounter++;
                }
                alert("YOUR SCORE IS " + markscounter + " PERCENT")
            }
            
            
            markscounter += 20;
        }
        if (params === "b") {
            markscounter+=20;
        }
        if (params === "a") {
            markscounter+=20;
        }
        if (params === "a") {
            markscounter+=20;
        }
        if (params === "c") {
            markscounter+=20;
        }
        return markscounter;
    }



});
