import baselinetitle from './components/baseline-title';

const components = {
    baselinetitle
};

const viewg = {
    ...components
};

const install = function(Vue, opts = {}) {
    if (install.installed) return;

    Object.keys(viewg).forEach(key => {
        Vue.component(key, viewg[key]);
    });
};

// auto install
if (typeof window !== 'undefined' && window.Vue) {
    install(window.Vue);
}

const API = {
    version: process.env.VERSION, // eslint-disable-line no-undef
    install,
    ...components
};



module.exports.default = module.exports = API;   // eslint-disable-line no-undef
