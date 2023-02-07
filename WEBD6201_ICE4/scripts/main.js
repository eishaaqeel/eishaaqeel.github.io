/*
  Name: Eisha Aqeel
  Date: Febuary 5, 2023
  Description: Java Script main file for the WEBD6201 Demo's
*/

(function () {

    function DisplayHome(){
        //assign "RandomButton" from the index page to randomButton 
        let randomButton = document.getElementById("RandomButton")
        //listen for when this button is clicked, then use the functon go to the location
        randomButton.addEventListener("click", function(){
            //location.href = './projects.html'
            window.location.href = "projects.html";
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

        /*
        //The following two lines were for testing contact.js
        //and will work if <script src="./scripts/contact.js"></script> is uncommented on the index.html page
        let eisha = new Contact("Eisha Aqeel", "2898925432", "eisha.hello.com")
        console.log(eisha.toString())
        */
    }

    function DisplayProjects(){
        //test to see if the following message displays in the console of the Projects page
        console.log("Projects Page")
    }

    function DisplayContactUs(){
        console.log("Contact Us Page")

        let submitButton = document.getElementById("submitButton")
        let subscribeCheckbox = document.getElementById("subscribeCheckbox")

        //LocalStorage Example:
        /*
        // localStorage.setItem("key", "value")
        localStorage.setItem("Random Variable", "random variable for testing and demonstration")
        // The value that was set for Random Variable above, will be displayed in the console
        console.log(localStorage.getItem("Random Variable"))
        // now remove "Random Variable" from localStorage,
        localStorage.removeItem("Random Variable")
        // after it's removed it will show as null in console
        console.log(localStorage.getItem("Random Variable"))
        */

        submitButton.addEventListener("click", function(event){
            event.preventDefault()
            if(subscribeCheckbox.checked){
                console.log("User has subscribed")
            }
        })
    }

    function DisplayContactList(){
        console.log("Contact List Page")
    }

    function DisplayReferences(){
        console.log("References Page")
    }

    function Start() {
        console.log("App Started!")

        //switch case statment
        switch (document.title){
            //in the case of the webpage title being "Home - WEBD6201 Demo"
            case "Home - WEBD6201 Demo":
                DisplayHome()
                break
            //in the case of the webpage title being "Projects - WEBD6201 Demo"
            case "Projects - WEBD6201 Demo":
                DisplayProjects()
                break
            case "Contact Us - WEBD6201 Demo":
                DisplayContactUs()
                break
            case "Contact List - WEBD6201 Demo":
                DisplayContactList()
                break
            case "References - WEBD6201 Demo":
                DisplayReferences()
                break
        }
    }

    //when the window loads, run the Start function
    window.addEventListener("load", Start)
})()