/**防止重复点击重复弹出message弹框 */
import {Message} from 'element-ui';
let messageInstance = null;
const resetMessage = (options) => {
        if(messageInstance) {
            messageInstance.close()
        }
        if(typeof options === 'string') {
            options = {
                message:options,
            }
        }
        options.duration = 2000
        options.showClose = true
        messageInstance = Message(options)
    }
;['error','success','info','warning'].forEach(type => {
    resetMessage[type] = options => {
        if(typeof options === 'string') {
            options = {
                message:options
            }
        }
        options.type = type
        return resetMessage(options)
    }
})
export const elMessage = resetMessage
