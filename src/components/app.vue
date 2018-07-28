<template>
    <div id="container">
        <ul class="img-wrap">
            <li>
                <a href="">
                    <img src="" alt="" data-src="http://cdn.jirengu.com/book.jirengu.com/img/1.jpg">
                    <p>LOADING</p>
                </a>
            </li>
            <li>
                <a href="">
                    <img src="" alt="" data-src="http://cdn.jirengu.com/book.jirengu.com/img/2.jpg">
                    <p>LOADING</p>
                </a>
            </li>
            <li>
                <a href="">
                    <img src="" alt="" data-src="http://cdn.jirengu.com/book.jirengu.com/img/3.jpg">
                    <p>LOADING</p>
                </a>
            </li>
            <li>
                <a href="">
                    <img src="" alt="" data-src="http://cdn.jirengu.com/book.jirengu.com/img/4.jpg">
                    <p>LOADING</p>
                </a>
            </li>
            <li>
                <a href="">
                    <img src="" alt="" data-src="http://cdn.jirengu.com/book.jirengu.com/img/5.jpg">
                    <p>LOADING</p>
                </a>
            </li>
            <li>
                <a href="">
                    <img src="" alt="" data-src="http://cdn.jirengu.com/book.jirengu.com/img/6.jpg">
                    <p>LOADING</p>
                </a>
            </li>
            <li>
                <a href="">
                    <img src="" alt="" data-src="http://cdn.jirengu.com/book.jirengu.com/img/7.jpg">
                    <p>LOADING</p>
                </a>
            </li>
            <li>
                <a href="">
                    <img src="" alt="" data-src="http://cdn.jirengu.com/book.jirengu.com/img/8.jpg">
                    <p>LOADING</p>
                </a>
            </li>
            <li>
                <a href="">
                    <img src="" alt="" data-src="http://cdn.jirengu.com/book.jirengu.com/img/9.jpg">
                    <p>LOADING</p>
                </a>
            </li>
            <li>
                <a href="">
                    <img src="" alt="" data-src="http://cdn.jirengu.com/book.jirengu.com/img/10.jpg">
                    <p>LOADING</p>
                </a>
            </li>
            <li>
                <a href="">
                    <img src="" alt="" data-src="http://cdn.jirengu.com/book.jirengu.com/img/11.jpg">
                    <p>LOADING</p>
                </a>
            </li>
            <li>
                <a href="">
                    <img src="" alt="" data-src="http://cdn.jirengu.com/book.jirengu.com/img/12.jpg">
                    <p>LOADING</p>
                </a>
            </li>
            <li>
                <a href="">
                    <img src="" alt="" data-src="http://cdn.jirengu.com/book.jirengu.com/img/13.jpg">
                    <p>LOADING</p>
                </a>
            </li>
            <li>
                <a href="">
                    <img src="" alt="" data-src="http://cdn.jirengu.com/book.jirengu.com/img/14.jpg">
                    <p>LOADING</p>
                </a>
            </li>
            <li>
                <a href="">
                    <img src="" alt="" data-src="http://cdn.jirengu.com/book.jirengu.com/img/15.jpg">
                    <p>LOADING</p>
                </a>
            </li>
            <li>
                <a href="">
                    <img src="" alt="" data-src="http://cdn.jirengu.com/book.jirengu.com/img/16.jpg">
                    <p>LOADING</p>
                </a>
            </li>
            <li>
                <a href="">
                    <img src="" alt="" data-src="http://cdn.jirengu.com/book.jirengu.com/img/17.jpg">
                    <p>LOADING</p>
                </a>
            </li>
            <li>
                <a href="">
                    <img src="" alt="" data-src="http://cdn.jirengu.com/book.jirengu.com/img/18.jpg">
                    <p>LOADING</p>
                </a>
            </li>
            <li>
                <a href="">
                    <img src="" alt="" data-src="http://cdn.jirengu.com/book.jirengu.com/img/19.jpg">
                    <p>LOADING</p>
                </a>
            </li>
            <li>
                <a href="">
                    <img src="" alt="" data-src="http://cdn.jirengu.com/book.jirengu.com/img/20.jpg">
                    <p>LOADING</p>
                </a>
            </li>

            <li v-for="list in imglist" 
            v-bind:key="list.imgsrc">
                <a href="">
                    <!-- <img src="" alt="" v-bind:data-src="list.imgsrc" class="flagimg"
                    v-bind:key="Math.random()"> -->
                    <img v-bind:src="list.imgsrc">
                    <p v-bind:style="{'color':'black','font-weight':'bold','animation':'load 2s linear 1'}">LOADING</p>
                </a>
            </li>

        </ul>
        <span class="flag">曝光标记</span>
    </div>
