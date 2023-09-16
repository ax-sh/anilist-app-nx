import {
  cleanEnv,
  str,
  // , email, json
} from 'envalid';

export const env = cleanEnv(process.env, {
  NODE_ENV: str({ choices: ['development', 'test', 'production', 'staging'] }),
  ANILIST_GRAPHQL_API_DOMAIN: str(),
  ANILIST_ID: str(),
  ANILIST_SECRET: str(),
  // ADMIN_EMAIL: email({ default: 'admin@example.com' }),
  // EMAIL_CONFIG_JSON: json({ desc: 'Additional email parameters' }),
});
