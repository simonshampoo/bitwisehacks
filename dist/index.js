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
        description: undefined,
        notes: undefined,
    },
    {
        title: "check parity with &",
        formal: "a & 1 == (0 || 1)",
        examples: ["21 & 1 // returns 1", "10 & 1 // returns 0"],
        description: "will return when ",
        notes: "parity refers to whether a number is even or not",
    },
];
var retrieveBitwiseOps = function (request, response, next) {
    response.status(200).json(bitwiseOps);
};
app.get("/", retrieveBitwiseOps);
app.post("/");
app.listen(port, function () {
    console.log("Timezones by location application is running on port ".concat(port, "."));
});
//# sourceMappingURL=index.js.map