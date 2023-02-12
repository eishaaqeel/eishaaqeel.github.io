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
        //Ghost Image retrieved from: https://www.pngaaa.com/detail/115465
        homeImg.src = "./Content/Images/GhostImageFromPngaaadetail115465.png"
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
                    + " Get ready to take your business to the next level with fast, modern, responsive web applications that are sure to impress your clients."
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

    function DisplayProjectsPage() {

        /******* Projects Section *******/

        let numberOfCards = 4

        //Get the projects section col 
        let projactsCol = document.getElementById("projects-main-col")

        //Create col elements 
        let projectsHeading1 = document.createElement("h1")
        
        let cardImg1 = document.createElement("img")
        let cardImg2 = document.createElement("img")
        let cardImg3 = document.createElement("img")
        let cardImg4 = document.createElement("img")

        let cardTitle1 = document.createElement("h5")
        let cardTitle2 = document.createElement("h5")
        let cardTitle3 = document.createElement("h5")
        let cardTitle4 = document.createElement("h5")

        let cardParagraph1 = document.createElement("p")
        let cardParagraph2 = document.createElement("p")
        let cardParagraph3 = document.createElement("p")
        let cardParagraph4 = document.createElement("p")


        //Add some attributes to elements to style them
        projectsHeading1.setAttribute("class", "mt-3 pt-5 display-2 text-center")

        cardImg1.setAttribute("class", "card-img-top card-image-size")
        cardImg2.setAttribute("class", "card-img-top card-image-size")
        cardImg3.setAttribute("class", "card-img-top card-image-size")
        cardImg4.setAttribute("class", "card-img-top card-image-size")

        cardTitle1.setAttribute("class", "card-title")
        cardTitle2.setAttribute("class", "card-title")
        cardTitle3.setAttribute("class", "card-title")
        cardTitle4.setAttribute("class", "card-title")

        cardParagraph1.setAttribute("class", "card-text")
        cardParagraph2.setAttribute("class", "card-text")
        cardParagraph3.setAttribute("class", "card-text")
        cardParagraph4.setAttribute("class", "card-text")


        //Declare string variables to hold the text value of text elements
        let projectsTitle = "Our Latest Projects"
        let card1Title = "Eisha's WEBD-3201 Project"
        let card1Text = "This is a website we worked on for Web Development Intermediate (WEBD-3201) using PHP."
        let card2Title = "Angelica's Tin Dog Project"
        let card2Text = "This was a Summer Project implemented using Bootstrap."
        let card3Title = "Card title"
        let card3Text = "This card has supporting text below as a natural lead-in to additional content."
        let card4Title = "Angelica's Writing for The Web Project"
        let card4Text = "This was a Web Project Developed for Durham College Professional and part-Time Learning."

        //Add text value to elements
        projectsHeading1.textContent = projectsTitle
        cardTitle1.textContent = card1Title
        cardTitle2.textContent = card2Title
        cardTitle3.textContent = card3Title
        cardTitle4.textContent = card4Title
        cardParagraph1.textContent = card1Text
        cardParagraph2.textContent = card2Text
        cardParagraph3.textContent = card3Text
        cardParagraph4.textContent = card4Text

        //set buttons href attribute & img src
        cardImg1.src = "./Content/Images/EishaWebd3201.png"
        cardImg2.src = "./Content/Images/AngelicaTinDogProject.jpg"
        cardImg3.src = "./Content/Images/MicrosoftTeams-image.png"
        cardImg4.src = "./Content/Images/AngelicaWritingForTheWebProject.jpg"
        cardImg1.alt = "Eisha's Webd 3201 Project Dashboard Page"
        cardImg2.alt = "Angelica's TinDog Summer Project"
        cardImg3.alt = "Technologies Image"
        cardImg4.alt = "Angelica's Writing for The Web Project"

        //Get cards and add image
        let card1 = document.getElementById("card1")
        card1.prepend(cardImg1)

        let card2 = document.getElementById("card2")
        card2.prepend(cardImg2)

        let card3 = document.getElementById("card3")
        card3.prepend(cardImg3)

        let card4 = document.getElementById("card4")
        card4.prepend(cardImg4)

        //Get card body and add text elements
        let card1Body = document.getElementsByClassName("card-body")[0]
        card1Body.appendChild(cardTitle1)
        card1Body.appendChild(cardParagraph1)

        let card2Body = document.getElementsByClassName("card-body")[1]
        card2Body.appendChild(cardTitle2)
        card2Body.appendChild(cardParagraph2)

        let card3Body = document.getElementsByClassName("card-body")[2]
        card3Body.appendChild(cardTitle3)
        card3Body.appendChild(cardParagraph3)

        let card4Body = document.getElementsByClassName("card-body")[3]
        card4Body.appendChild(cardTitle4)
        card4Body.appendChild(cardParagraph4)


        //Add elements to the page
        projactsCol.prepend(projectsHeading1)


        //Lastly add footer to page
        DisplayFooter()
    }

    function DisplayAboutUsPage() {

        //Lastly add footer to page
        DisplayFooter()
    }

    function DisplayServicesPage() {


        //Lastly add footer to page
        DisplayFooter()
    }

    function DisplayContactUsPage() {


        //Lastly add footer to page
        DisplayFooter()
    }

    function DisplayHumanResourcesPage() {

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
          case "Lab 1 - Projects Page":
            DisplayProjectsPage()
            break;
          case "Lab 1 - About Us Page":
            DisplayAboutUsPage()
            break;
          case "Lab 1 - Services Page":
            DisplayServicesPage()
            break;
          case "Lab 1 - Contact Us Page":
            DisplayContactUsPage()
            break;
          case "Lab 1 - Human Resources Page":
            DisplayHumanResourcesPage()
            break;
          default:
          console.log("Something went wrong in the Start Function")
        }
      }



      //When document loads for the first time, call the Start function
      window.addEventListener("load", Start)
      
})()