/* eslint-disable no-debugger, no-console, no-unused-vars, no-mixed-spaces-and-tabs */


let gctr = 0
const counter_var = {
    data () {
	return {
	    counter : 0
	}
    },
    mounted(){
	setInterval(()=>{
	    this.counter = gctr;
	},200);
    }
}

var clickhandle = function() {
    console.log('Hi gctr ',gctr);
    gctr++;
    console.log('Bye gctr ',gctr);
};
//document.getElementById('btn').addEventListener('click',function(){ gctr++; });

/* eslint-disable no-undef */
Vue.createApp(counter_var).mount('#counter')
/* eslint-enable no-undef */
