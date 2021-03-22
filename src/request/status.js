import i18n from "@/locales/locale"
import router from '@/router'

import {elMessage} from '@/utils/message.js'
let statusMap = new Map([
    [
        [100101, 100201, 101701, 102801, 102102, 102103, 102104],
        'status.text1'
    ],
    [
        [100111, 100113, 101505],
        'status.text2'
    ],
    [
        '101506',
        'status.text3'
    ],
    [
        '100115',
        'status.text4'
    ],
    [
        [100116, 101704],
        'status.text5'
    ],
    [
        '100202',
        'status.text6'
    ],
    [
        '100203',
        'status.text7'
    ],
    [
        '101503',
        'status.text8'
    ],
    [
        '101703',
        'status.text9'
    ],
    [
        '102002',
        'status.text10'
    ],
    [
        '102003',
        'status.text11'
    ],
    [
        '101702',
        'status.text12'
    ],
    [
        '101504',
        'status.text13'
    ],
    [
        '102603',
        'status.text14'
    ],
    [
        '102606',
        'status.text15'
    ],
    [
        '102607',
        'status.text16'
    ],
    [
        '103001',
        'status.text17'
    ],
    [
        '103001',
        'status.'
    ],
])
const judgeStatus = (code)=> {
    let item = [...statusMap].find( ([key]) => {
        return key.includes(code)
    })
    let text = !item ? 'text204' : item[1]
    elMessage({
        message: i18n.t(text),
        type: "error",
        duration: 2 * 1000,
    });
}

export default judgeStatus
