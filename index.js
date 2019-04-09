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
        let markscounter = 0;
        if (params === "Hyper Text Markup Language") {
            markscounter+=20;
        }
        if (params === "The home page") {
            markscounter+=20;
        }
        if (params === "Quotation marks") {
            markscounter+=20;
        }
        if (params === "Opening") {
            markscounter+=20;
        }
        if (params === "Two") {
            markscounter+=20;
        }
        return markscounter;
    }
});
