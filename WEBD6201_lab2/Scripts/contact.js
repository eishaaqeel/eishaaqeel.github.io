/**
 * @author Eisha Aqeel #100798173, Angelica Kusik #100849912
 * @version 2.0.0
 * @since March 2, 2023
 * @description WEBD6201 Labs - Contact Class
 * 
 */

class Contact{
    //Constructor
    constructor(name, contactNumber, emailAddress, message){
        this.Name = name
        this.ContactNumber = contactNumber
        this.EmailAddress = emailAddress
        this.Message = message
    }

    //Accessors and Mutators
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

    get Message(){
        return this.m_message
    }

    set Message(message){
        this.m_message = message
    }

    //Public Override Method

    toString(){
        return `Full name is ${ this.Name } \n Contact Info is: ${ this.ContactNumber } \n Email Address: ${ this.EmailAddress } \n Message: ${ this.Message}`

    }
}