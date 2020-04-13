const vm_main = new Vue({
    el:"#main",
    data:{
        input:"",
        result:0
    },
    methods: {
        
    },
    watch: {
        input(){
            this.input = this.input.slice(0,8);
            this.result = parseInt(this.input,2);
        }
    },
});