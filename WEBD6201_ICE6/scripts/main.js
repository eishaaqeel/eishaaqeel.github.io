/*
  Name: Eisha Aqeel
  Date: Febuary 5, 2023
  Description: Java Script main file for the WEBD6201 Demo's
*/

(function () {

    function DisplayHome(){
        // Least amount of memory heap (Regular JS):
        /*
        //assign "RandomButton" from the index page to randomButton 
        let randomButton = document.getElementById("RandomButton")
        //listen for when this button is clicked, then use the functon go to the location
        randomButton.addEventListener("click", function(){
            //location.href = './projects.html'
            window.location.href = "projects.html";
        })
        */
        
        // Most amount of memory heap (jQuery):
        $("#RandomButton").on("click", function(){
            window.location.href = "contact.html";
        })

        /*
        // 2nd most amount of memory heap (JS querySelectorAll):
        document.querySelectorAll("#RandomButton").forEach(element => {
            element.addEventListener("click", () => {
                window.location.href = "contact.html";
            })
        })
        */

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

        submitButton.addEventListener("click", function(){
            
            //if the user subscribes, store their contact in localStorage
            if(subscribeCheckbox.checked){
                //fullName, contactNumber, and emailAddress are id= from the textboxes defined in contact.html
                //and this page is able to get their value because we gave contact.html access to this page by adding it's script tag there
                let contact = new Contact(fullName.value, contactNumber.value, emailAddress.value)
                
                //if I am able to serialize the user,
                if (contact.serialize()){
                    //let my key eqaul to the contacts name first letter, then add current date
                    let key = contact.Name.substring(0, 1) + Date.now()
                    localStorage.setItem(key, contact.serialize())
                }
                
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
                let contact = new Contact()
                
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

            //
            $("#addButton").on("click", () =>{
                location.href = 'edit.html#add'
            })

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

        }
    }

    function DisplayReferences(){
        console.log("References Page")
    }

    function Start() {
        console.log("Application Started Successfully!")

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