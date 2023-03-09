(function(core){

    class User {

        constructor(displayName = "", emailAddress = "", username = "", password = ""){
            this.DisplayName = displayName
            this.EmailAddress = emailAddress
            this.Username = username
            this.Password = password
        }

        // TODO: input missing Getter and Setters

        // override Method
        toString(){
            return `Display Name: ${this.DisplayName}\nEmail Address: ${this.EmailAddress}\nUser Name: ${this.Username}`
        }

        //utility Methods
        toJSON(){
            return{
                "DisplayName": this.DisplayName,
                "EmailAddress": this.EmailAddress,
                "Username": this.Username,
            }
        }
        fromJSON(data){
            this.DisplayName = data.DisplayName
            this.EmailAddress = data.EmailAddress
            this.Username = data.Username
            this.Password = data.Password
        }

        // Serialize Method
        serialize() {
            //if all 3 things below are NOT empty return the following string
            if (this.DisplayName !== "" && this.EmailAddress !== "" && this.Username !== "")
                return `${ this.DisplayName }, ${ this.EmailAddress }, ${ this.Username }`
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
            this.DisplayName = propertyArray[0]
            this.EmailAddress = propertyArray[1]
            this.Username = propertyArray[2]
        }

    }

    core.User = User
})(core || (core={}))