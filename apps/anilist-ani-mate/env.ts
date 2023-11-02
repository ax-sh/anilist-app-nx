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
