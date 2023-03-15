let core
(function(core){
    class Router{
        //public properties: get and set
        /**
         * @returns {string}
         * 
         */
        get ActiveLink(){
            return this.m_activelink

        }
        /**
         * @param {string} link
         */
        set ActiveLink(link){
            this.m_activelink = link
        }

        
        /**
         * Creates an instance of Router.
         * @constructor
         */
        constructor(){
            this.ActiveLink = ""
        }

        /**
         * 
         * @param {string[]} route 
         * @returns {void}
         */
        Add(route){
            this.m_routingTable.push(route)
        }

        /**
         * This method replaces the reference for the routing table with a new name
         * NOTE: Routes should begin with a  '/' character
         * @param {string} routingTable 
         * @returns {void}
         */
        AddRoutingTable(routingTable){
            this.m_routingTable = routingTable
        }

        /**
         * 
         * @param {string} route 
         * @returns {number}
         */
        Find(route){
            return this.m_routingTable.indexOf(route)
        }

        /**
         * removes a route from the routing table
         * returns true of the route is removed
         * @param {stirng} route 
         * @returns {boolean}
         */
        Remove(route){
            //if route is found
            if(this.Find(route) > -1){
                //remove the route
                this.m_routingTable.splice(this.Find(route), 1)
                return true
            }
            return false
        }

        //public override method
        /**
         * returns
         * @returns {string}
         */
        toString(){
            return this.m_routingTable.toString()
        }

    }
    core.Router = Router
})(core || (core = {}))

let router = new core.Router()
let routingTable = [
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
]

//the following line causes errors
let route = location.pathname

//the following is commented out because the next line of uncommented code is the same but with less code
/*
if (router.Find(route) > -1){
    //ternary operator
    router.ActiveLink = (route == "/") ? "home" : route.substring(1)
}
else{
    router.ActiveLink = "404"
}
*/

//if route is found in the routing table 
//varible = (if condition) ? (if condition is true) : (else false)
router.ActiveLink = (router.Find(route) > -1) ? (route == "/") ? "home" : route.substring(1) : router.ActiveLink = "404"