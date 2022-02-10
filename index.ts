import express, { Request, Response, NextFunction } from "express";
import { v4 as uuidv4 } from "uuid";

const app = express();
app.use(express.json())
const port = 3000;

interface BitwiseOperations {
  title: string;
  formal: string;
  examples: string[];
  description: string | null;
  notes: string | null;
  id: number;
}

let bitwiseOps: BitwiseOperations[] = [
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

let id = 2; //so bad lol

const addBitwiseOp = (
  request: Request,
  response: Response,
  next: NextFunction
) => {
  // console.log('hello')
  // const data = request.body
  // const bitwiseOp: BitwiseOperations = {
  //   title: data.title,
  //   formal: data.formal,
  //   examples: data.examples,
  //   description: data.description ? data.description : null,
  //   notes: data.notes ? data.notes : null,
  //   id: id,
  // };
  // id += 1;
  // bitwiseOps.unshift(bitwiseOp);
  // console.log(bitwiseOp);
  // response.status(200)
  console.log('Got body:', request.body);
  response.send("Fucking post request successful")
};

const deleteBitwiseOp = (
  request: Request,
  response: Response,
  next: NextFunction
) => {
  const idToDelete = request.params.id;
  bitwiseOps.filter((bwo: BitwiseOperations) => {
    bwo.id !== parseInt(idToDelete);
  });
  response.status(200).json(bitwiseOps);
};

const retrieveBitwiseOps = (
  request: Request,
  response: Response,
  next: NextFunction
) => {
  response.status(200).json(bitwiseOps);
};

const retrieveSpecificBitwiseOp = (
  request: Request,
  response: Response,
  next: NextFunction
) => {
  try {
    bitwiseOps.find((bwo: BitwiseOperations) => {
      bwo.id === parseInt(request.params.slug);
    });
  } catch (e) {
    console.log(e);
  }
};

app.get("/", retrieveBitwiseOps);

app.get("/:id", retrieveSpecificBitwiseOp);

app.post("/", addBitwiseOp);

app.delete("/:id", deleteBitwiseOp);

app.listen(port, () => {
  console.log(`Bitwise Hacks is running on port ${port}.`);
});
