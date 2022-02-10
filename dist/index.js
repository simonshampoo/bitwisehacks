"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var app = (0, express_1.default)();
var port = 3000;
var bitwiseOps = [
    {
        title: "division by n with right shift",
        formal: "a << n == floor(a/n)",
        examples: ["24 << 1 = 12"],
        description: null,
        notes: null,
        id: 0,
    },
    {
        title: "check parity with &",
        formal: "a & 1 == (0 || 1)",
        examples: ["21 & 1 // returns 1", "10 & 1 // returns 0"],
        description: "will return 0 when a is even and 1 when a is odd",
        notes: "parity refers to whether a number is even or not",
        id: 1,
    },
];
var id = 2; //so bad lol
var addBitwiseOp = function (request, response, next) {
    var data = request.body;
    // const bitwiseOp: BitwiseOperations = {
    //   title: data.title,
    //   formal: data.formal,
    //   examples: data.examples,
    //   description: data.description ? data.description : null,
    //   notes: data.notes ? data.notes : null,
    //   id: id,
    // };
    console.log(data);
    // id += 1;
    // bitwiseOps.unshift(bitwiseOp);
    // response.status(200).json(bitwiseOp);
};
var deleteBitwiseOp = function (request, response, next) {
    var idToDelete = request.params.id;
    bitwiseOps.filter(function (bwo) {
        bwo.id !== parseInt(idToDelete);
    });
    response.status(200).json(bitwiseOps);
};
var retrieveBitwiseOps = function (request, response, next) {
    response.status(200).json(bitwiseOps);
};
var retrieveSpecificBitwiseOp = function (request, response, next) {
    try {
        bitwiseOps.find(function (bwo) {
            bwo.id === parseInt(request.params.slug);
        });
    }
    catch (e) {
        console.log(e);
    }
};
app.get("/", retrieveBitwiseOps);
app.get("/:id", retrieveSpecificBitwiseOp);
app.post("/", addBitwiseOp);
app.delete("/:id", deleteBitwiseOp);
app.listen(port, function () {
    console.log("Bitwise Hacks is running on port ".concat(port, "."));
});
//# sourceMappingURL=index.js.map