let choiceAllbox_js = document.querySelectorAll(".choice_cs");
let msg_js = document.querySelector(".msg_cs");
let score_container_man_js = document.querySelector("#user_score_cs")
let score_container_comp_js = document.querySelector("#comp_score_cs")
let userScore_js = 0;
let compScore_js = 0;


choiceAllbox_js.forEach((i) => {
    i.addEventListener("click", () => {
        let user_choice_js = i.getAttribute("id");
        playGame(user_choice_js);
    })
})



let compChoice_js_fun = () => {
    let choise_element = ["rock", "paper", "scissors"];
    let randix = Math.floor(Math.random() * 3);
    return choise_element[randix];
};



let drawGame_js = () => {
    msg_js.innerText = "Game was Draw. Play again.";
    msg_js.style.backgroundColor = "#081b31"

};

let playGame = (user_choice_js) => {

    console.log("User Choice", user_choice_js);
    let Cmp_choice_js = compChoice_js_fun();
    console.log("Computer Choice", Cmp_choice_js);


    if (user_choice_js === Cmp_choice_js) {
        drawGame_js();
    }
    else {
        let userwin_js = true;
        if (user_choice_js === "rock") {
            if (Cmp_choice_js == "scissors") {
                userwin_js = true;
            }
            else {
                userwin_js = false;
            }
        }
        else if (user_choice_js === "paper") {
            if (Cmp_choice_js === "scissors") {
                userwin_js = false;
            }
            else {
                userwin_js = true;
            }
        }
        else {
            if (Cmp_choice_js === "rock") {
                userwin_js = false;
            }
            else {
                userwin_js = true;
            }
        }
        showWinner_js(userwin_js, Cmp_choice_js, user_choice_js);

    }

};

let showWinner_js = (userwin_js, Cmp_choice_js, user_choice_js) => {
    if (userwin_js) {
        userScore_js++;
        score_container_man_js.innerText = userScore_js;
        msg_js.innerText = `You win! Your ${user_choice_js} beats ${Cmp_choice_js}`;
        msg_js.style.backgroundColor = "green";
    }
    else {
        compScore_js++;
        score_container_comp_js.innerText = compScore_js;
        msg_js.innerText = `You lost. ${Cmp_choice_js} beats your ${user_choice_js}`;
        msg_js.style.backgroundColor = "red";
    }
}

/*
choiceAllbox_js.forEach(function (i) {
    i.addEventListener("click", function () {
        console.log("Clicked");
    })
})
*/