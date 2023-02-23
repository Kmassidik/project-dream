const request = require("supertest")
const app = require("../services/UserServices/app")
const { sequelize } = require("../models");
const { queryInterface } = sequelize;

// Access Token Jangan lupa untuk dibuatkan functionnya yaa biar bisa generate
let access_token

afterAll(done => {
    try {
      queryInterface.bulkDelete('Users', null)
      done()
    } catch (error) {
      done()
    }
})

describe("TEST JEST /", () => {
    test("/", done => { 
        request(app)
            .get("/getlogin")
            .end((err, res) => {
                const { status, body } = res

                if (err) {
                    done(err)
                }else {
                    expect(status).toBe(200)
                    expect(body).toHaveProperty("message", "success")
                }
                done()
            })
    })
})

// LOGIN SUCCESED
describe("SUCCESED LOGIN /api/v1/login", () => {
    /**
    * NOTE: Dibaca dulu keterangan testnya, setelah itu diisi sendiri request body yang udah dibuatin divariable masing-masing
    * REQ.BODY isi sendiri yaa sesuai type data yg ada di folder "/models", validatenya juga dicek yaa
    */

    test("SUCCESED LOGIN USER, RESPONSE WITH ACCESS TOKEN", done => {
        
        let inputUser = {
            phone_number: "", 
            password: "",
            last_login: new Date(),
            request_ip: "",
            request_user_agent: ""
        }

        request(app)
            .post("/api/v1/login")
            .send(inputUser)
            .end((err, res) => {
                const { status, body } = res
                access_token = res.body.access_token
                let locked = res.body.locked
                let serial = res.body.serial

                if (err) {
                    done(err)
                }else {
                    expect(status).toBe(200)
                    expect(body).toHaveProperty("access_token", access_token)
                    expect(body).toHaveProperty("serial", serial)
                    expect(locked).toBeBoolean()
                    done()
                }
            })
    })
})

