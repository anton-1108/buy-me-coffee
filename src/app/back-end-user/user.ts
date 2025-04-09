import { UserType } from "@/util/types";

let users: UserType[] = [];

export async function getUsers(): Promise<UserType[]> {
  console.log("Current users:", users);
  return users;
}

export async function createUser(user: UserType): Promise<void> {
  console.log("Adding new user:", user);
  users.push(user);
}
