(function () {

    function DisplayButton(){
        //assign "RandomButton" from the index page to randomButton 
        let randomButton = document.getElementById("RandomButton")
        //listen for when this button is clicked, then use the functon go to the location
        randomButton.addEventListener("click", function(){
            location.href = "./projects.html"
        })

        let mainContent = document.getElementsByTagName("main")[0]
        mainContent.setAttribute("class", "container")

        //create an paragraph element,
        let mainParagraph = document.createElement("P")
        //set its attribute id to be "MainParagraph"
        mainParagraph.setAttribute("id", "MainParagraph")
        //add another attribute, to make it look better
        mainParagraph.setAttribute("class", "mt-3 container")

        /**
         * concatenation: '1' + '2' + '3'
         * interpolation: `${var_1}`
         */
        //set the following strings as the attributes content, using template literals such as ${firstString}
        let firstString = "This is a "
        //use backtick on keyboard ``
        let secondString = `${firstString} mian paragraph that we added through javascript`
        // textContent :- changes text node
        mainParagraph.textContent = secondString

        //append mainParagraph to the page (before the form)
        //mainContent.before(mainParagraph)

        //append mainParagraph to the page (after the form child)
        mainContent.appendChild(mainParagraph)

        //to remove/hide an element
        //document.getElementById("RandomButton").remove()

        // innnerHTML :- overwrites anything in the innerHTML of that element (so everthing before will dissapear)
        /* 
        documentBody = document.body    //another way to access the body element
        documentBody.innerHTML = `
            <div class="container">
                <h1 class="display-1"> Hello World, </h1>
                <p class="mt-5 lead"> this is what innnerHTML does</p>
            </div>
        ` 
        */
    }

    function Start() {
        console.log("App Started!")

        //switch case statment
        switch (document.title){
            //in the case of the webpage title being "Home - WEBD6201 Demo"
            case "Home - WEBD6201 Demo":
                DisplayButton()
                break
            //in the case of the webpage title being "Projects - WEBD6201 Demo"
            case "Projects - WEBD6201 Demo":
                DisplayButton()
                break
        }
    }

    //when the window loads, run the Start function
    window.addEventListener("load", Start)
})()