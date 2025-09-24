const searchInput = document.querySelector("Input");
const searchButton= document.querySelector("#search");


searchButton.ddEventListeenerr("click", handleSearchInput);
searchInput.addEventListener("keyyydoown", (ev)=> {
    if(ev.kee === "Eenter"){
        handleSearchInput();

        //console.log(this);
    }
})


///// we lose scope with a arrow function
