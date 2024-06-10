import './assets/css/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { fab } from '@fortawesome/free-brands-svg-icons';
import { MotionPlugin } from '@vueuse/motion';
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import * as Sentry from "@sentry/vue";

library.add(fas, fab)

const app = createApp(App)

Sentry.init({
    app,
    logErrors: true,
    dsn: "https://5804e26207b900d2cbdacb6cdf662962@o4507410023448576.ingest.us.sentry.io/4507410030067712",
    integrations: [
      Sentry.browserTracingIntegration(),
      Sentry.replayIntegration(),
    ],
    // Performance Monitoring
    tracesSampleRate: 1.0, //  Capture 100% of the transactions
    // Set 'tracePropagationTargets' to control for which URLs distributed tracing should be enabled
    tracePropagationTargets: ["localhost", /^https:\/\/yourserver\.io\/api/],
    // Session Replay
    replaysSessionSampleRate: 0.1, // This sets the sample rate at 10%. You may want to change it to 100% while in development and then sample at a lower rate in production.
    replaysOnErrorSampleRate: 1.0, // If you're not already sampling the entire session, change the sample rate to 100% when sampling sessions where errors occur.
});

app.use(router)
app.use(MotionPlugin)
app.component("font-awesome-icon", FontAwesomeIcon)

app.mount('#app')
