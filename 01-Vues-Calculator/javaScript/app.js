var app = new Vue({
  el:'#appCalculator',
  data:{
    prev: null,
    current: '',
    operator: null,
    operatiorClick: false,
  },
  methods:{
    clear(){
      this.current ="";
    },
    sign(){
      this.current = this.current.charAt(0) === '-'?
        this.current.slice(1) : '-'+this.current;
    },
    percent(){
      this.current = parseFloat(this.current) / 100;
    },
    append(number){
      if(this.operatiorClick){
        this.current = "";
        this.operatiorClick = false;
      }
        this.current = this.current +number;
    },
    dot(){
      if (this.current.indexOf('.') ===  -1){
        this.append('.')
      }
    },
    setPrev(){
      this.prev = this.current;
      this.operatiorClick = true;
    },
    divide(){
      this.operator = (a, b) => a/b;
      this.setPrev();
    },
    times(){
      this.operator = (a, b) => a*b;
      this.setPrev();
    },
    minus(){
      this.operator = (a, b) => a-b;
      this.setPrev();
    },
    plus(){
      this.operator = (a, b) => a+b;
      this.setPrev();
    },
    equal(){
      this.current = this.operator(
        parseFloat(this.current),
        parseFloat(this.prev));
      this.prev = null;
    }
  }
});
