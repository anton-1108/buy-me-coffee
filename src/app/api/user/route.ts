import { runQuery } from "@/util/server/queryService";
// import { NextResponse } from "next/server";

// export async function GET(): Promise<NextResponse> {
//   try {
//     const incomingName = "boldo";
//     // const createTable = `CREATE TABLE "public"."Food" ("id" integer PRIMARY KEY,"name" varchar NOT NULL,"price" integer);`;
//     const getUser = `SELECT name,password FROM "User" WHERE name='${incomingName}' AND password='1235';`;

//     const user = await runQuery(getUser);
//     if (user.length <= 0) {
//       return new NextResponse(JSON.stringify({ error: "user not found" }), {
//         status: 404,
//       });
//     }

//     return new NextResponse(JSON.stringify({ foods: user }));
//   } catch (err) {
//     console.error("Failed to run query:", err);
//     return new NextResponse(JSON.stringify({ error: "Failed to run query" }), {
//       status: 500,
//     });
//   }
// }

import { NextResponse } from "next/server";

export async function POST(request: Request): Promise<NextResponse> {
  try {
    const body = await request.json();
    const { name, email, password } = body;

    const insertUser = `INSERT INTO "User" (username, email, password) VALUES ($1, $2,$3) RETURNING *;`;
    const result = await runQuery(insertUser, [name, email, password]);

    return new NextResponse(JSON.stringify({ user: result[0] }), {
      status: 201,
    });
  } catch (err) {
    console.error("Error inserting user:", err);
    return new NextResponse(
      JSON.stringify({ error: "Failed to insert user" }),
      {
        status: 500,
      }
    );
  }
}

export async function GET(): Promise<NextResponse> {
  try {
    const incomingName = "boldo";
    // const createTable = `CREATE TABLE "public"."Food" ("id" integer PRIMARY KEY,"name" varchar NOT NULL,"price" integer);`;
    const getUser = `SELECT * FROM User;`;

    const user = await runQuery(getUser);
    if (user.length <= 0) {
      return new NextResponse(JSON.stringify({ error: "user not found" }), {
        status: 404,
      });
    }

    return new NextResponse(JSON.stringify({ foods: user }));
  } catch (err) {
    console.error("Failed to run query:", err);
    return new NextResponse(JSON.stringify({ error: "Failed to run query" }), {
      status: 500,
    });
  }
}
