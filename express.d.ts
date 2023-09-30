import customUser from "./src/models/user";

declare global {
  namespace Express {
    interface User extends customUser {};
  }
}