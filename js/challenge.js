document.addEventListener("DOMContentLoaded", () => {

    let minus = document.getElementById("minus");
    let plus = document.getElementById("plus");
    let heart = document.getElementById("heart");
    let pause = document.getElementById("pause");
    let counter = document.getElementById("counter");
    let comments = document.getElementById("list");
    let submit = document.getElementById("submit");
    let nIntervId;
    
    countUp();
    
    function count() {
        counter.innerText = parseInt(counter.innerText) + 1;
    };
    
    function countUp() {
      nIntervId = setInterval(count, 1000);
    };
 
    pause.addEventListener("click", () => {
        if (pause.innerText === "pause") {
            clearInterval(nIntervId);
            minus.disabled = true;
            plus.disabled = true;
            heart.disabled = true;
            submit.disabled = true;
            pause.innerText = "resume";
        } else {
            countUp();
            minus.disabled = false;
            plus.disabled = false;
            heart.disabled = false;
            submit.disabled = false;
            pause.innerText = "pause";
        }
    });

    minus.addEventListener("click", () => {
        counter.innerText = parseInt(counter.innerText) - 1;
    });

    plus.addEventListener("click", count);

    heart.addEventListener("click", () => {
        let likes = document.getElementsByClassName("likes")[0];
        let li = document.createElement("li");
        li.innerText = `${counter.innerText} has been liked`;
        likes.appendChild(li);
    });
  
    document.addEventListener("submit", function(e) {
        e.preventDefault()
        let newComment = document.getElementById("comment-input");
        let li = document.createElement("li");
        li.innerText = newComment.value;
        comments.appendChild(li);
        e.target.reset();
    });
});