// LOGIN FAILED
describe("FAILED LOGIN /api/v1/login", () => {
    /**
    * NOTE: Dibaca dulu keterangan testnya, setelah itu diisi sendiri request body yang udah dibuatin divariable masing-masing
    * REQ.BODY isi sendiri yaa sesuai type data yg ada di folder "/models", validatenya juga dicek yaa
    */

    let inputUserTestOne = {
        phone_number: "", 
        password: "",
        last_login: new Date(),
        request_ip: "",
        request_user_agent: ""
    }

    let inputUserTestTwo = {
        phone_number: "", 
        password: "",
        last_login: new Date(),
        request_ip: "",
        request_user_agent: ""
    }

    let inputUserTestThree = {
        phone_number: "", 
        password: "",
        last_login: new Date(),
        request_ip: "",
        request_user_agent: ""
    }

    let inputUserTestFour = {
        phone_number: "", 
        password: "",
        last_login: new Date(),
        request_ip: "",
        request_user_agent: ""
    }

    let inputUserTestFive = {
        phone_number: "", 
        password: "",
        last_login: new Date(),
        request_ip: "",
        request_user_agent: ""
    }

    let inputUserTestSix = {
        phone_number: "", 
        password: "",
        last_login: new Date(),
        request_ip: "",
        request_user_agent: ""
    }

    let inputUserTestSeven = {
        phone_number: "", 
        password: "",
        last_login: new Date(),
        request_ip: "",
        request_user_agent: ""
    }

    // Test One
    test("FAILED LOGIN, EMPTY ALL REQUEST BODY", done => {
        request(app)
            .post("/api/v1/login")
            .send(inputUserTestOne)
            .end((err, res) => {
                const { status, body } = res
                let timestamp = body.timestamp

                if (err) {
                    done(err)
                }else {
                    expect(status).toBe(400)
                    expect(body).toHaveProperty("message", "Something wrong, please input fields")
                    expect(body).toHaveProperty('timestamp', expect.any(String))
                    expect(new Date(timestamp)).toBeInstanceOf(Date);
                    expect(body).toHaveProperty('path', expect.any(String))
                    done()
                }
            })
    })

    // Test Two
    test("FAILED LOGIN, RESPONSE PHONE NUMBER AND PASSWORD REQUIRED", done => {
        request(app)
            .post("/api/v1/login")
            .send(inputUserTestTwo)
            .end((err, res) => {
                const { status, body } = res
                let timestamp = body.timestamp

                if (err) {
                    done(err)
                }else {
                    expect(status).toBe(400)
                    expect(body).toHaveProperty("message", "Something wrong, please input fields")
                    expect(body).toHaveProperty('timestamp', expect.any(String))
                    expect(new Date(timestamp)).toBeInstanceOf(Date);
                    expect(body).toHaveProperty('path', expect.any(String))
                    done()
                }
            })
    })

    // Test Three
    test("FAILED LOGIN, RESPONSE PASSWORD REQUIRED", done => {
        request(app)
            .post("/api/v1/login")
            .send(inputUserTestThree)
            .end((err, res) => {
                const { status, body } = res
                let timestamp = body.timestamp

                if (err) {
                    done(err)
                }else {
                    expect(status).toBe(400)
                    expect(body).toHaveProperty("message", "Something wrong, please input password fields")
                    expect(body).toHaveProperty('timestamp', expect.any(String))
                    expect(new Date(timestamp)).toBeInstanceOf(Date);
                    expect(body).toHaveProperty('path', expect.any(String))
                    done()
                }
            })
    })

    // Test Four
    test("FAILED LOGIN, RESPONSE PHONE NUMBER REQUIRED", done => {
        request(app)
            .post("/api/v1/login")
            .send(inputUserTestFour)
            .end((err, res) => {
                const { status, body } = res
                let timestamp = body.timestamp

                if (err) {
                    done(err)
                }else {
                    expect(status).toBe(400)
                    expect(body).toHaveProperty("message", "Something wrong, please input phone number fields")
                    expect(body).toHaveProperty('timestamp', expect.any(String))
                    expect(new Date(timestamp)).toBeInstanceOf(Date);
                    expect(body).toHaveProperty('path', expect.any(String))
                    done()
                }
            })
    })

    // Test Five
    test("FAILED LOGIN, INVALID ACCOUNT", done => {
        request(app)
            .post("/api/v1/login")
            .send(inputUserTestFive)
            .end((err, res) => {
                const { status, body } = res
                let timestamp = body.timestamp

                if (err) {
                    done(err)
                }else {
                    expect(status).toBe(400)
                    expect(body).toHaveProperty("message", "Something wrong, please input phone number fields")
                    expect(body).toHaveProperty('timestamp', expect.any(String))
                    expect(new Date(timestamp)).toBeInstanceOf(Date);
                    expect(body).toHaveProperty('path', expect.any(String))
                    done()
                }
            })
    })

    // Test Six
    test("FAILED LOGIN, RESPONSE LAST LOGIN REQUIRED", done => {
        request(app)
            .post("/api/v1/login")
            .send(inputUserTestSix)
            .end((err, res) => {
                const { status, body } = res
                let timestamp = body.timestamp

                if (err) {
                    done(err)
                }else {
                    expect(status).toBe(400)
                    expect(body).toHaveProperty("message", "Something wrong, Please try again")
                    expect(body).toHaveProperty('timestamp', expect.any(String))
                    expect(new Date(timestamp)).toBeInstanceOf(Date);
                    expect(body).toHaveProperty('path', expect.any(String))
                    done()
                }
            })
    })

    // Test Seven
    test("FAILED LOGIN, RESPONSE REQUEST_IP REQUIRED", done => {
        request(app)
            .post("/api/v1/login")
            .send(inputUserTestSeven)
            .end((err, res) => {
                const { status, body } = res
                let timestamp = body.timestamp

                if (err) {
                    done(err)
                }else {
                    expect(status).toBe(400)
                    expect(body).toHaveProperty("message", "Something wrong, Please try again")
                    expect(body).toHaveProperty('timestamp', expect.any(String))
                    expect(new Date(timestamp)).toBeInstanceOf(Date);
                    expect(body).toHaveProperty('path', expect.any(String))
                    done()
                }
            })
    })

})

