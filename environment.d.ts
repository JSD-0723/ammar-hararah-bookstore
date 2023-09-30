import { GetPublicKeyOrSecret, Secret } from "jsonwebtoken";
import { SecretOrKeyProvider } from "passport-jwt";

declare global {
    namespace NodeJS {
      interface ProcessEnv {
        NODE_ENV: 'development' | 'production';
        PORT?: string;
        PWD: string;
        JWT_SECRET: Secret;
        JWT_SECRET_OR_KEY: string | Buffer | undefined
      }
    }
  }