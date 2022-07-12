import GitFlow from "@/GitFlow";

const GitFlowApp = {
    install(Vue, options) {
        Vue.component("git-flow", GitFlow)
    }
};

if (typeof window !== 'undefined' && window.Vue) {
    window.Vue.use(GitFlowApp);
}

export default GitFlowApp;