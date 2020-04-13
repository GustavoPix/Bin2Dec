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
            this.input = this.input.replace(/[^0-1]/g,"");
            this.input = this.input.replace("-","");
            this.result = this.input.length > 0 ? parseInt(this.input,2) : 0;
        }
    },
});