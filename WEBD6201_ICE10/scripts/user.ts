namespace core{

    export class User {
        //private instance members
        private m_displayName : string
        private m_emailAddress : string
        private m_username : string
        private m_password : string

        constructor(displayName: string = "", emailAddress: string = "", username: string = "", password: string = ""){
            this.m_displayName = displayName
            this.m_emailAddress = emailAddress
            this.m_username = username
            this.m_password = password
        }

        // Getter and Setters
        public get DisplayName(): string{
            return this.m_displayName
        }
        public set DisplayName(name: string){
            this.m_displayName = name
        }

        public get EmailAddress(): string{
            return this.m_emailAddress
        }
        public set EmailAddress(emailAddress: string){
            this.m_emailAddress = emailAddress
        }

        public get Username(): string{
            return this.m_username
        }
        public set Username(username: string){
            this.m_username = username
        }

        public get Password(): string{
            return this.m_password
        }
        public set Password(password: string){
            this.m_password = password
        }

        // override Method
        toString(): string{
            return `Display Name: ${this.DisplayName}\nEmail Address: ${this.EmailAddress}\nUser Name: ${this.Username}`
        }

        //utility Methods
        toJSON(): {DisplayName: string, EmailAddress: string, Username: string} {
            return{
                "DisplayName": this.DisplayName,
                "EmailAddress": this.EmailAddress,
                "Username": this.Username,
            }
        }
        
        fromJSON(data: User): void{
            this.DisplayName = data.DisplayName
            this.EmailAddress = data.EmailAddress
            this.Username = data.Username
            this.Password = data.Password
        }

        // Serialize Method
        serialize(): string | null {
            //if all 3 things below are NOT empty return the following string
            if (this.DisplayName !== "" && this.EmailAddress !== "" && this.Username !== "")
                return `${ this.DisplayName }, ${ this.EmailAddress }, ${ this.Username }`
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
            this.DisplayName = propertyArray[0]
            this.EmailAddress = propertyArray[1]
            this.Username = propertyArray[2]
        }

    }
}