namespace core{
    export class Router{
        //private instance members
        private m_activeLink: string
        private m_routingTable: string[]

        //public properties: get and set
        /**
         * @returns {string}
         * 
         */
        public get ActiveLink(): string{
            return this.m_activeLink

        }
        /**
         * @param {string} link
         */
        public set ActiveLink(link: string){
            this.m_activeLink = link
        }

        /**
         * Creates an instance of Router.
         * @constructor
         */
        constructor(){
            this.m_activeLink = ""
            // []  works the same way as  new Array<string>()
            this.m_routingTable = [] 
        }

        //public methods - paths for methods
        /**
         * This method adds a new route to the Routing Table
         * @param {string[]} route 
         * @returns {void}
         */
        Add(route: string): void{
            this.m_routingTable.push(route)
        }

        /**
         * This method replaces the reference for the routing table with a new name
         * NOTE: Routes should begin with a  '/' character
         * @param {string} routingTable 
         * @returns {void}
         */
        AddRoutingTable(routingTable: string[]): void{
            this.m_routingTable = routingTable
        }

        /**
         * This method finds and returns the index of the route in the routing table
         * 
         * @param {string} route 
         * @returns {number}
         */
        Find(route: string): number{
            return this.m_routingTable.indexOf(route)
        }

        /**
         * removes a route from the routing table
         * returns true of the route is removed, otherwise it returns -1
         * @param {stirng} route 
         * @returns {boolean}
         */
        Remove(route: string): boolean {
            //if route is found, is it greater then -1 
            //if the value of Find is -1 it means that the route was Not found
            if(this.Find(route) > -1){
                //remove the route
                // we are using splice to remove 1 element (the slash in our routes)
                this.m_routingTable.splice(this.Find(route), 1)
                return true
            }
            return false
        }

        //public override method
        /**
         * This method overrides the built-in toString method 
         * and returns the Routing Table in a comma seperated string 
         * @returns {string}
         */
        toString(): string{
            return this.m_routingTable.toString()
        }
    }
}

let router: core.Router = new core.Router()
router.AddRoutingTable([
    "/",                //default route
    "/home",            //home page route
    "/about",           //about page route
    "/services",
    "/contact",
    "/contact-list",
    "/projects",
    "/register",
    "/login",
    "/edit"
])

//window.history.pushState('', '', '/')

//alias for location.pathname
let route: string = location.pathname

//if route is found in the routing table 
//varible = (if condition) ? (if condition is true) : (else false)
router.ActiveLink = (router.Find(route) > -1) ? (route == "/") ? "home" : route.substring(1) : router.ActiveLink = "404"