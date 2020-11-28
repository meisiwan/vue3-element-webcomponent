// import '/index';
import '/main.js';
import('/style.css');
import('/index.scss');
import theme from 'vitePress/dist/client/theme-default';
export default {
    Layout: theme.Layout,
    NotFound: () => 'custom 404', // <- this is a Vue 3 functional component
    enhanceApp({ app, router, siteData }) {
        app.config.isCustomElement = tag => {
            console.log(tag);
            return tag.startsWith('el-')
        }
        // app is the Vue 3 app instance from createApp()
        // router is VitePress' custom router (see `lib/app/router.js`)
        // siteData is a ref of current site-level metadata.
    }
}