var expect = require('expect');
var request = require('supertest');
const { ObjectId } = require('mongodb');

var { app } = require('./../server');
var { Todo } = require('./../models/todo');

var Todos = [{
    _id: new ObjectId(),
    text: "First Todo"
}, {
    _id: new ObjectId(),
    text: "Second Todo"
}
];

beforeEach((done) => {
    Todo.remove({})
        .then(() => { return Todo.insertMany(Todos); })
        .then(() => done());
});

describe(`POST /todo`, () => {
    it(`should create a new todo`, (done) => {
        var text = "Something to do";

        request(app)
            .post(`/todo`)
            .send({ text })
            .expect(200)
            .expect((res) => {
                expect(res.body.text).toBe(text);
            })
            .end((err, res) => {
                if (err) {
                    return done(err);
                }

                Todo.find({ text }).then((todos) => {
                    expect(todos.length).toBe(1);
                    expect(todos[0].text).toBe(text);
                    done();
                }).catch((e) => done(e));
            });
    });

    it(`should not insert empty data`, (done) => {
        request(app)
            .post('/todo')
            .send({})
            .expect(400)
            .end((err, res) => {
                if (err) {
                    return done(err);
                }
                Todo.find().then((todos) => {
                    expect(todos.length).toBe(Todos.length);
                    done();
                }).catch((e) => done(e));
            });
    });
});

describe(`GET /todo`, () => {
    it(`should return ${Todos.length} documents`, (done) => {
        request(app)
            .get('/todo')
            .expect(200)
            .expect((res) => {
                expect(res.body.todos.length).toBe(Todos.length);
            }).end(done);
    });
});

describe(`GET /todo/:id`, () => {
    it(`should return a doc`, (done) => {
        request(app)
            .get(`/todo/${Todos[0]._id.toHexString()}`)
            .expect(200)
            .expect((res) => {
                expect(res.body.docTodo.text).toBe(Todos[0].text);
            }).end(done);
    });
    it(`should return 404 for todo not found`, (done) => {
        var id = new ObjectId().toHexString();
        request(app)
            .get(`/todo/${id}`)
            .expect(404)
            .end(done);
    });
    it(`should return 400 for bad request`, (done) => {
        request(app)
            .get(`/todo/123`)
            .expect(400)
            .end(done);
    });
});