var expect = require('expect');
var request = require('supertest');

var { app } = require('./../server');
var { Todo } = require('./../models/todo');

var Todos = [{
    text: "First Todo"
}, {
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