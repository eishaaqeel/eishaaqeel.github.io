/**
 * @author Eisha Aqeel #, Angelica Kusik #100849912
 * @version 2.0.0
 * @since February 10, 2023
 * @description WEBD6201 Lab 1 Functionality
 * 
 */

(function () {
    //for testing purposes:
    console.log("Page loaded")


    function DisplayHomePage() {

        /*** Home Section ****/

        //Get the home-section column elements:
        let homeleftColumn =  document.getElementById("home-left-col")
        let homeRightColumn = document.getElementById("home-right-col")

        //Create text elements + button + img
        let homeHeading1 = document.createElement("h1")
        let homeHeading2 = document.createElement("h4")
        let homeParagraph = document.createElement("p")
        let homeButton = document.createElement("a")
        let homeImg = document.createElement("img")

        //Add some classes to the text elements to style them
        homeHeading1.setAttribute("class", "mt-5 pt-5 display-1")
        homeHeading2.setAttribute("class", "mt-4")
        homeParagraph.setAttribute("class", "lead mt-3")
        homeButton.setAttribute("class", "btn btn-outline-success btn-lg text-white")

        //Declare string variables to hold text content for text elements
        let homeTitle = "Building the Future"
        let subTitle = "One line of code at a time"
        let homeText = "Hi! We are two computer programming students keen to use our skills to build modern web applications for your company that will help you wow your clients and drive more business."

        //Add string to elements
        homeHeading1.textContent = homeTitle
        homeHeading2.textContent = subTitle
        homeParagraph.textContent = homeText
        homeButton.textContent = "Learn More"

        //set buttons href attribute & img src
        homeButton.href = "./about.html"
        homeImg.src = "./Content/Images/Picture2.png"
        homeImg.alt = "Ghost Image"

        //Append elements to the left column
        homeleftColumn.appendChild(homeHeading1)
        homeleftColumn.appendChild(homeHeading2)
        homeleftColumn.appendChild(homeParagraph)
        homeleftColumn.appendChild(homeButton)

        //Append elements t the right column
        homeRightColumn.appendChild(homeImg)

        /*** What We Do Section ****/

        //Get the what-we-do-section column elements:
        let wwdleftColumn =  document.getElementById("wwd-left-col")
        let wwdRightColumn = document.getElementById("wwd-right-col")

         //Create text elements + button + img
         let wwdImg = document.createElement("img")
         let wwdCiteTag = document.createElement("cite")
         let wwdCiteAnchor = document.createElement("a")
         let wwdHeading1 = document.createElement("h1")
         let wwdParagraph1 = document.createElement("p")
         let wwdParagraph2 = document.createElement("p")
         let wwdButton = document.createElement("a")

        //Add some classes to the elements to style them
        wwdImg.setAttribute("class", "img-fluid")
        wwdHeading1.setAttribute("class", "display-2")
        wwdParagraph1.setAttribute("class", "lead mt-3")
        wwdParagraph2.setAttribute("class", "lead mt-3")
        wwdButton.setAttribute("class", "btn btn-success btn-lg text-dark")

        //Declare string variables to hold text content for text elements
        let wwdTitle = "What We Do"
        let wwdText1 = "We are full-stack web developers ready to build the perfect solution for your company. Front-end, back-end, we can do it all."
                    + "Get ready to take your business to the next level with fast, modern, responsive web applications that are sure to impress your clients."
        let wwdtext2 = "Click on the button below to check out some of our latest projects."
        let citeText = "Image Source:"

        //set buttons href attribute & img src
        wwdImg.src = "./Content/Images/MicrosoftTeams-image.png"
        wwdImg.alt = "Technologies Image"
        wwdCiteAnchor.href = "https://unsplash.com/"
        wwdCiteAnchor.target = "_blank"
        wwdCiteAnchor.rel = "noopener"
        wwdCiteAnchor.textContent = " ADD IMAGE SOURCE"
        wwdButton.href = "./projects.html"
        

        //Add string to elements
        wwdHeading1.textContent = wwdTitle
        wwdParagraph1.textContent = wwdText1
        wwdParagraph2.textContent = wwdtext2
        wwdCiteTag.textContent = citeText
        wwdButton.textContent = "See Projects"

        //Append elements to the left column
        wwdleftColumn.appendChild(wwdImg)
        wwdleftColumn.appendChild(wwdCiteTag)
        wwdCiteTag.appendChild(wwdCiteAnchor)


        //Append elements t the right column
        wwdRightColumn.appendChild(wwdHeading1)
        wwdRightColumn.appendChild(wwdParagraph1)
        wwdRightColumn.appendChild(wwdParagraph2)
        wwdRightColumn.appendChild(wwdButton)

        //Lastly add footer to page
        DisplayFooter()

    }





    /**** Footer ******/

    /*
    * DisplayFooter
    * Creates a footer element (instead of using a Navbar element I decided to use a footer because I thought it would be more descriptive, navbars are usually
    * used at the top of the page, but I added the fixed-bottom class as required.) - Angelica
    */
    
    function DisplayFooter() {

        let footerSection = document.createElement("section")
        //Set the class and id attributes
        footerSection.setAttribute("id", "footer")
        footerSection.setAttribute("class", "text-center text-white pt-2 fixed-bottom")
        //Add footer content
        footerSection.innerHTML = '<div class="container-fluid">' 
                                + '<p class="">Copyright &copy; <span id="year"></span></p>' 
                                + '<p>Build with <i class="fa-sharp fa-solid fa-heart"></i> by <a class="footer-signature" '
                                + 'href="https://www.linkedin.com/in/angelica-kusik/" target="_blank">Eisha Aqeel &amp; Angelica Kusik</a></p>'
                                + '</div>';
        
        // get the page body tag - we only have one but because getElementByTagName returns an array I added the [0]
        let pageBody = document.getElementsByTagName("body")[0]

        pageBody.appendChild(footerSection)

        //Dinamically getting the value of "year" for the footer
        $('#year').text(new Date().getFullYear());

    }


    
    /**** On Load ******/
    function Start() {

        switch (document.title) {
          case "Lab 1 - Home Page":
            DisplayHomePage()
            break;
          case "About - WEBD6201 Demo":
            DisplayAbout()
            break;
          case "Contact List - WEBD6201 Demo":
            DisplayContactList()
            break;
          case "Contact Us - WEBD6201 Demo":
            DisplayContacts()
            break;
          case "Projects - WEBD6201 Demo":
            DisplayProjects()
            break;
          case "References - WEBD6201 Demo":
            DisplayReferences()
            break;
          case "Services - WEBD6201 Demo":
            DisplayServices()
            break;
          default:
          // code block
        }
      }



      //When document loads for the first time, call the Start function
      window.addEventListener("load", Start)
      
})()