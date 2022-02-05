import express, { Request, Response, NextFunction } from "express";
import { v4 as uuidv4 } from "uuid";

const app = express();
const port = 3000;

interface BitwiseOperations {
        title: string;
        formal: string;
        examples: string[];
        description: string | undefined;
        notes: string | undefined;
}

let bitwiseOps: BitwiseOperations[] = [
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

const addBitwiseOp = (
        request: Request,
        response: Response,
        next: NextFunction
) => {
        const data = request.body;
        const bitwiseOp: BitwiseOperations = {
                title: data.title,
                formal: data.formal,
                examples: data.examples,
                description: data.examples ? data.examples : undefined,
                notes: data.notes ? data.notes : undefined,
        };

        bitwiseOps.unshift(bitwiseOp);
        response.status(200).json(bitwiseOp);
};

const deleteBitwiseOp = (
        request: Request,
        response: Response,
        next: NextFunction
) => {
        const data = request.body;
};

const retrieveBitwiseOps = (
        request: Request,
        response: Response,
        next: NextFunction
) => {
        response.status(200).json(bitwiseOps);
};

app.get("/", retrieveBitwiseOps);

app.post("/", addBitwiseOp);

app.listen(port, () => {
        console.log(
                `Timezones by location application is running on port ${port}.`
        );
});
