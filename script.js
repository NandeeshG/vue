/* eslint-disable no-debugger, no-console, no-unused-vars, no-mixed-spaces-and-tabs */

let gctr = 0
const Counter = {
    data () {
	return {
	    counter : 0,
	    btn_text : 'Increase value'
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
Vue.createApp(Counter).mount('#counter')
/* eslint-enable no-undef */