// REGISTER SUCCESED
describe("SUCCESED REGISTER /api/v1/register", () => {
    /**
    * NOTE: Dibaca dulu keterangan testnya, setelah itu diisi sendiri request body yang udah dibuatin divariable masing-masing
    * REQ.BODY isi sendiri yaa sesuai type data yg ada di folder "/models", validatenya juga dicek yaa
    */

    test("SUCCESED REGISTER USER", done => {

        let inputUser = {
            name: "",
            date_birth: "",
            gender: "",
            type: "",
            merk: "",
            model: "",
            license_plate: "",
            phone_number: "",
            password: "",
            request_ip: "",
            request_user_agent: ""
        }

        request(app)
            .post("/api/v1/register")
            .send(inputUser)
            .end((err, res) => {
                const { status, body } = res


                if (err) {
                    done(err)
                }else {
                    expect(status).toBe(201)
                    expect(body).toHaveProperty("Message", "Register Succesed")
                    done()
                }
            })
    })
})

// REGISTER SUCCESED
describe("FAILED REGISTER /api/v1/register", () => {
    /**
    * NOTE: Dibaca dulu keterangan testnya, setelah itu diisi sendiri request body yang udah dibuatin divariable masing-masing
    * REQ.BODY isi sendiri yaa sesuai type data yg ada di folder "/models", validatenya juga dicek yaa
    */

    let inputUser = {
        name: "",
        date_birth: "",
        gender: "",
        type: "",
        merk: "",
        model: "",
        license_plate: "",
        phone_number: "",
        password: "",
        request_ip: "",
        request_user_agent: ""
    }

    let inputUserTestOne = {
        name: "",
        date_birth: "",
        gender: "",
        type: "",
        merk: "",
        model: "",
        license_plate: "",
        phone_number: "",
        password: "",
        request_ip: "",
        request_user_agent: ""
    }

    let inputUserTestTwo = {
        name: "",
        date_birth: "",
        gender: "",
        type: "",
        merk: "",
        model: "",
        license_plate: "",
        phone_number: "",
        password: "",
        request_ip: "",
        request_user_agent: ""
    }

    let inputUserTestThree = {
        name: "",
        date_birth: "",
        gender: "",
        type: "",
        merk: "",
        model: "",
        license_plate: "",
        phone_number: "",
        password: "",
        request_ip: "",
        request_user_agent: ""
    }

    let inputUserTestFour = {
        name: "",
        date_birth: "",
        gender: "",
        type: "",
        merk: "",
        model: "",
        license_plate: "",
        phone_number: "",
        password: "",
        request_ip: "",
        request_user_agent: ""
    }

    let inputUserTestFive = {
        name: "",
        date_birth: "",
        gender: "",
        type: "",
        merk: "",
        model: "",
        license_plate: "",
        phone_number: "",
        password: "",
        request_ip: "",
        request_user_agent: ""
    }

    let inputUserTestSix = {
        name: "",
        date_birth: "",
        gender: "",
        type: "",
        merk: "",
        model: "",
        license_plate: "",
        phone_number: "",
        password: "",
        request_ip: "",
        request_user_agent: ""
    }

    let inputUserTestSeven = {
        name: "",
        date_birth: "",
        gender: "",
        type: "",
        merk: "",
        model: "",
        license_plate: "",
        phone_number: "",
        password: "",
        request_ip: "",
        request_user_agent: ""
    }

    let inputUserTestEight = {
        name: "",
        date_birth: "",
        gender: "",
        type: "",
        merk: "",
        model: "",
        license_plate: "",
        phone_number: "",
        password: "",
        request_ip: "",
        request_user_agent: ""
    }

    let inputUserTestNine = {
        name: "",
        date_birth: "",
        gender: "",
        type: "",
        merk: "",
        model: "",
        license_plate: "",
        phone_number: "",
        password: "",
        request_ip: "",
        request_user_agent: ""
    }

    let inputUserTestTen = {
        name: "",
        date_birth: "",
        gender: "",
        type: "",
        merk: "",
        model: "",
        license_plate: "",
        phone_number: "",
        password: "",
        request_ip: "",
        request_user_agent: ""
    }

    let inputUserTestEleven = {
        name: "",
        date_birth: "",
        gender: "",
        type: "",
        merk: "",
        model: "",
        license_plate: "",
        phone_number: "",
        password: "",
        request_ip: "",
        request_user_agent: ""
    }

    // Test One
    test("FAILED REGISTER, EMPTY ALL REQUEST BODY", done => {
        request(app)
            .post("/api/v1/register")
            .send(inputUserTestOne)
            .end((err, res) => {
                const { status, body } = res
                let timestamp = body.timestamp

                if (err) {
                    done(err)
                }else {
                    expect(status).toBe(400)
                    expect(body).toHaveProperty("message", "Something wrong, please cek input fields")
                    expect(body).toHaveProperty('timestamp', expect.any(String))
                    expect(new Date(timestamp)).toBeInstanceOf(Date);
                    expect(body).toHaveProperty('path', expect.any(String))
                    done()
                }
            })
    })

    // Test Two
    test("FAILED REGISTER, EMPTY NAME REQUEST BODY", done => {
        request(app)
            .post("/api/v1/register")
            .send(inputUserTestTwo)
            .end((err, res) => {
                const { status, body } = res
                let timestamp = body.timestamp

                if (err) {
                    done(err)
                }else {
                    expect(status).toBe(400)
                    expect(body).toHaveProperty("message", "Something wrong, please cek input name fields")
                    expect(body).toHaveProperty('timestamp', expect.any(String))
                    expect(new Date(timestamp)).toBeInstanceOf(Date);
                    expect(body).toHaveProperty('path', expect.any(String))
                    done()
                }
            })
    })

    // Test Three
    test("FAILED REGISTER, EMPTY DATE BIRTH REQUEST BODY", done => {
        request(app)
            .post("/api/v1/register")
            .send(inputUserTestThree)
            .end((err, res) => {
                const { status, body } = res
                let timestamp = body.timestamp

                if (err) {
                    done(err)
                }else {
                    expect(status).toBe(400)
                    expect(body).toHaveProperty("message", "Something wrong, please input date birth fields")
                    expect(body).toHaveProperty('timestamp', expect.any(String))
                    expect(new Date(timestamp)).toBeInstanceOf(Date);
                    expect(body).toHaveProperty('path', expect.any(String))
                    done()
                }
            })
    })

    // Test Four
    test("FAILED REGISTER, EMPTY GENDER REQUEST BODY", done => {
        request(app)
            .post("/api/v1/register")
            .send(inputUserTestFour)
            .end((err, res) => {
                const { status, body } = res
                let timestamp = body.timestamp

                if (err) {
                    done(err)
                }else {
                    expect(status).toBe(400)
                    expect(body).toHaveProperty("message", "Something wrong, please input gender fields")
                    expect(body).toHaveProperty('timestamp', expect.any(String))
                    expect(new Date(timestamp)).toBeInstanceOf(Date);
                    expect(body).toHaveProperty('path', expect.any(String))
                    done()
                }
            })
    })

    // Test Five
    test("FAILED REGISTER, EMPTY TYPE REQUEST BODY", done => {
        request(app)
            .post("/api/v1/register")
            .send(inputUserTestFive)
            .end((err, res) => {
                const { status, body } = res
                let timestamp = body.timestamp

                if (err) {
                    done(err)
                }else {
                    expect(status).toBe(400)
                    expect(body).toHaveProperty("message", "Something wrong, please input type fields")
                    expect(body).toHaveProperty('timestamp', expect.any(String))
                    expect(new Date(timestamp)).toBeInstanceOf(Date);
                    expect(body).toHaveProperty('path', expect.any(String))
                    done()
                }
            })
    })

    // Test Six
    test("FAILED REGISTER, EMPTY MERK REQUEST BODY", done => {
        request(app)
            .post("/api/v1/register")
            .send(inputUserTestSix)
            .end((err, res) => {
                const { status, body } = res
                let timestamp = body.timestamp

                if (err) {
                    done(err)
                }else {
                    expect(status).toBe(400)
                    expect(body).toHaveProperty("message", "Something wrong, please input merk fields")
                    expect(body).toHaveProperty('timestamp', expect.any(String))
                    expect(new Date(timestamp)).toBeInstanceOf(Date);
                    expect(body).toHaveProperty('path', expect.any(String))
                    done()
                }
            })
    })

    // Test Seven
    test("FAILED REGISTER, EMPTY MODEL REQUEST BODY", done => {
        request(app)
            .post("/api/v1/register")
            .send(inputUserTestSeven)
            .end((err, res) => {
                const { status, body } = res
                let timestamp = body.timestamp

                if (err) {
                    done(err)
                }else {
                    expect(status).toBe(400)
                    expect(body).toHaveProperty("message", "Something wrong, please input model fields")
                    expect(body).toHaveProperty('timestamp', expect.any(String))
                    expect(new Date(timestamp)).toBeInstanceOf(Date);
                    expect(body).toHaveProperty('path', expect.any(String))
                    done()
                }
            })
    })

    // Test Eight
    test("FAILED REGISTER, EMPTY LICENSE PLATE REQUEST BODY", done => {
        request(app)
            .post("/api/v1/register")
            .send(inputUserTestEight)
            .end((err, res) => {
                const { status, body } = res
                let timestamp = body.timestamp

                if (err) {
                    done(err)
                }else {
                    expect(status).toBe(400)
                    expect(body).toHaveProperty("message", "Something wrong, please input license plate fields")
                    expect(body).toHaveProperty('timestamp', expect.any(String))
                    expect(new Date(timestamp)).toBeInstanceOf(Date);
                    expect(body).toHaveProperty('path', expect.any(String))
                    done()
                }
            })
    })

    // Test Nine
    test("FAILED REGISTER, EMPTY PHONE NUMBER REQUEST BODY", done => {
        request(app)
            .post("/api/v1/register")
            .send(inputUserTestNine)
            .end((err, res) => {
                const { status, body } = res
                let timestamp = body.timestamp

                if (err) {
                    done(err)
                }else {
                    expect(status).toBe(400)
                    expect(body).toHaveProperty("message", "Something wrong, please input phone number fields")
                    expect(body).toHaveProperty('timestamp', expect.any(String))
                    expect(new Date(timestamp)).toBeInstanceOf(Date);
                    expect(body).toHaveProperty('path', expect.any(String))
                    done()
                }
            })
    })

    // Test Ten
    test("FAILED REGISTER, EMPTY PASSWORD REQUEST BODY", done => {
        request(app)
            .post("/api/v1/register")
            .send(inputUserTestTen)
            .end((err, res) => {
                const { status, body } = res
                let timestamp = body.timestamp

                if (err) {
                    done(err)
                }else {
                    expect(status).toBe(400)
                    expect(body).toHaveProperty("message", "Something wrong, please input password fields")
                    expect(body).toHaveProperty('timestamp', expect.any(String))
                    expect(new Date(timestamp)).toBeInstanceOf(Date);
                    expect(body).toHaveProperty('path', expect.any(String))
                    done()
                }
            })
    })

    // Test Eleven
    test("FAILED REGISTER, EMPTY REQUEST IP REQUEST BODY", done => {
        request(app)
            .post("/api/v1/register")
            .send(inputUserTestEleven)
            .end((err, res) => {
                const { status, body } = res
                let timestamp = body.timestamp

                if (err) {
                    done(err)
                }else {
                    expect(status).toBe(400)
                    expect(body).toHaveProperty("message", "Something wrong, please input cek again fields")
                    expect(body).toHaveProperty('timestamp', expect.any(String))
                    expect(new Date(timestamp)).toBeInstanceOf(Date);
                    expect(body).toHaveProperty('path', expect.any(String))
                    done()
                }
            })
    })

})