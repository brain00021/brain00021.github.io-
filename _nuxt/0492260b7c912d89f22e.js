(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{311:function(t,e,r){t.exports=r.p+"img/1b3627b.png"},313:function(t,e,r){var content=r(351);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(43).default)("2f5cc32a",content,!0,{sourceMap:!1})},350:function(t,e,r){"use strict";var n=r(313);r.n(n).a},351:function(t,e,r){(t.exports=r(42)(!1)).push([t.i,".weightcard[data-v-22e53d0a]{width:100%;background:#fff;max-width:640px;padding:15px;display:flex;justify-content:space-between;vertical-align:center;margin:15px auto;text-align:center}.weightcard>div[data-v-22e53d0a]{line-height:30px}.weightcard .title[data-v-22e53d0a]{color:#4a4a4a}.weightcard .content span[data-v-22e53d0a]:last-child{font-size:20pt;margin-left:5px}.red[data-v-22e53d0a]{border-left:5px solid red}.green[data-v-22e53d0a]{border-left:5px solid #86d73f}.blue[data-v-22e53d0a]{border-left:5px solid #31baf9}.bmi-header[data-v-22e53d0a]{background:#424242;overflow:hidden;color:#ffd366;display:flex;justify-content:center;align-items:center;padding:30px}.bmi-header .logo[data-v-22e53d0a]{margin:15px 50px 15px 15px;width:100px;height:100px;overflow:hidden}.bmi-header .logo img[data-v-22e53d0a]{width:100%}.bmi-footer[data-v-22e53d0a]{width:100%;height:auto;position:relative;background:#ffd366;overflow:hidden}.bmi-footer .logo-change[data-v-22e53d0a]{width:55px;height:55px;margin:15px auto;-webkit-filter:brightness(0);filter:brightness(0)}.bmi-footer .logo-change img[data-v-22e53d0a]{width:100%}.input-wrapper[data-v-22e53d0a]{width:33%;margin-right:20px;text-align:center}.input-wrapper span[data-v-22e53d0a]{display:block;text-align:left}.input-wrapper input[data-v-22e53d0a]{display:inline-block;width:100%;background:hsla(0,0%,100%,.2);border:1px solid #ffd366;border-radius:5px;padding:5px;color:#fff;font-weight:700}.input-check[data-v-22e53d0a]{margin:15px}.button[data-v-22e53d0a]{width:80px;height:80px;border-radius:50%;background:#ffd366;font-size:20px;font-weight:700;line-height:60px;color:#424242}.button[data-v-22e53d0a]:hover{box-shadow:0 0 10px #ffd366}.button[data-v-22e53d0a]:active{background:#ffb600}.bmi-content[data-v-22e53d0a]{background:#e8e8e8;padding:15px}",""])},437:function(t,e,r){"use strict";r.r(e);var n=[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"logo"},[e("img",{attrs:{src:r(311)}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"bmi-footer"},[e("div",{staticClass:"logo-change"},[e("img",{attrs:{src:r(311)}})])])}],d=(r(175),r(176),r(15),{data:function(){return{heightNumber:0,weightNumber:0,bmiresult:0,datetime:"",todolistArry:JSON.parse(window.localStorage.getItem("todolist")||"[]"),bmicurrenttitle:"基本體重"}},watch:{todolistArry:function(t){window.localStorage.setItem("todolist",JSON.stringify(t))},deep:!0},methods:{checkWeight:function(){var t=/^[0-9]*$/;t.test(this.weightNumber.toString())&&t.test(this.heightNumber.toString())?(this.bmiresult=0!==this.weightNumber||0!==this.heightNumber?(this.weightNumber/(2*this.heightNumber)*100).toFixed(2):0,this.getDate(),this.getTitle(),this.todolistArry.push({weight:this.weightNumber,height:this.heightNumber,BMI:this.bmiresult,Date:this.datetime,Title:this.bmicurrenttitle})):alert("請輸入正確的數字")},getDate:function(){var t=new Date;this.datetime="Time:"+t.getFullYear()+"/"+(t.getMonth()+1)+"/"+t.getDate()},getTitle:function(){this.bmiresult<=15?this.bmicurrenttitle="Too Skinny":this.bmiresult<=16?this.bmicurrenttitle="Skinny":this.bmiresult<=18.5?this.bmicurrenttitle="Thin":this.bmiresult<=25?this.bmicurrenttitle="Normal":this.bmiresult<=30?this.bmicurrenttitle="OverWeight":this.bmiresult<=35?this.bmicurrenttitle="MidWeight":this.bmiresult<=40?this.bmicurrenttitle="Obese":this.bmicurrenttitle="Too Fat"}}}),o=(r(350),r(11)),component=Object(o.a)(d,function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"bmi-wrapper"},[r("div",{staticClass:"bmi-header"},[t._m(0),r("div",{staticClass:"input-wrapper"},[r("div",{staticClass:"input-content"},[r("span",[t._v("Height / cm")]),r("input",{directives:[{name:"model",rawName:"v-model",value:t.heightNumber,expression:"heightNumber"}],domProps:{value:t.heightNumber},on:{input:function(e){e.target.composing||(t.heightNumber=e.target.value)}}})]),r("div",{staticClass:"input-content"},[r("span",[t._v("Weight / kg")]),r("input",{directives:[{name:"model",rawName:"v-model",value:t.weightNumber,expression:"weightNumber"}],domProps:{value:t.weightNumber},on:{input:function(e){e.target.composing||(t.weightNumber=e.target.value)}}})])]),r("div",{staticClass:"input-check"},[r("div",{staticClass:"button",on:{click:function(e){return t.checkWeight()}}},[t._v("Result")])])]),r("div",{staticClass:"bmi-content"},[r("h1",[t._v("BMI History")]),r("hr"),t._l(t.todolistArry,function(e){return r("div",{staticClass:"weightcard",class:[{red:e.BMI>40},{green:e.BMI<40},{blue:e.BMI<16}]},[r("div",{staticClass:"title"},[t._v(t._s(e.Title))]),r("div",{staticClass:"content"},[r("span",[t._v("BMI")]),r("span",[t._v(t._s(e.BMI))])]),r("div",{staticClass:"content"},[r("span",[t._v("Weight")]),r("span",[t._v(t._s(e.weight)+"kg")])]),r("div",{staticClass:"content"},[r("span",[t._v("Height")]),r("span",[t._v(t._s(e.height)+"cm")])]),r("div",{staticClass:"date"},[t._v(t._s(e.Date))])])})],2),t._m(1)])},n,!1,null,"22e53d0a",null);e.default=component.exports}}]);