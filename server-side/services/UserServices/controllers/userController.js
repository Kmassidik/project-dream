class UserController { 
    
    static async getLogin(req, res) {
        try {
            res.status(200).json({ message: "success"})
        } catch (error) {
            res.status(500).json(error)
        }
    }

    

}


module.exports = UserController