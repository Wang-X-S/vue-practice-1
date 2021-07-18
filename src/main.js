import Vue from 'vue'



Vue.config.productionTip = false

import Demo from "./Demo.vue"
import Destroy from "./Destroy"
import Props from "./Props"

Vue.component('Demo2',{
  template:`<div>我是第二个组件</div>`
})
new Vue({
  components:{
    Props,
    Destroy,
    Demo3:{
      template:`<div>我是第三个组件{{n}}</div>`,
      data(){
        return {
          n:333
        }
      }
    },
    Demo:Demo //可缩写为 Demo
  },
  created(){

    console.log('出现在内存中，没有出现在页面中')
  },
  mounted(){

    console.log('出现在页面中')
  },
  updated(){
    console.log('更新了')
    console.log(this.n)
  },
  template:`
    <div>
      {{n}}
      <button @click="add">+1</button>
      <hr>
      {{filter()}}
      <Demo/>
      <Demo2/>
      <Demo3/>
      <button @click="toggle">destroy</button>
      <Destroy v-if="visible===true"/>
      <Props :message="array" :fn="add" :n="n"/>
    </div>
  `,
  data(){
    return{
      n:0,
      array:[1,2,3,4,5,6,7,8],
      visible:true,

    }
  },
  methods:{
    toggle(){
      this.visible=!this.visible
    },
      add(){
        this.n+=1
      },
      filter(){
        console.log('执行了一次')
        return this.array.filter(i=>i%2===0)
      }
  },

}).$mount('#other')
