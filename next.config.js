// next.config.js

// 1. Define 'env' to hold the environment variables (or defaults if validation is skipped).
let env;

try {
  // 2. We attempt to load the validated environment variables.
  // This 'require' will throw the error if validation fails due to missing variables.
  env = require('./src/env'); 

  // NOTE: If you use the T3 stack's env setup, this require might return an object 
  // with the variables, or it might just execute the validation side-effect.
  
} catch (err) {
  // 3. If validation fails (e.g., during CI/Build), the catch block executes.
  // We use safe defaults (an empty object or specific fallback values) 
  // for config that is *only* needed during the build phase.
  console.log("Skipping strict env validation for next.config.js load.");
  env = {}; 
}

// 4. Now, the rest of the config runs safely.
/** @type {import("next").NextConfig} */
const config = {
  // Example: If you need an env var for your config...
  // serverRuntimeConfig: {
  //   MY_BUILD_VAR: env.MY_BUILD_VAR_NAME || 'fallback_default'
  // },
  
  // ... other configuration settings
};

export default config;
