/*
  Name: Eisha Aqeel
  Last Updated: Febuary 26, 2023
  Description: Java Script main file for the WEBD6201 Demo's
*/


(function () {

    /**
     * This function uses AJAX to open a connection to the server and returns a data payload to the callback function
     * @param {string} method 
     * @param {string} url 
     * @param {function} callback 
     */
    function AjaxRequest(method, url, callback){
        // AJAX
        // instantiate the XHR Object
        let XHR = new XMLHttpRequest()
        // add event listener for ready state change
        XHR.addEventListener("readystatechange", () => {
            if(XHR.readyState === 4 && XHR.status === 200){
                if(typeof callback === 'function'){
                    callback(XHR.responseText)
                } else{
                    console.error("ERROR: callback is not a function.");
                }
            }
        })
        // connect and get data
        XHR.open(method, url)
        // send request to server to await response
        XHR.send()
    }

    /**
     * Load the static header
     * 
     * @param {HTML} html_data 
     */
    function LoadHeader(html_data){
        $('#navigationBar').html(html_data)
                //find this anchor tag and see if it contains 
                $(`li>a:contains(${document.title})`).addClass('active')

        CheckLogin()
    }

    
    function DisplayHome(){
        
        $("#RandomButton").on("click", function(){
            window.location.href = "contact.html";
        })

        //set the following strings as the attributes content, using template literals such as ${firstString}
        let firstString = "This is a "
        let secondString = `${firstString} main paragraph that I added through javascript.`
        //using jQuery add the above paragrah to "main"
        $("main").addClass("container").append(`<P id="MainParagraph" class="mt-3 container">${secondString}</P>`)

    }

    function DisplayProjects(){
        //test to see if the following message displays in the console of the Projects page
        console.log("Projects Page")
    }

    function ValidateInput(inputFieldID, regularExpression, exception){
        //.hide() so #messageArea only shows for invalid inputs
        let messageArea = $('#messageArea').hide()

        $('#' + inputFieldID).on("blur", function(){
            let inputText = $(this).val()

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

    function ContactFormValidate(){
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

    function DisplayContactUs(){
        console.log("Contact Us Page")

        ContactFormValidate()

        let submitButton = document.getElementById("submitButton")
        let subscribeCheckbox = document.getElementById("subscribeCheckbox")

        submitButton.addEventListener("click", function(){
            
            //if the user subscribes, store their contact in localStorage
            if(subscribeCheckbox.checked){
                AddContact(fullName.value, contactNumber.value, emailAddress.value)
                
            }
        })
    }

    function DisplayContactList(){

        console.log("Contact List Page")

        //if there is something in localStorage
        if (localStorage.length > 0) {
            //Get the contactList by id= form the tbody set in contact-list.html
            let contactList = document.getElementById("contactList")

            let data = "" // Add data to this variable. Append deserialized data from localStorage to data
            let keys = Object.keys(localStorage) // Returns a String Array of keys

            let index = 1 // Use this index to Count the number of keys starting from 1

            // for every key in the keys collection
            for (const key of keys) {
                let contactData = localStorage.getItem(key) // Get localStorage data value related to the key
                let contact = new core.Contact()
                
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
                    localStorage.removeItem($(this).val());
                    //and redirect to the same page, so that the updated table shows (refreshing the page)
                    window.location.href = "contact-list.html";
                }
            })

            $("button.edit").on("click", function(){
                window.location.href = "edit.html#" + $(this).val();
            })

        }

        //Add contact button
        $("#addButton").on("click", () =>{
            window.location.href = "edit.html#Add";
        })

    }

    function AddContact(fullName, contactNumber, emailAddress){
        let contact = new core.Contact(fullName, contactNumber, emailAddress)
        
        //if I am able to serialize the user,
        if (contact.serialize()){
            //let my key eqaul to the contacts name first letter, then add current date
            let key = contact.Name.substring(0, 1) + Date.now()
            localStorage.setItem(key, contact.serialize())
        }

    }

    function DisplayEditPage(){
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

                        //get form info
                        AddContact(fullName.value, contactNumber.value, emailAddress.value)

                        //redirect
                        window.location.href = "contact-list.html";
                    })

                }
                break
            default:
                {
                //get the contact info from localstorage
                let contact = new core.Contact()
                contact.deserialize(localStorage.getItem(page))

                //display contact info in edit form
                $("#fullName").val(contact.Name)
                $("#contactNumber").val(contact.ContactNumber)
                $("#emailAddress").val(contact.EmailAddress)

                //when edit button is pressed, update the contact
                $("#editButton").on("click", (event) => {
                    event.preventDefault()

                    //get all changes from the form
                    contact.Name = $("#fullName").val()
                    contact.ContactNumber = $("#contactNumber").val()
                    contact.EmailAddress = $("#emailAddress").val()

                    //replace the changes in localstorage
                    localStorage.setItem(page, contact.serialize())

                    //go back to contact-list.html
                    window.location.href = "contact-list.html";
                })

                }

                break

        }

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
                    //check if the username and password match the user data passed in from users.json
                    if (username.value == user.Username && password.value == user.Password){
                        newUser.fromJSON(user)
                        success = true
                        break
                    }
                }
                //if username and password matched (success = true) -> perform the login sequence
                if(success){
                    //add user to sessionStorage
                    sessionStorage.setItem('user', newUser.serialize())

                    //hide any error messages
                    messageArea.removeAttr('class').hide()
                    //redirect
                    window.location.href = "contact-list.html";

                } else{
                    //display error message
                    $('#username').trigger('focus').trigger('select')
                    messageArea.addClass('alert alert-danger').text('Error: Username and Password mismatch!').show()
                }
                })
            
        })

        $('#cancelButton').on('click', function(){
            //clear the form
            document.form[0].reset()
            //return to home page
            window.location.href = "index.html";
        })

    }

    function CheckLogin(){
        //if the user is logged in, then
        if (sessionStorage.getItem("user")){
            //switch the login button to logout
            $('#login').html(
                `<a id="logout" class="nav-link" href="#"><i class="fas fa-sign-out-alt"></i> Logout</a>`
            )

            $('#logout').on('click', function(){
                sessionStorage.clear()
                window.location.href = "login.html";
            })

            //show "show contact list button" button
            $('#contactListButton').html(
                `<a href="./contact-list.html" class="btn btn-primary btn-lg"><i class="fas fa-users fa-lg"></i> Show Contact List </a>`
            )
        }
    }

    function DisplayRegisterPage(){
        console.log("Registeration Page")
    }

    function DisplayReferences(){
        console.log("References Page")
    }

    function Start() {
        console.log("Application Started Successfully!")

        AjaxRequest("GET", "./static/header.html", LoadHeader)

        //switch case statment
        switch (document.title){
            //in the case of the webpage title being "Home"
            case "Home":
                DisplayHome()
                
                break
            //in the case of the webpage title being "Projects"
            case "Projects":
                DisplayProjects()
                break
            case "Contact Us":
                DisplayContactUs()
                break
            case "Contact List":
                DisplayContactList()
                break
            case "References":
                DisplayReferences()
                break
            case "Edit":
                DisplayEditPage()
                break
            case "Login":
                DisplayLoginPage()
                break
            case "Register":
                DisplayRegisterPage()
            break
        }
        //scrolls to the top of the page, if you refresh:
        $(window).scrollTop(0);
    }

    //when the window loads, run the Start function
    window.addEventListener("load", Start)
})()