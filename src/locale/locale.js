import Vue from "vue";

import VueI18n from "vue-i18n";
import enLocale from 'element-ui/lib/locale/lang/en'
import zhLocale from 'element-ui/lib/locale/lang/zh-CN'
// import arLocale from 'element-ui/lib/locale/lang/ar'
// import jaLocale from 'element-ui/lib/locale/lang/ja'
// import koLocale from 'element-ui/lib/locale/lang/ko'
// import ruLocale from 'element-ui/lib/locale/lang/ru-RU'
import en from "./en";
import zh from "./zh";

Vue.use(VueI18n);

let i18n;
let f = ''
if (localStorage.getItem("lang") ) {
    f = localStorage.getItem("lang")
} else {
    localStorage.setItem("lang", 'zh')
    f = 'zh'
}
if (!localStorage.getItem("langType")) {
    localStorage.setItem("langType", 'Chinese')
}
const _messages = {
    'zh': {
        ...zh,
        ...zhLocale
    },
    'en': {
        ...en,
        ...enLocale
    },
    // 'ja': {
    //     ...messages.ja,
    //     ...jaLocale
    // },
    // 'ar': {
    //     ...messages.ar,
    //     ...arLocale
    // },
    // 'ko': {
    //     ...messages.ko,
    //     ...koLocale
    // },
    // 'ru': {
    //     ...messages.ru,
    //     ...ruLocale
    // }
}
i18n = new VueI18n({locale: f, messages: _messages});
export default i18n
