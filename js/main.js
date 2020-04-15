const vm_main = new Vue({
    el:"#main",
    data:{
        input:"",
        result:0,
        bins:[]
    },
    methods: {
        
    },
    watch: {
        input(){
            this.result = 0
            this.bins = []
            //this.input = this.input.slice(0,8);
            this.input = this.input.replace(" ","");
            this.input = this.input.replace(/[^0-1]/g,"");
            

            let values = [];
            values.push("");
            for(let i = this.input.length - 1; i >= 0; i--)
            {
                if(values[values.length - 1].length == 8)
                {
                    values.push("");
                }
                values[values.length - 1] = this.input[i] + values[values.length - 1];
            }
            this.input = "";
            values.reverse();
            this.input = values.join(" ");

            values.forEach(value => {
                if(value)
                {
                    this.bins.push(parseInt(value,2));
                    this.result += parseInt(value,2);
                }
            });
        }
    },
});