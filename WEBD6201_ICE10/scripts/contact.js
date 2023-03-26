/*
  Name: Eisha Aqeel
  Last Updated: Febuary 26, 2023
  Description: Java Script file for Contact class
*/
(function (core){
    class Contact{
        constructor(name, contactNumber, emailAddress){
            this.Name = name
            this.ContactNumber = contactNumber
            this.EmailAddress = emailAddress
        }
    
        // Getter and Setters
        get Name(){
            return this.m_name
        }
        set Name(name){
            this.m_name = name
        }
    
        get ContactNumber(){
            return this.m_contactNumber
        }
        set ContactNumber(contactNumber){
            this.m_contactNumber = contactNumber
        }
    
        get EmailAddress(){
            return this.m_emailAddress
        }
        set EmailAddress(emailAddress){
            this.m_emailAddress = emailAddress
        }
    
        // Public Utility Methods
        // Serialize Method
        serialize() {
            //if all 3 things below are NOT empty return the following string
            if (this.Name !== "" && this.ContactNumber !== "" && this.EmailAddress !== "")
                return `${ this.Name }, ${ this.ContactNumber }, ${ this.EmailAddress }`
            //if it is empty, show error with message in console, and return null
            console.error("One or more properties or fields of the Contact Object are missing or invalid!")
            return null
        }
        // Deserialize Method
        //pass in each piece of data
        deserialize(data) {
            //then sperate by commas
            let propertyArray = data.split(",")
            //name is first index [0]
            this.Name = propertyArray[0]
            this.ContactNumber = propertyArray[1]
            this.EmailAddress = propertyArray[2]
        }
    
        // Public Override Method
        toString(){
            return `Full Name is ${ this.Name }\nContact Information is ${ this.ContactNumber }\nEmail Address is ${ this.EmailAddress }`
        }
    
    }

    core.Contact = Contact
})(core || (core = {}))