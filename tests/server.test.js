const request = require("supertest");
const server = require("../server");


describe("should send message successfully", () => {
    test("should respond with 200 status", async () => {
        const response = await request(server).post("/chats/send").send({
            sender: 'chaim',
            recipient: 'moshe',
            message: "hi moshe!"
        })
        expect(response.statusCode).toBe(200)
    })
})

describe("should receive messages successfully", () => {
    test("should get user messages", async () => {
        const response = await request(server).get("/chats/receive/moshe");
        expect(response.body.messages).toBeDefined()
    })

})
