import Vue from "vue";

import VueI18n from "vue-i18n";
import enLocale from 'element-ui/lib/locale/lang/en'
import zhLocale from 'element-ui/lib/locale/lang/zh-CN'
import arLocale from 'element-ui/lib/locale/lang/ar'
import jaLocale from 'element-ui/lib/locale/lang/ja'
import koLocale from 'element-ui/lib/locale/lang/ko'
import ruLocale from 'element-ui/lib/locale/lang/ru-RU'
import en from "./en";
import zh from "./zh";
import ar from "./ar";
import ja from "./ja";
import ko from "./ko";
import ru from "./ru";

Vue.use(VueI18n);

let i18n;
let f = ''
const map = {
    'zh': ['简体中文', 'Chinese'],
    'en': ['English', 'English'],
    'ja': ['日本語', 'Japanese'],
    'ar': ['عربى', 'Arabic'],
    'ko': ['한국어', 'Korean'],
    'ru': ['русский', 'Russian'],
}
let langType = window.navigator.language
if (langType.includes('zh')) langType = 'zh'
if (localStorage.getItem("lang") ) {
    f = localStorage.getItem("lang")
} else {
    localStorage.setItem("lang", langType)
    f = langType
}
if (!localStorage.getItem("langType")) {
    localStorage.setItem("langType", map[langType][1])
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
    'ja': {
        ...ja,
        ...jaLocale
    },
    'ar': {
        ...ar,
        ...arLocale
    },
    'ko': {
        ...ko,
        ...koLocale
    },
    'ru': {
        ...ru,
        ...ruLocale
    }
}
i18n = new VueI18n({locale: f, messages: _messages});
export default i18n
