import { cleanEnv, str } from 'envalid';
// import { envsafe, url } from 'envsafe';

export const env = cleanEnv(process.env, {
  ANILIST_GRAPHQL_API_DOMAIN: str(),
  ANILIST_ID: str(),
  ANILIST_SECRET: str(),
  NODE_ENV: str({ choices: ['development', 'test', 'production', 'staging'] }),
  // eslint-disable-next-line  pii/no-email
  // ADMIN_EMAIL: email({ default: 'admin@example.com' }),
  // EMAIL_CONFIG_JSON: json({ desc: 'Additional email parameters' }),
});
//
// export const env = envsafe({
//   NODE_ENV: str({
//     devDefault: 'development',
//     choices: ['development', 'test', 'production'],
//   }),
//
//   ANILIST_GRAPHQL_API_DOMAIN: url({
//     devDefault: 'https://graphql.anilist.co',
//   }),
//   ANILIST_ID: str({
//     devDefault: 'ANILIST_ID',
//   }),
//   ANILIST_SECRET: str({
//     devDefault: 'ANILIST_SECRET',
//   }),
// });
//
//
// import { createEnv } from "@t3-oss/env-nextjs";
// import { z } from "zod";
//
// export const env = createEnv({
//   /*
//    * Serverside Environment variables, not available on the client.
//    * Will throw if you access these variables on the client.
//    */
//   server: {
//     DATABASE_URL: z.string().url(),
//     OPEN_AI_API_KEY: z.string().min(1),
//   },
//   /*
//    * Environment variables available on the client (and server).
//    *
//    * 💡 You'll get type errors if these are not prefixed with NEXT_PUBLIC_.
//    */
//   client: {
//     NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY: z.string().min(1),
//   },
//   /*
//    * Due to how Next.js bundles environment variables on Edge and Client,
//    * we need to manually destructure them to make sure all are included in bundle.
//    *
//    * 💡 You'll get type errors if not all variables from `server` & `client` are included here.
//    */
//   runtimeEnv: {
//     DATABASE_URL: process.env.DATABASE_URL,
//     OPEN_AI_API_KEY: process.env.OPEN_AI_API_KEY,
//     NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY:
//     process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY,
//   },
// });
