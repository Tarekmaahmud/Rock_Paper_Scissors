let choiceAllbox_js = document.querySelectorAll(".choice_cs");
let userScore_js = 0;
let compScore_js = 0;



choiceAllbox_js.forEach((i) => {
    i.addEventListener("click", () => {
        let user_choice_js = i.getAttribute("id");
        playGame(user_choice_js);
    })
})

let playGame = (user_choice_js) => {
    console.log("User Choice", user_choice_js);
    let Cmp_choice_js = compChoice_js();
    console.log("Computer Choice", Cmp_choice_js);

    if (user_choice_js === Cmp_choice_js) {
        console.log = ("game is draw");
    }
    else{
        if(user_choice_js=="Rock")
    }
}

let compChoice_js = () => {
    let choise_element = ["Rock", "Paper", "Scissors"];
    let Cmp_choice_js = Math.floor(Math.random() * 3);
    return choise_element[Cmp_choice_js];
}

/*
choiceAllbox_js.forEach(function (i) {
    i.addEventListener("click", function () {
        console.log("Clicked");
    })
})
*/