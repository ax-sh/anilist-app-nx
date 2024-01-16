import pino, { LoggerOptions } from 'pino';

// const level = env.LOG_LEVEL
const pinoOptions: LoggerOptions = {
  // level,
  formatters: {
    // level: level => {
    //   return { level: level.toUpperCase() }
    // },
    // bindings: () => {
    //   if (env.SELF_HOSTED) {
    //     // "service" is being injected in datadog using the pod names,
    //     // so we should leave it blank to allow the default behaviour if it's not running self-hosted
    //     return {
    //       service: env.SERVICE_NAME,
    //     }
    //   } else {
    //     return {}
    //   }
    // },
  },
  timestamp: () => `,"timestamp":"${new Date(Date.now()).toISOString()}"`,
};
export const logger = pino(pinoOptions);
