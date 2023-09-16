import {
  cleanEnv,
  str,
  // , email, json
} from 'envalid';
import { envsafe, url } from 'envsafe';

// export const env = cleanEnv(process.env, {
//   NODE_ENV: str({ choices: ['development', 'test', 'production', 'staging'] }),
//   ANILIST_GRAPHQL_API_DOMAIN: str(),
//   ANILIST_ID: str(),
//   ANILIST_SECRET: str(),
//   // ADMIN_EMAIL: email({ default: 'admin@example.com' }),
//   // EMAIL_CONFIG_JSON: json({ desc: 'Additional email parameters' }),
// });

export const env = envsafe({
  NODE_ENV: str({
    devDefault: 'development',
    choices: ['development', 'test', 'production'],
  }),

  ANILIST_GRAPHQL_API_DOMAIN: url({
    devDefault: 'https://graphql.anilist.co',
  }),
  ANILIST_ID: str({
    devDefault: 'ANILIST_ID',
  }),
  ANILIST_SECRET: str({
    devDefault: 'ANILIST_SECRET',
  }),
});