</template>


<script>
    import $ from 'jquery';
    import axios from 'axios';
    const url="http://rap2api.taobao.org/app/mock/18520/exposureimg"




export default {
    data:function(){
        return {
            imglist:[]
        }
    },

    mounted:function(){
    let _this=this
var Exposure=(function(){
            function Exposure($el,callback){
                this.el=$el
                this.callback=callback
                this.bind(this.el)
            }

            Exposure.prototype.renderNode=function(){
                if(this.isShow(this.el)){
                    this.callback(this.el)
                }
            }

            Exposure.prototype.isShow=function(){
                var scrolly=$(window).scrollTop(),
                    windowHeight=$(window).height(),
                    offsety=this.el.offset().top
                    if(offsety<windowHeight+scrolly && offsety>scrolly){
                        return true
                    }else{
                        return false
                    }
            }

            Exposure.prototype.bind=function(){
                var loading
                var _this=this
                _this.renderNode(this.el)
                $(window).on("scroll",function(){
                    if(loading){
                        clearTimeout(loading)
                    }
                    loading=setTimeout(function(){
                        _this.renderNode(this.el)
                    },500)
                })
            }

            return{
                exposure:function($nodelist,callback){
                    $nodelist.each(function(idx,el){
                        new Exposure($(el),function(){
                            callback($(el))
                        })
                    })
                }
            }
        }())


        function loadImg($el){
            if($el.attr("data-src") === $el.attr("src")){
                return
            }else{
                var dataSrc=$el.attr("data-src")
                $el.attr("src",dataSrc)
                console.log("load-img")
            }
        }

        function shackfont($el){
            $el.text("LOADED").css({"color":"black","font-weight":"bolder","animation":"load 2s linear 1"})
        }

        function send($el){
            axios.get(url).then(res=>{
                console.log(res.data.imglist)
                _this.imglist=_this.imglist.concat(res.data.imglist)
            })
        }

        Exposure.exposure($(".img-wrap>li>a>img"),loadImg)
        Exposure.exposure($("p"),shackfont)

        //以下函数执行使用vue管理dom渲染
        Exposure.exposure($(".flag"),send)
    }
    //使用手动操作DOM，每次数据变化后重新mounted后再操作dom(不建议在vue中操作DOM)
    // ,
    // updated:function(){
    //     // Exposure.exposure($(".img-wrap>li>a>img"),loadImg)
    //     $(".flagimg").each((i,e)=>{
    //         if($(e).attr("src")===$(e).attr("data-src")){
    //             return
    //         }
    //         $(e).attr("src",$(e).attr("data-src"))
    //     })
    // }
}
</script>


<style>
        @keyframes load{
            0%{}
            25%{transform:scale(2,2)}
        }

        div,ul,li,a,img,p{
            margin:0px;
            padding:0px;
        }

        a{
            text-decoration:none;
            color:#ccc;
        }
        #container{
            width:1000px;
            margin:0 auto;
        }

        .img-wrap{
            font-size:0px;
        }

        .img-wrap li{
            display:inline-block;
            width:480px;
            height:360px;
            font-size:16px;
            margin-left:10px;
            margin-bottom:30px;
            text-align:center;
        }


</style>


