const request = require("supertest")
const app = require("../services/UserServices/app")

let access_token

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
describe("SUCCESED LOGIN", () => {

    test("SUCCESED LOGIN ADMIN, RESPONSE WITH ACCESS TOKEN", done => {
        request(app)
            .post("/admin/login")
            .send({ phone_number: "083120094008", password: "123456", admin: true })
            .end((err, res) => {
                const { status, body } = res
                access_token = res.body.access_token

                if (err) {
                    done(err)
                }else {
                    expect(status).toBe(200)
                    expect(body).toHaveProperty("access_token", access_token)
                    done()
                }
            })
    }),

    test("SUCCESED LOGIN USER, RESPONSE WITH ACCESS TOKEN", done => {
        request(app)
            .post("/login")
            .send({ phone_number: "083120094008", password: "123456", admin: false })
            .end((err, res) => {
                const { status, body } = res
                access_token = res.body.access_token

                if (err) {
                    done(err)
                }else {
                    expect(status).toBe(200)
                    expect(body).toHaveProperty("access_token", access_token)
                    done()
                }
            })
    })
})


// LOGIN FAILED
describe("FAILED LOGIN", () => {

    test("ADMIN LOGIN, RESPONSE PHONE NUMBER AND PASSWORD REQUIRED", done => {
        request(app)
            .post("/admin/login")
            .send({ phone_number: "", password: "" })
            .end((err, res) => {
                const { status, body } = res
            })
    })
})