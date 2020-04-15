const vm_main = new Vue({
    el:"#main",
    data:{
        input:"",
        result:"",
        bins:[],
        values:[]
    },
    methods: {
        lengthValue(i)
        {
            return this.values[i].length;
        }
    },
    watch: {
        input(){
            this.result = " ";
            this.bins = []
            //this.input = this.input.slice(0,8);
            this.input = this.input.replace(" ","");
            this.input = this.input.replace(/[^0-1]/g,"");
            

            this.values = [];
            this.values.push("");
            for(let i = this.input.length - 1; i >= 0; i--)
            {
                if(this.values[this.values.length - 1].length == 8)
                {
                    this.values.push("");
                }
                this.values[this.values.length - 1] = this.input[i] + this.values[this.values.length - 1];
            }
            this.input = "";
            this.values.reverse();
            this.input = this.values.join(" ");

            this.values.forEach(value => {
                if(value)
                {
                    this.bins.push(parseInt(value,2));
                    this.result += parseInt(value,2);
                }
            });
        }
    }
});