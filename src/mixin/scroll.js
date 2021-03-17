const MixinScrollAnimate = {
    data:()=>({
        listenHandlerScroll: undefined,
        scrollAnimateEL: {}
    }),
    mounted() {
        this.listenHandlerScroll = _.throttle(this.scroll, 100)
        window.addEventListener('scroll', this.listenHandlerScroll)
    },
    methods: {
        scroll() {
            this.$nextTick(()=> {
                let height = document.documentElement.clientHeight || document.body.clientHeight;
                for (let key in this.scrollAnimateEL) {
                    if (this.scrollAnimateEL[key]) continue
                    let imgHeight =  this.$refs[`${key}`].getBoundingClientRect().top
                    if (imgHeight && imgHeight  <  height - 210) {
                        this.scrollAnimateEL[key] = true
                    }
                }
                if (!Object.values(this.scrollAnimateEL).includes(false)) {
                    window.removeEventListener('scroll', this.listenHandlerScroll)
                }
            })
        }
    },
    beforeDestroy() {
        window.removeEventListener('scroll', this.listenHandlerScroll)
    }
}
export default MixinScrollAnimate
