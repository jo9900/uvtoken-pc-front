const MixinScrollAnimate = {
    data:()=>({
        listenHandlerScroll: undefined,
        scrollAnimateEL: {}
    }),
    mounted() {
        this.listenHandlerScroll = _.throttle(this.scroll, 300)
        window.addEventListener('scroll', this.listenHandlerScroll)
    },
    methods: {
        scroll() {
            this.$nextTick(()=> {
                let height = document.documentElement.offsetHeight || document.body.offsetHeight;
                for (let key in this.scrollAnimateEL) {
                    if (this.scrollAnimateEL[key]) continue
                    let containerHeight =  this.$refs[`${key}`].getBoundingClientRect().top
                    if (containerHeight && containerHeight  <  height - 230) {
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
