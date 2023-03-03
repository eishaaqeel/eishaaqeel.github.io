/**
 * @author Eisha Aqeel #100798173, Angelica Kusik #100849912
 * @version 2.0.0
 * @since March 2, 2023
 * @description WEBD6201 Labs - Js Functionality
 * 
 */

//Create a JavaScript Class named User, in the same file (app.js) but above the IIFE
//This class includes firstName, lastName, email and password properties
class User{
  constructor(firstName, lastName, emailAddress, password){
    this.FirstName = firstName
    this.LastName = lastName
    this.Email = emailAddress
    this.Password = password
  }

  //format to string
  toString(){
    return `User Registered:\n First name = ${ this.FirstName } \n Last Name = ${ this.LastName } \n Email = ${ this.Email } \n Password = ${ this.Password } `
  }

}


(function () {
    //for testing purposes:
    console.log("Page loaded")

    //No matter which page loads, change products navbar link
    ChangeNavbarLink()


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

        //set buttons href attribute & img src
        wwdImg.src = "./Content/Images/WelcomeImage.png"
        wwdImg.alt = "Technologies Image"
        wwdCiteAnchor.href = "https://unsplash.com/"
        wwdCiteAnchor.target = "_blank"
        wwdCiteAnchor.rel = "noopener"
        wwdButton.href = "./projects.html"
        

        //Add string to elements
        wwdHeading1.textContent = wwdTitle
        wwdParagraph1.textContent = wwdText1
        wwdParagraph2.textContent = wwdtext2
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

        //Get the projects section col 
        let projactsCol = document.getElementById("projects-main-col")

        //Create col elements 
        let projectsHeading1 = document.createElement("h1")
        
        let cardImg1 = document.createElement("img")
        let cardImg2 = document.createElement("img")
        let cardImg3 = document.createElement("img")

        let cardTitle1 = document.createElement("h5")
        let cardTitle2 = document.createElement("h5")
        let cardTitle3 = document.createElement("h5")

        let cardParagraph1 = document.createElement("p")
        let cardParagraph2 = document.createElement("p")
        let cardParagraph3 = document.createElement("p")


        //Add some attributes to elements to style them
        projectsHeading1.setAttribute("class", "mt-3 pt-5 display-2 text-center")

        cardImg1.setAttribute("class", "card-img-top card-image-size")
        cardImg2.setAttribute("class", "card-img-top card-image-size")
        cardImg3.setAttribute("class", "card-img-top card-image-size")

        cardTitle1.setAttribute("class", "card-title")
        cardTitle2.setAttribute("class", "card-title")
        cardTitle3.setAttribute("class", "card-title")

        cardParagraph1.setAttribute("class", "card-text")
        cardParagraph2.setAttribute("class", "card-text")
        cardParagraph3.setAttribute("class", "card-text")


        //Declare string variables to hold the text value of text elements
        let projectsTitle = "Our Latest Projects"
        let card1Title = "Eisha's Web Development Project"
        let card1Text = "This is a web application meant for a business that needs "
                    + " a website where employees can access and manipulate customer information. The application connects to a Postgres database "
                    + " and implements security best practices such as password hashing, prepared statements, and more."
        let card2Title = "Angelica's TinDog Project"
        let card2Text = "TinDog Project is a responsive web application developed as a summer project for a fictitious startup that wanted to promote their" 
                    +" new product - a Tinder for dogs! This application implements a responsive layout using Bootstrap and custom CSS and looks great on any screen."
        let card3Title = "Payroll Calculator Web Application"
        let card3Text = "Payroll Calculator was a .Net development project we worked on where we created a complete ASP .NET MVC (Model View Controller) web application also using C# and Bootstrap."
                      + " This application allows you to calculate different employees' payrolls and store and edit their data."
        //Add text value to elements
        projectsHeading1.textContent = projectsTitle
        cardTitle1.textContent = card1Title
        cardTitle2.textContent = card2Title
        cardTitle3.textContent = card3Title
        cardParagraph1.textContent = card1Text
        cardParagraph2.textContent = card2Text
        cardParagraph3.textContent = card3Text

        //set buttons href attribute & img src
        cardImg1.src = "./Content/Images/EishaWebd3201.png"
        cardImg2.src = "./Content/Images/AngelicaTinDogProject.jpg"
        cardImg3.src = "./Content/Images/AngelicaWPFapplication.jpg"
        cardImg1.alt = "Eisha's Webd 3201 Project Dashboard Page"
        cardImg2.alt = "Angelica's TinDog Summer Project"
        cardImg3.alt = ".Net WPF Payroll Calculator"

        //Get cards and add image
        let card1 = document.getElementById("card1")
        card1.prepend(cardImg1)

        let card2 = document.getElementById("card2")
        card2.prepend(cardImg2)

        let card3 = document.getElementById("card3")
        card3.prepend(cardImg3)

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


        //Add elements to the page
        projactsCol.prepend(projectsHeading1)


        //Lastly add footer to page
        DisplayFooter()
    }

    function DisplayAboutUsPage() {

        /******* About Us Section *******/

        //Get the about section col 
        let aboutUsCol = document.getElementById("about-main-col")

        //Create col elements 
        let aboutUsHeading1 = document.createElement("h1")
        
        let cardImg1 = document.createElement("img")
        let cardImg2 = document.createElement("img")

        let cardTitle1 = document.createElement("h3")
        let cardTitle2 = document.createElement("h3")
        let cardSubTitle1 = document.createElement("h5")
        let cardSubTitle2 = document.createElement("h5")

        let cardParagraph1 = document.createElement("p")
        let cardParagraph2 = document.createElement("p")

        let socialIconsContainer1 = document.createElement("div")
        let socialIconsContainer2 = document.createElement("div")

        let linkedinIcon1 = document.createElement("div")
        let linkedinIcon2 = document.createElement("div")
        let gitHubIcon1 = document.createElement("div")
        let gitHubIcon2 = document.createElement("div")

        let downloadResume1 = document.createElement("a")
        let downloadResume2 = document.createElement("a")
        let downloadButton1Icon = document.createElement("i")
        let downloadButton2Icon = document.createElement("i")

        //Add some attributes to elements to style them
        aboutUsHeading1.setAttribute("class", "mt-3 pt-5 display-2 text-center")

        cardImg1.setAttribute("class", "img-fluid rounded-circle w-50 mb-3")
        cardImg2.setAttribute("class", "img-fluid rounded-circle w-50 mb-3")

        cardTitle1.setAttribute("class", "card-title")
        cardTitle2.setAttribute("class", "card-title")
        cardSubTitle1.setAttribute("class", "text-muted text-center")
        cardSubTitle2.setAttribute("class", "text-muted text-center")

        cardParagraph1.setAttribute("class", "card-text text-start")
        cardParagraph2.setAttribute("class", "card-text text-start")

        socialIconsContainer1.setAttribute("class", "d-flex justify-content-center")
        socialIconsContainer2.setAttribute("class", "d-flex justify-content-center")

        linkedinIcon1.setAttribute("class", "p-4")
        linkedinIcon2.setAttribute("class", "p-4")
        gitHubIcon1.setAttribute("class", "p-4")
        gitHubIcon2.setAttribute("class", "p-4")

        downloadResume1.setAttribute("class", "btn btn-outline-primary m-4 btn-lg")
        downloadResume2.setAttribute("class", "btn btn-outline-primary m-4 btn-lg")

        downloadButton1Icon.setAttribute("class", "fa-solid fa-ghost")
        downloadButton2Icon.setAttribute("class", "fa-solid fa-ghost")

        linkedinIcon1.innerHTML = "<a href='https://www.linkedin.com/in/eisha-aqeel/'><i class='fa-brands fa-linkedin'></i></a>" 
        linkedinIcon2.innerHTML = "<a href='https://www.linkedin.com/in/angelica-kusik/'><i class='fa-brands fa-linkedin'></i></a>" 
        gitHubIcon1.innerHTML = "<a href='https://github.com/eishaaqeel/eishaaqeel.github.io/'><i class='fa-brands fa-square-github'></i></a>" 
        gitHubIcon2.innerHTML = "<a href='https://github.com/AngelKusik'><i class='fa-brands fa-square-github'></i></a>" 

        //Declare string variables to hold the text value of text elements
        let aboutUsTitle = "About Us"
        let card1Title = "Eisha Aqeel"
        let card2Title = "Angelica Kusik"
        let card1SubTitle = "Full Stack Developer"
        let card2SubTitle = "Full Stack Developer"
        let card1Text = "Hello, my name is Eisha, and I am in my second year of studying Computer Programming and Analysis at Durham College. "
                      + "I am passionate about software and database development. Currently, I am looking for opportunities to use my skills to build real-world applications. "
                      + "Check out my resume below; I would be happy to intern for you this summer."
        let card2Text = "Hi! My name is Angelica Kusik and I am a computer programming student at Durham College, soon to graduate." 
                    + " I am excited to further my career in the software development industry and am actively seeking job opportunities in this field. I am confident that my experience, " 
                    + "both in academia and in the workforce, will make me a valuable asset to any company. I am eager to continue learning and growing as a developer and am excited to see where my passion for technology will take me."

        //Add text value to elements
        aboutUsHeading1.textContent = aboutUsTitle
        cardTitle1.textContent = card1Title
        cardTitle2.textContent = card2Title
        cardSubTitle1.textContent = card1SubTitle
        cardSubTitle2.textContent = card2SubTitle
        cardParagraph1.textContent = card1Text
        cardParagraph2.textContent = card2Text
        downloadResume1.textContent = " View Resume"
        downloadResume2.textContent = " View Resume" 

        //Add icons to socialIcon container
        socialIconsContainer1.appendChild(linkedinIcon1)
        socialIconsContainer1.appendChild(gitHubIcon1)

        socialIconsContainer2.appendChild(linkedinIcon2)
        socialIconsContainer2.appendChild(gitHubIcon2)

        downloadResume1.prepend(downloadButton1Icon)
        downloadResume2.prepend(downloadButton2Icon)

        //set buttons href attribute & img src
        cardImg1.src = "./Content/Images/EishaPic.jpg"
        cardImg2.src = "./Content/Images/AngelicaPic.jpg"
        cardImg1.alt = "Eisha Aqeel Profile Pic"
        cardImg2.alt = "Angelica Kusik Profile Pic"
        downloadResume1.href = "./Resume/Eisha_Resume.pdf"
        downloadResume2.href = "./Resume/angelicaKusikGeneralResume.pdf"

        //Get cards and add image
        let card1 = document.getElementById("about-card1")
        card1.prepend(cardImg1)

        let card2 = document.getElementById("about-card2")
        card2.prepend(cardImg2)

        //Get card body and add text elements
        let card1Body = document.getElementsByClassName("card-body")[0]
        card1Body.appendChild(cardTitle1)
        card1Body.appendChild(cardSubTitle1)
        card1Body.appendChild(cardParagraph1)
        card1Body.appendChild(downloadResume1)
        card1Body.appendChild(socialIconsContainer1)

        let card2Body = document.getElementsByClassName("card-body")[1]
        card2Body.appendChild(cardTitle2)
        card2Body.appendChild(cardSubTitle2)
        card2Body.appendChild(cardParagraph2)
        card2Body.appendChild(downloadResume2)
        card2Body.appendChild(socialIconsContainer2)


        //Add elements to the page
        aboutUsCol.prepend(aboutUsHeading1)

        //Lastly add footer to page
        DisplayFooter()
    }

    function DisplayServicesPage() {
      /******* Services Section *******/

        //Get the services section coloum by Id defined in services.html
        let servicesCol = document.getElementById("services-main-col")

        //define element for the Services page Heading
        let servicesHeading = document.createElement("h1")
        //define variables for the service page images, titles, and description paragraphs
        let serviceImg1 = document.createElement("img")
        let serviceImg2 = document.createElement("img")
        let serviceImg3 = document.createElement("img")

        let serviceTitle1 = document.createElement("h5")
        let serviceTitle2 = document.createElement("h5")
        let serviceTitle3 = document.createElement("h5")

        let serviceParagraph1 = document.createElement("p")
        let serviceParagraph2 = document.createElement("p")
        let serviceParagraph3 = document.createElement("p")

        //Add some attributes to elements to style them
        servicesHeading.setAttribute("class", "mt-3 pt-5 display-2 text-center")

        serviceImg1.setAttribute("class", "card-img-top card-image-size")
        serviceImg2.setAttribute("class", "card-img-top card-image-size")
        serviceImg3.setAttribute("class", "card-img-top card-image-size")

        serviceTitle1.setAttribute("class", "card-title")
        serviceTitle2.setAttribute("class", "card-title")
        serviceTitle3.setAttribute("class", "card-title")

        serviceParagraph1.setAttribute("class", "card-text")
        serviceParagraph2.setAttribute("class", "card-text")
        serviceParagraph3.setAttribute("class", "card-text")

        //Declare string variables to hold the text value of text elements
        let servicePageTitle = "Our Services"
        let service1Title = "Frontend Development"
        let service1Text = "We offer front-end development using HTML5, CSS3, JavaScript, and more. With our front-end development, your website will look stunning."
        let service2Title = "Backend Development"
        let service2Text = "We offer backend development using the most in-demand programming languages such as Python, Java, and PHP."
                          + " We also use PostgreSQL to give your data a safe home. With our backend development, your website will function smoothly."
        let service3Title = "Software Testing"
        let service3Text = "We can perform unit tests, functional tests, and performance tests, so your website has no issues in the future."
        //Add text value to elements
        servicesHeading.textContent = servicePageTitle
        serviceTitle1.textContent = service1Title
        serviceTitle2.textContent = service2Title
        serviceTitle3.textContent = service3Title
        serviceParagraph1.textContent = service1Text
        serviceParagraph2.textContent = service2Text
        serviceParagraph3.textContent = service3Text

        //set the image source locations and thier alt texts
        serviceImg1.src = "./Content/Images/frontendDev.png"
        serviceImg2.src = "./Content/Images/backendDev.png"
        serviceImg3.src = "./Content/Images/softwareTesting.png"
        serviceImg1.alt = "Service 1 - Frontend Development"
        serviceImg2.alt = "Service 2 - Backend Development"
        serviceImg3.alt = "Service 3 - Software Testing"

        //Add service images to html using javaScript
        let service1 = document.getElementById("service1")
        service1.prepend(serviceImg1)

        let service2 = document.getElementById("service2")
        service2.prepend(serviceImg2)

        let service3 = document.getElementById("service3")
        service3.prepend(serviceImg3)

        //Add service tile and description paragrahss to html using javaScript
        let card1Body = document.getElementsByClassName("card-body")[0]
        card1Body.appendChild(serviceTitle1)
        card1Body.appendChild(serviceParagraph1)

        let card2Body = document.getElementsByClassName("card-body")[1]
        card2Body.appendChild(serviceTitle2)
        card2Body.appendChild(serviceParagraph2)

        let card3Body = document.getElementsByClassName("card-body")[2]
        card3Body.appendChild(serviceTitle3)
        card3Body.appendChild(serviceParagraph3)

        //Add services Heading to the page
        servicesCol.prepend(servicesHeading)

        //Lastly add footer to page
        DisplayFooter()
    }

    function DisplayContactUsPage() {
        
      /******* Contact Us Section *******/
        //Contant Us Heading
        //Get the contact-main-col by Id defined in contact.html
        let contactUsCol = document.getElementById("contact-main-col")
        //Create h1 element for the Contact Us page Heading
        let contactUsHeading = document.createElement("h1")
        //Style the contactUsHeading
        contactUsHeading.setAttribute("class", "mt-3 pt-5 display-2 text-center")
        //Declare servicePageTitle the varible that holds the string title
        let servicePageTitle = "Contact Us"
        //Add servicePageTitle value to the contactUsHeading HTML element
        contactUsHeading.textContent = servicePageTitle
        //Add contact us Heading to the web page
        contactUsCol.prepend(contactUsHeading)

        //get submit button
        let submitButton = document.getElementById("submitButton")
        
        //add event listener to form's submit button
        submitButton.addEventListener("click", function (event) {
            event.preventDefault()
            let contact = new Contact(fullName.value, contactNumber.value, emailAddress.value, message.value)
            console.log(contact.toString())

            //redirect after 3 seconds
            window.setTimeout(function() {
                url = './index.html'
                location.href = url;
                }, 3000);
        })

        //Lastly add footer to page
        DisplayFooter()
    }

    function DisplayHumanResourcesPage() {

        //Lastly add footer to page
        DisplayFooter()
    }

    function DisplayLoginPage() {

      // Validate information entered on the Login Form

      //create a div element with an id of "ErrorMessage" 
      //This will be used to display errors if the user enters invalid data in the input fields of the LoginForm.
      let registerPageErrors = document.createElement("div")
      registerPageErrors.setAttribute("id", "ErrorMessage")
      //add this ErrorMessage box before "mainContent"
      let pageBody = $("#mainContent")
      pageBody.prepend(registerPageErrors)

      //Call method to validate all inputs on this page
      LoginFormValidate();

      // Get submitButton from Login Page form
      let submitButton = document.getElementById("submitButtonLogin")

      // Get the username
      let username = ""
      let password = ""

      //add event listener for when the user clicks on the Register button
      submitButton.addEventListener("click", function (event) {

        username = $("#userName").val()
        password = $("#password").val()

        let previousUsername = $("#usernameLi")
        previousUsername.text(" ")         

        //prevent the default form behaviour (so it won't submit the form)
        event.preventDefault()

        if(username == "" || password == "")
        {
          //and then add the following class to #messageArea box, and show the  specific exception
          $('#ErrorMessage').addClass("alert alert-danger").text("You must fill out all fields.").show()
          
        } else { 
          // Get the username li element from the navbar if it's there from previous user and remove it
          let previousUsername = $("#usernameLi")
          previousUsername.remove();          

          //console.log(username)

          //Create a li element to insert the username in the navbar 
          let usernameLi = document.createElement("li")
          usernameLi.setAttribute("class", "nav-item navbar-text")
          usernameLi.setAttribute("id", "usernameLi")

          //Set the text property of the li to show the username
          usernameLi.innerHTML = username

          //Get the contact us li element from the navbar
          let contactUs = $(".navbar-nav li:nth-last-child(2)")

          //Insert the username link before it
          contactUs.after(usernameLi)

          //Finally, clear the form
          document.getElementById("loginForm").reset();
          }        
      })


      // add footer to page
      DisplayFooter()
    }

    function DisplayRegisterPage() {
      //create a div element with an id of "ErrorMessage" 
      //This will be used to display errors if the user enters invalid data in the input fields of the registerForm.
      let registerPageErrors = document.createElement("div")
      registerPageErrors.setAttribute("id", "ErrorMessage")
      //add this ErrorMessage box before "mainContent"
      let pageBody = document.getElementById("mainContent")
      pageBody.prepend(registerPageErrors)

      //get the Register button
      let registerButton = document.getElementById("submitButton")
      //let registerButton = $("#submitButton")

      //Call method to validate all inputs on this page. If validation is successfull let user register
      RegisterFormValidate()      
      
      //add event listener for when the user clicks on the Register button
      registerButton.addEventListener("click", function (event) {
        //prevent the default form behaviour (so it won't submit the form)
        let confirmPassword = $("#confirmPassword").val()
        //console.log(confirmPassword)
        event.preventDefault()
        if(firstName.value == "" || lastName.value == "" || emailAddress.value == "" || password.value == "" || confirmPassword == "")
        {
          //and then add the following class to #messageArea box, and show the  specific exception
          $('#ErrorMessage').addClass("alert alert-danger").text("You must fill out all fields.").show()
          
        } else { 
          //Create an instance of the User class and display it in the console
          //firstName, lastName, emailAddress, and password are from register.html
          let user = new User(firstName.value, lastName.value, emailAddress.value, password.value)
            console.log(user.toString())
          //Finally, clear the form
          document.getElementById("registerForm").reset();
        }
        
      })

      //Add footer to page
      DisplayFooter()
    }

    //Validate Input function that takes in the id of the input field, the regex, and the exception message
    function ValidateInput(inputFieldID, regularExpression, exception){
      //ErrorMessage should be hidden when the user first navigates to the register.html page
      let messageArea = $('#ErrorMessage').hide()

      $('#' + inputFieldID).on("blur", function(){
          let inputText = $(this).val()
          //test to see if the inputText doesn't match the regex pattern,
          if(!regularExpression.test(inputText)) {
              $(this).trigger("focus").trigger("select")
              //and then add the following class to #messageArea box, and show the  specific exception
              messageArea.addClass("alert alert-danger").text(exception).show()

              //disable register button
              $("#submitButton").prop('disabled', true);
          } else{
              //else, inputText matches the regex pattern so remove the class and hide the box
              messageArea.removeAttr("class").hide()

              // enable register button
              $("#submitButton").prop('disabled', false);
          }
      })
    }

    //Validate the Register Page Form using specific regex patterns and our ValidateInput function 
    function RegisterFormValidate(){

      //For the names: No whitespaces \S and at minimum length is 2 characters \w with {1}
      let firstNamePattern = /^[\w\S]{1}[\w\S]+$/g
      let lastNamePattern = /^[\w\S]{1}[\w\S]+$/g

      //Email minimum length is 8 and an @ symbol has to be present
      //To make the length at least 8 character, I'm making users input at least 2 character before the @, after the @, and after the dot.
      //Valid email example:  xx@xx.xx
      let emailAddressPattern = /^([\w-\.]{2,})+@(([\w-]{2,})+\.)+[\w-][\D]{1,10}$/g

      //Password should 6 or more characters in length and the dot means that the password can contain any type of characters
      let passwordPattern = /^.{6,}$/g
      //Both the Password and Confirm password inputs should be the same string
      //let confirmPasswordPattern = passwordPattern

      ValidateInput("firstName", firstNamePattern,  "Please enter a valid First Name. It must contain least 2 characters and no blank spaces.")
      ValidateInput("lastName", lastNamePattern, "Please enter a valid Last Name. It must contain least 2 characters and no blank spaces.")
      ValidateInput("emailAddress", emailAddressPattern, "Please enter a valid Email Address with 8 or more characters with the format: xx@xx.ca") 
      ValidateInput("password", passwordPattern, "Please enter a valid Password with at least 6 characters.") 
      ConfirmPasswordValidate("password", "confirmPassword", "Confirm Password has to match the Password entered.")

    }

    function ConfirmPasswordValidate(passwordId, confirmPasswordId, exception) {

      //ErrorMessage should be hidden when the user first navigates to the register.html page
      let messageArea = $('#ErrorMessage').hide()

      $('#' + confirmPasswordId).on("blur", function(){
        let password = $('#' + passwordId).val()
        let confirmPassword = $(this).val()

        //check if password and confirm password are the same
        if(password != confirmPassword) {
            $(this).trigger("focus").trigger("select")

            //and then add the following class to #messageArea box, and show the  specific exception
            messageArea.addClass("alert alert-danger").text(exception).show()

            //disable register button
            $("#submitButton").prop('disabled', true);

        } else{
            //else, confirmPassword matches password, so remove the class and hide the box
            messageArea.removeAttr("class").hide()

            // enable register button
            $("#submitButton").prop('disabled', false);
        }
      })
    }

    //Validate the Login Page Form using specific regex patterns and our ValidateInput function 
    function LoginFormValidate(){

      //For the username: First letter must be capitalized, minimum 2 characters, accepts only first name, or
      // full name separated by spaces, comma or dash. No numbers or special characters allowed.
      let fullNamePattern =  /^([A-Z][a-z]{1,25})((\s|,|-)([A-Z][a-z]{1,}))*(\s|,|-)*([A-Z][a-z]{1,})*$/g
      //Password should 6 or more characters in length and the dot means that the password can contain any type of characters
      let loginPasswordPattern = /^.{6,}$/g
    
      ValidateInput("userName", fullNamePattern, "Please enter a valid username. Username must have first letter capitalized.")
      ValidateInput("password", loginPasswordPattern, "Please enter a valid Password with at least 6 characters.")
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
                                + 'href="https://www.linkedin.com/in/angelica-kusik/" target="_blank">Angelica Kusik '
                                + '&amp; '
                                + '<a class="footer-signature" href="https://www.linkedin.com/in/eisha-aqeel/" target="_blank">Eisha Aqeel'
                                + '</a></p>'
                                + '</div>';
        
        // get the page body tag - we only have one but because getElementByTagName returns an array I added the [0]
        let pageBody = document.getElementsByTagName("body")[0]

        pageBody.appendChild(footerSection)

        //Dinamically getting the value of "year" for the footer
        $('#year').text(new Date().getFullYear());

    }

    function ChangeNavbarLink() {
        //Changing the products link:
        //Get the products list item from the navbar
        let productsLink = document.getElementsByClassName("nav-link")[1]
        //Change href to projects
        productsLink.setAttribute("href", "projects.html")
        //Change text content and icon
        productsLink.innerHTML = "<i class='fa-solid fa-briefcase'></i> Projects"

        //Adding the new hr link to the navbar
        //Create the li element
        let hrLink = document.createElement("li")
        hrLink.setAttribute("class", "nav-item")

        //Create the a tag that goes within the hrLink
        let hrAnchor = document.createElement("a")
        hrAnchor.setAttribute("class", "nav-link")
        hrAnchor.href = "human-resources.html"
        hrAnchor.innerHTML = "<i class='fa-solid fa-people-group'></i> Human Resources" 

        //Add the a to the li 
        hrLink.appendChild(hrAnchor)

        //Make HR link show before the navbar's second last link
        let aboutLink = $(".navbar-nav li:nth-last-child(2)")
        //insert hr link before it
        aboutLink.before(hrLink)
    }

    
    /**** On Load ******/
    function Start() {

        switch (document.title) {
          case "Home Page":
            DisplayHomePage()
            break;
          case "Projects Page":
            DisplayProjectsPage()
            break;
          case "About Us Page":
            DisplayAboutUsPage()
            break;
          case "Services Page":
            DisplayServicesPage()
            break;
          case "Contact Us Page":
            DisplayContactUsPage()
            break;
          case "Human Resources Page":
            DisplayHumanResourcesPage()
            break;
          case "Login Page":
            DisplayLoginPage()
            break;
          case "Register Page":
            DisplayRegisterPage()
            break;
          default:
          console.log("Something went wrong in the Start Function")
        }
      }

      //When document loads for the first time, call the Start function
      window.addEventListener("load", Start)
      
})()