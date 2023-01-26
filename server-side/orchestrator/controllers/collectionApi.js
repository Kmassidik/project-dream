const axios = require("axios")

const baseUrlUser = "http://localhost:4001"


class ControllerCollectionApi {

    static async getLogin(req, res) {
        try {
            const { data } = await axios({
                method: "GET",
                url: baseUrlUser + "/getlogin"
            })

            console.log(data, "-> DATA YAA");
            
        } catch (error) {
            console.log(error);
        }
    }
 }


 module.exports = ControllerCollectionApi