/*
  Name: Eisha Aqeel
  Last Updated: Febuary 26, 2023
  Description: Java Script file for Contact class
*/
namespace core{
    export class Contact{
        //private instance members
        private m_name: string
        private m_contactNumber: string
        private m_emailAddress: string

        constructor(name: string, contactNumber: string, emailAddress: string){
            this.m_name = name
            this.m_contactNumber = contactNumber
            this.m_emailAddress = emailAddress
        }
    
        // Getter and Setters
        public get Name() : string {
            return this.m_name
        }
        public set Name(name: string){
            this.m_name = name
        }
    
        public get ContactNumber() : string{
            return this.m_contactNumber
        }
        public set ContactNumber(contactNumber: string){
            this.m_contactNumber = contactNumber
        }
    
        public get EmailAddress() : string{
            return this.m_emailAddress
        }
        public set EmailAddress(emailAddress: string){
            this.m_emailAddress = emailAddress
        }
    
        // Public Utility Methods
        /**
         * Serialize Method
         * @returns string OR null
         */
        serialize(): string | null {
            //if all 3 things below are NOT empty return the following string
            if (this.Name !== "" && this.ContactNumber !== "" && this.EmailAddress !== "")
                return `${ this.Name }, ${ this.ContactNumber }, ${ this.EmailAddress }`
            //if it is empty, show error with message in console, and return null
            console.error("One or more properties or fields of the Contact Object are missing or invalid!")
            return null
        }

        // Deserialize Method
        //pass in each piece of data
        deserialize(data: string) {
            //then sperate by commas
            let propertyArray = data.split(",")
            //name is first index [0]
            this.Name = propertyArray[0]
            this.ContactNumber = propertyArray[1]
            this.EmailAddress = propertyArray[2]
        }
    
        // Public Override Method
        toString(): string{
            return `Full Name is ${ this.Name }\nContact Information is ${ this.ContactNumber }\nEmail Address is ${ this.EmailAddress }`
        }
    
    }

}