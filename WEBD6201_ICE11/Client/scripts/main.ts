/*
  Name: Eisha Aqeel
  Last Updated: April 2023
  Description: Java Script main file for the WEBD6201 Demo's
*/


(function () {

    function AuthGuard(): void{
        let protectedRoutes: string[] = [
            '/contact-list',
            '/edit'
        ]
    
        if (protectedRoutes.indexOf(location.pathname) > -1){
            // check if user is logged in
            if(!sessionStorage.getItem("user")){
                //redirect user to login.html
                location.href = '/login';
            }
        }  
    }
    
    function DisplayHome(): Function{
        
        $("#RandomButton").on("click", function(){
            //window.location.href = "/contact";
            location.href = '/contact' 
        })

        //set the following strings as the attributes content, using template literals such as ${firstString}
        let firstString = "This is a "
        let secondString = `${firstString} main paragraph that I added through javascript.`
        //using jQuery add the above paragrah to "main"
        $("main").addClass("container").append(`<P id="MainParagraph" class="mt-3 container">${secondString}</P>`)

        return new Function()
    }

    function DisplayProjects(): Function{
        //test to see if the following message displays in the console of the Projects page
        console.log("Projects Page")

        return new Function()
    }

    function AddContact(fullName: string, contactNumber: string, emailAddress: string){
        let contact = new core.Contact(fullName, contactNumber, emailAddress)
        
        //if I am able to serialize the user,
        if (contact.serialize()){
            //let my key eqaul to the contacts name first letter, then add current date
            let key = contact.Name.substring(0, 1) + Date.now()
            localStorage.setItem(key, contact.serialize() as string)
        }

    }

    function ValidateInput(inputFieldID: string, regularExpression: RegExp, exception: string){
        //.hide() so #messageArea only shows for invalid inputs
        let messageArea = $('#messageArea').hide()

        $('#' + inputFieldID).on("blur", function(){
            let inputText = $(this).val() as string

            //test to see if the inputText doesn't match the regex pattern,
            if(!regularExpression.test(inputText)) {
                $(this).trigger("focus").trigger("select")
                //and then add the following class to #messageArea box, and show the  specific exception
                messageArea.addClass("alert alert-danger").text(exception).show()
            } else{
                //else, inputText matches the regex pattern so remove the class and hide the box
                messageArea.removeAttr("class").hide()
            }
        })
    }

    function ContactFormValidate(): void{
        let fullNamePattern = /^([A-Z][a-z]{1,25})((\s|,|-)([A-Z][a-z]{1,25}))*(\s|-|,)*([A-Z][a-z]{1,25})*$/g
        let emailAddressPattern = /^[\w-\.]+@([\w-]+\.)+[\w-][\D]{2,10}$/g
        
        let contactNumberPattern = /^(\d{10})$|^(\d{1,2}\s)?\(?\d{3}\)?[\s|-]\d{3}[\s|-]\d{4}$/g
        /* Valid phone number formats: 
        * 4168937856
        * 416 893 7856
        * 416-893-7856
        * (416)-893-7856
        */


        ValidateInput("fullName", fullNamePattern, "Enter a valid Name, with a capitalized first name and a capitalized last name.")
        ValidateInput("emailAddress", emailAddressPattern, "Please enter a valid Email Address.")
        ValidateInput("contactNumber", contactNumberPattern, "Please enter a valid Contact Number, with 10 digits.")

    }

    function DisplayContactUs(): Function{
        console.log("Contact Us Page")

        $('a[data="contact-list"]').off('click')
        $('a[data="contact-list"]').on('click', function(){
            location.href = '/contact-list'
        })

        ContactFormValidate()

        // submitButton is of type HTMLElement
        let submitButton = document.getElementById("submitButton") as HTMLElement
        // subscribeCheckbox is of type HTMLInputElement
        let subscribeCheckbox = document.getElementById("subscribeCheckbox") as HTMLInputElement

        submitButton.addEventListener("click", function(){
            
            //if the user subscribes,
            if(subscribeCheckbox.checked){
                //define fullName to equal the first[0] forms "fullName" inputed value
                let fullName = document.forms[0].fullName.value

                let contactNumber = document.forms[0].contactNumber.value
                let emailAddress = document.forms[0].emailAddress.value

                //then, store the users contact in localStorage
                let contact = new core.Contact(fullName, contactNumber, emailAddress)
                if(contact.serialize()){
                    //the key is the first character of contact name + the date
                    let key = contact.Name.substring(0,1) + Date.now()
                    localStorage.setItem(key, contact.serialize() as string)
                }
                
            }
        })

        return new Function()
    }

    function DisplayContactList(): Function{

        console.log("Contact List Page")

        //if there is something in localStorage
        if (localStorage.length > 0) {
            //Get the contactList by id= form the tbody set in contact-list.html
            let contactList = document.getElementById("contactList") as HTMLElement

            let data = "" // Add data to this variable. Append deserialized data from localStorage to data
            let keys = Object.keys(localStorage) // Returns a String Array of keys

            let index = 1 // Use this index to Count the number of keys starting from 1

            // for every key in the keys collection
            for (const key of keys) {
                let contactData = localStorage.getItem(key) as string // Get localStorage data value related to the key
                let contact = new core.Contact("", "", "")
                
                contact.deserialize(contactData)

                // Inject repeatable row into the contactlist
                data += `<tr>
                    <th scope="row" class="text-center">${ index }</th>
                    <td class="text-center">${ contact.Name }</td>
                    <td class="text-center">${ contact.ContactNumber }</td>
                    <td class="text-center">${ contact.EmailAddress }</td>
                    <td class="text-center">
                        <button value="${key}" class="btn btn-primary btn-sm edit">
                            <i class="fas fa-edit fa-sm"></i>&nbsp; Edit
                        </button>
                    </td>
                    <td class="text-center">
                        <button value="${key}" class="btn btn-danger btn-sm delete">
                            <i class="fas fa-trash-alt fa-sm"></i>&nbsp; Delete
                        </button>
                    </td>
                </tr>
                `
                index++
            }

            contactList.innerHTML = data

            //When any delete button in the table is clicked, do the following function
            $("button.delete").on("click", function(){
                //first confirm if they want to delete
                if(confirm("Are you sure you want to delete?")){
                    //then remove the contact from local storage
                    localStorage.removeItem($(this).val() as string)
                    //and redirect to the same page, so that the updated table shows (refreshing the page)
                    //window.location.href = "/contact-list";
                    location.href = '/contact-list'
                }
            })

            $("button.edit").on("click", function(){
                //window.location.href = "/edit#" + $(this).val();
                location.href = '/edit#' + $(this).val() as string
            })

        }

        //Add contact button
        $("#addButton").on("click", () =>{
            //window.location.href = "/edit#Add";
            location.href = '/edit#Add'
        })

        return new Function()

    }

    function DisplayEditPage(): Function{
        ContactFormValidate()

        //get the spcific hash element
        let page = location.hash.substring(1)

        switch(page){
            case "Add":
                //do some work in the scope of the brackets
                {
                    $("#welcome").text("WEBD6201 Demo Add Contact")

                    $("#editButton").html(`<i class="fas fa-plus-circle fa-lg"></i> Add`)

                    $("#editButton").on("click", (event) => {
                        event.preventDefault()

                        let fullName = document.forms[0].fullName.value
                        let contactNumber = document.forms[0].contactNumber.value
                        let emailAddress = document.forms[0].emailAddress.value

                        //get form info
                        AddContact(fullName, contactNumber, emailAddress)

                        //redirect
                        location.href = '/contact-list'
                    })

                }
                break
            default:
                {
                //get the contact info from localstorage
                let contact = new core.Contact("", "", "")
                contact.deserialize(localStorage.getItem(page) as string)

                //display contact info in edit form
                $("#fullName").val(contact.Name)
                $("#contactNumber").val(contact.ContactNumber)
                $("#emailAddress").val(contact.EmailAddress)

                //when edit button is pressed, update the contact
                $("#editButton").on("click", (event) => {
                    event.preventDefault()

                    //get all changes from the form
                    contact.Name = $("#fullName").val() as string
                    contact.ContactNumber = $("#contactNumber").val() as string
                    contact.EmailAddress = $("#emailAddress").val() as string

                    //replace the changes in localstorage
                    localStorage.setItem(page, contact.serialize() as string)

                    //go back to contact-list.html
                    location.href = '/contact-list'
                })

                $("#resetButton").on("click", () => {
                    location.href = '/contact-list'
                })

            }
            break
        }
        return new Function()
    }

    function DisplayLoginPage(){
        console.log("Login Page")

        let messageArea = $('#messageArea')
        messageArea.hide()

        //click functionality
        $('#loginButton').on('click', function(){
            let success = false

            //create an empty user object
            let newUser = new core.User()

            //use JQuery to load users.json file and read over it
            $.get('./Data/users.json', function(data){
                //iterate over every user in the users.json file
                for (const user of data.users){
                    let username = document.forms[0].username.value
                    let password = document.forms[0].password.value
                    //check if the username and password match the user data passed in from users.json
                    if (username == user.Username && password == user.Password){
                        newUser.fromJSON(user)
                        success = true
                        break
                    }
                }
                //if username and password matched (success = true) -> perform the login sequence
                if(success){
                    //add user to sessionStorage
                    sessionStorage.setItem('user', newUser.serialize() as string)

                    //hide any error messages
                    messageArea.removeAttr('class').hide()
                    // redirect the user to the secure area of our website - contact-list.html
                    // location.href = '/contact-list'
                    location.href = '/contact-list'

                } else{
                    //display error message
                    $('#username').trigger('focus').trigger('select')
                    messageArea.addClass('alert alert-danger').text('Error: Username and Password mismatch!').show()
                }
                })
            
        })

        $('#cancelButton').on('click', function(){
            //clear the form
            document.forms[0].reset()
            //return to home page
            //window.location.href = "/home";
            location.href = '/home'
        })
        return new Function()
    }

    function CheckLogin(): void{
        //if the user is logged in, then
        if (sessionStorage.getItem("user")){
            //switch the login button to logout
            $('#login').html(
                `<a id="logout" class="nav-link" href="#"><i class="fas fa-sign-out-alt"></i> Logout</a>`
            )

            $('#logout').on('click', function(){
                sessionStorage.clear()
                
                // switch logout link to login link
                $('#login').html(
                    `<a class="nav-link" href="/login"><i class="fas fa-sign-in-alt"></i> Login</a>`
                )

                // redirect to login.html
                location.href = '/login'
            })

            //show "show contact list button" button
            $('#contactListButton').html(
                `<a href="/contact-list" class="btn btn-primary btn-lg link"><i class="fas fa-users fa-lg"></i> Show Contact List </a>`
            )
        }
    }

    function DisplayRegisterPage(): Function {
        console.log("Registration Page")

        return new Function()
    }

    function DisplayReferences(): Function {
        console.log("References Page")

        return new Function()
    }

    function Display404Page(): Function {
        console.log("404 Page")

        return new Function()
    }

    function Start(): void {
        console.log("Application Started Successfully!")

        let pageId = $('body')[0].getAttribute('id')

        CheckLogin()

        switch(pageId){
            case "home":
                DisplayHome()
            case "projects":
                DisplayProjects()
            case "contact":
                DisplayContactUs()
            case "contact-list":
                AuthGuard()
                DisplayContactList()
            case "references":
                DisplayReferences
            case "edit":
                AuthGuard()
                DisplayEditPage()
            case "login":
                DisplayLoginPage()
            case "register":
                DisplayRegisterPage()
            case "404":
                Display404Page()
        }

    }

    //when the window loads, run the Start function
    window.addEventListener("load", Start)
})()