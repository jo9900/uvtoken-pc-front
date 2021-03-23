
import i18n from "@/locales/locale"

const MixinSlideVerify = {
    data: ()=> ({
        msg: '',
        text: i18n.t( 'text45' ),
        // 精确度小，可允许的误差范围小；为1时，则表示滑块要与凹槽完全重叠，才能验证成功。默认值为5
        accuracy: 8,
        imgs:  []
    }),
    methods: {
        onSuccess(times){
        },
        onFail(){
            console.log('验证不通过');
            this.msg = ''
        },
        onRefresh(){
            // this.getImg()
            console.log('点击了刷新小图标');
            // this.msg = ''
        },
        onFulfilled() {
            console.log('刷新成功啦！');
        },
        onAgain() {
            console.log('检测到非人为操作的哦！');
            this.msg = 'try again';
            // 刷新
            this.$refs.slideblock.reset();
        },
        handleClick() {
            this.$refs.slideblock.reset();
        },
    },
    created() {
    },
}
export default MixinSlideVerify
