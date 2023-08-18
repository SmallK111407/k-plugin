import fetch from "node-fetch";
import _ from 'lodash'
import puppeteer from "../../../lib/puppeteer/puppeteer.js";
let MyUin
let cskg = 0
let sj = [{"name":"看这个","url":"https://api.xingzhige.com/API/Lookatthis/?key=JMHz65uMHMZ3WCpl4jQ1U1blRr&qq=","liang":0},
{"name":"抱","url":"https://api.xingzhige.com/API/baororo/?key=JMHz65uMHMZ3WCpl4jQ1U1blRr&qq=","liang":0},
{"name":"咬","url":"https://api.xingzhige.com/API/bite/?key=JMHz65uMHMZ3WCpl4jQ1U1blRr&qq=","liang":0},
{"name":"登记","url":"http://bh.ayud.top/img/jh?key=JMHz65uMHMZ3WCpl4jQ1U1blRr&qq=","liang":0},
{"name":"吞","url":"https://bg.suol.cc/API/chi/?uin=","liang":0},
{"name":"顶一顶","url":"http://bg.suol.cc/API/ding/?uin=","liang":0},
{"name":"拍","url":"https://api.xingzhige.com/API/paigua/?key=JMHz65uMHMZ3WCpl4jQ1U1blRr&qq=","liang":0},
{"name":"抓","url":"https://api.xingzhige.com/API/grab/?key=JMHz65uMHMZ3WCpl4jQ1U1blRr&qq=","liang":0},
{"name":"顶","url":"https://api.xingzhige.com/API/dingqiu/?key=JMHz65uMHMZ3WCpl4jQ1U1blRr&qq=","liang":0},
{"name":"一起笑","url":"https://api.xingzhige.com/API/LaughTogether/?key=JMHz65uMHMZ3WCpl4jQ1U1blRr&qq=","liang":0},
{"name":"搂","url":"https://api.xingzhige.com/API/FortuneCat/?key=JMHz65uMHMZ3WCpl4jQ1U1blRr&qq=","liang":0},
{"name":"摇摇","url":"https://api.xingzhige.com/API/DanceChickenLeg/?key=JMHz65uMHMZ3WCpl4jQ1U1blRr&qq=","liang":0},
{"name":"打拳","url":"https://api.andeer.top/API/gif_beat?key=JMHz65uMHMZ3WCpl4jQ1U1blRr&qq=","liang":0},
{"name":"捣","url":"https://api.xingzhige.com/API/pound/?key=JMHz65uMHMZ3WCpl4jQ1U1blRr&qq=","liang":0},
{"name":"撕","url":"http://api.caonm.net/api/sit/s?&qq=","liang":0},
{"name":"加框","url":"http://ovooa.caonm.net/API/head/?key=JMHz65uMHMZ3WCpl4jQ1U1blRr&qq=","liang":0},
{"name":"小马赞","url":"http://ovooa.caonm.net/API/zan/api?key=JMHz65uMHMZ3WCpl4jQ1U1blRr&qq=","liang":0},
{"name":"丢","url":"http://ovooa.caonm.net/API/diu/api?key=JMHz65uMHMZ3WCpl4jQ1U1blRr&qq=","liang":0},
{"name":"遗照","url":"http://lkaa.top/API/yi/?key=JMHz65uMHMZ3WCpl4jQ1U1blRr&qq=","liang":0},
{"name":"猫猫赞","url":"http://xiaobapi.top/api/xb/api/zan_2?key=JMHz65uMHMZ3WCpl4jQ1U1blRr&qq=","liang":0},
{"name":"牵","url":"http://api.tangdouz.com/wz/qian?q=","liang":1},//qq
{"name":"坏","url":"http://api.tangdouz.com/wz/py?q=","liang":0},
{"name":"鄙视","url":"http://xiaobai.klizi.cn/API/ce/bishi?key=JMHz65uMHMZ3WCpl4jQ1U1blRr&qq=","liang":0},
{"name":"捶","url":"http://xiaobai.klizi.cn/API/gif/hammer?key=JMHz65uMHMZ3WCpl4jQ1U1blRr&qq=","liang":0},
{"name":"报时","url":"http://xiaobai.klizi.cn/API/ce/msg?key=JMHz65uMHMZ3WCpl4jQ1U1blRr&qq=","liang":0},
{"name":"忘了他","url":"http://api.caonm.net/api/shoux/h?key=JMHz65uMHMZ3WCpl4jQ1U1blRr&qq=","liang":0},
{"name":"儿子","url":"http://api.caonm.net/api/wrz/r?key=JMHz65uMHMZ3WCpl4jQ1U1blRr&qq=","liang":0},
{"name":"拒绝","url":"http://api.caonm.net/api/wjj/j?key=JMHz65uMHMZ3WCpl4jQ1U1blRr&qq=","liang":0},
{"name":"原谅","url":"http://api.caonm.net/api/lmz/l?key=JMHz65uMHMZ3WCpl4jQ1U1blRr&qq=","liang":0},
{"name":"我老婆","url":"http://api.caonm.net/api/nmy/n?key=JMHz65uMHMZ3WCpl4jQ1U1blRr&qq=","liang":0},
{"name":"女儿","url":"http://api.caonm.net/api/wnr/n?key=JMHz65uMHMZ3WCpl4jQ1U1blRr&qq=","liang":0},
{"name":"让你","url":"http://api.caonm.net/api/bgz/g?key=JMHz65uMHMZ3WCpl4jQ1U1blRr&qq=","liang":0},
{"name":"广告牌","url":"http://api.caonm.net/api/dal/l?key=JMHz65uMHMZ3WCpl4jQ1U1blRr&qq=","liang":0},
{"name":"耍帅","url":"http://api.caonm.net/api/zhua/h?key=JMHz65uMHMZ3WCpl4jQ1U1blRr&qq=","liang":0},
{"name":"黑化","url":"http://api.caonm.net/api/whh/h?key=JMHz65uMHMZ3WCpl4jQ1U1blRr&qq=","liang":0},
{"name":"脆弱","url":"http://api.caonm.net/api/cuir/c?key=JMHz65uMHMZ3WCpl4jQ1U1blRr&qq=","liang":0},
{"name":"精神","url":"http://xiaobapi.top/api/xb/api/bqb_12?key=JMHz65uMHMZ3WCpl4jQ1U1blRr&qq=","liang":0},
{"name":"寄","url":"http://api.caonm.net/api/jim/j?key=JMHz65uMHMZ3WCpl4jQ1U1blRr&qq=","liang":0},
{"name":"坤投篮","url":"http://api.caonm.net/api/kunk/k?key=JMHz65uMHMZ3WCpl4jQ1U1blRr&qq=","liang":0},
{"name":"安妮亚","url":"http://api.caonm.net/api/any/any?key=JMHz65uMHMZ3WCpl4jQ1U1blRr&qq=","liang":0},
{"name":"估价","url":"http://api.caonm.net/api/qgj/index?key=JMHz65uMHMZ3WCpl4jQ1U1blRr&qq=","liang":0},
{"name":"洗衣机","url":"http://xiaobapi.top/api/xb/api/xiyiji?key=JMHz65uMHMZ3WCpl4jQ1U1blRr&qq=","liang":0},
{"name":"单身狗","url":"http://xiaobapi.top/api/xb/api/single_idcard?key=JMHz65uMHMZ3WCpl4jQ1U1blRr&qq=","liang":0},
{"name":"心碎","url":"http://api.caonm.net/api/xins/x?key=JMHz65uMHMZ3WCpl4jQ1U1blRr&qq=","liang":0},
{"name":"最帅","url":"http://api.caonm.net/api/zuis/z?key=JMHz65uMHMZ3WCpl4jQ1U1blRr&qq=","liang":0},
{"name":"嫁我","url":"http://api.caonm.net/api/qiuh/q?key=JMHz65uMHMZ3WCpl4jQ1U1blRr&qq=","liang":0},
{"name":"okk","url":"http://api.caonm.net/api/okk/k?key=JMHz65uMHMZ3WCpl4jQ1U1blRr&qq=","liang":0},
{"name":"勾引","url":"http://api.caonm.net/api/gouy/g?key=JMHz65uMHMZ3WCpl4jQ1U1blRr&qq=","liang":0},
{"name":"jojo","url":"http://xiaobapi.top/api/xb/api/jojo?key=JMHz65uMHMZ3WCpl4jQ1U1blRr&qq=","liang":2},
{"name":"比心","url":"http://api.caonm.net/api/bix/b?key=JMHz65uMHMZ3WCpl4jQ1U1blRr&qq=","liang":0},
{"name":"跟我处对象","url":"http://api.caonm.net/api/xie/x?key=JMHz65uMHMZ3WCpl4jQ1U1blRr&qq=","liang":0},
{"name":"圈钱跑路","url":"http://api.caonm.net/api/pao/p?key=JMHz65uMHMZ3WCpl4jQ1U1blRr&qq=","liang":0},
{"name":"膜拜","url":"http://ovooa.caonm.net/API/face_worship/?key=JMHz65uMHMZ3WCpl4jQ1U1blRr&qq=","liang":0},
{"name":"摸","url":"http://ovooa.caonm.net/API/face_petpet/?key=JMHz65uMHMZ3WCpl4jQ1U1blRr&qq=","liang":0},
{"name":"幻想","url":"http://api.caonm.net/api/x_3/x?key=JMHz65uMHMZ3WCpl4jQ1U1blRr&qq=","liang":0},
{"name":"吃掉","url":"http://ovooa.caonm.net/API/face_bite/?key=JMHz65uMHMZ3WCpl4jQ1U1blRr&qq=","liang":0},
{"name":"什么东西","url":"http://api.caonm.net/api/peng/p?key=JMHz65uMHMZ3WCpl4jQ1U1blRr&qq=","liang":0},
{"name":"2吃","url":"http://api.caonm.net/api/bgz/g?key=JMHz65uMHMZ3WCpl4jQ1U1blRr&qq=","liang":0},
{"name":"咀嚼","url":"http://api.caonm.net/api/chi/e?key=JMHz65uMHMZ3WCpl4jQ1U1blRr&qq=","liang":0},
{"name":"来一下","url":"http://api.caonm.net/api/pdl/c?key=JMHz65uMHMZ3WCpl4jQ1U1blRr&qq=","liang":0},
{"name":"看完干活","url":"http://xiaobapi.top/api/xb/api/back_to_work?key=JMHz65uMHMZ3WCpl4jQ1U1blRr&qq=","liang":0},
{"name":"有害垃圾","url":"http://xiaobapi.top/api/xb/api/youhailaji?key=JMHz65uMHMZ3WCpl4jQ1U1blRr&qq=","liang":0},
{"name":"平板","url":"http://api.caonm.net/api/wyx/p2?key=JMHz65uMHMZ3WCpl4jQ1U1blRr&qq=","liang":0},
{"name":"玩游戏","url":"http://api.caonm.net/api/wyx/p?key=JMHz65uMHMZ3WCpl4jQ1U1blRr&qq=","liang":0},
{"name":"拿着","url":"http://api.caonm.net/api/kan/kan_3?key=JMHz65uMHMZ3WCpl4jQ1U1blRr&qq=","liang":0},
{"name":"2举","url":"http://api.caonm.net/api/kan/kan_4?key=JMHz65uMHMZ3WCpl4jQ1U1blRr&qq=","liang":0},
{"name":"3举","url":"http://api.caonm.net/api/kan/kan_5?key=JMHz65uMHMZ3WCpl4jQ1U1blRr&qq=","liang":0},
{"name":"叽","url":"http://api.caonm.net/api/kan/kan_6?key=JMHz65uMHMZ3WCpl4jQ1U1blRr&qq=","liang":0},
{"name":"道歉","url":"http://api.caonm.net/api/kan/kan_8?key=JMHz65uMHMZ3WCpl4jQ1U1blRr&qq=","liang":0},
{"name":"手机","url":"http://api.caonm.net/api/kan/kan_9?key=JMHz65uMHMZ3WCpl4jQ1U1blRr&qq=","liang":0},
{"name":"4举","url":"http://api.caonm.net/api/kan/kan_11?key=JMHz65uMHMZ3WCpl4jQ1U1blRr&qq=","liang":0},
{"name":"拿牌","url":"http://api.caonm.net/api/kan/kan?key=JMHz65uMHMZ3WCpl4jQ1U1blRr&qq=","liang":0},
{"name":"举","url":"http://xiaobapi.top/api/xb/api/ju?key=JMHz65uMHMZ3WCpl4jQ1U1blRr&qq=","liang":0},
{"name":"听音乐","url":"http://xiaobapi.top/api/xb/api/listen_music?key=JMHz65uMHMZ3WCpl4jQ1U1blRr&qq=","liang":0},
{"name":"警察","url":"http://api.caonm.net/api/jcz2/p?key=JMHz65uMHMZ3WCpl4jQ1U1blRr&qq=","liang":0},
{"name":"警官","url":"http://api.caonm.net/api/jcz/index?key=JMHz65uMHMZ3WCpl4jQ1U1blRr&qq=","liang":0},
{"name":"嘴","url":"http://api.caonm.net/api/jiujiu/jiujiu?key=JMHz65uMHMZ3WCpl4jQ1U1blRr&qq=","liang":0},
{"name":"舔","url":"http://api.caonm.net/api/tn/t?key=JMHz65uMHMZ3WCpl4jQ1U1blRr&qq=","liang":0},
{"name":"遮脸","url":"http://api.caonm.net/api/huanl/h?key=JMHz65uMHMZ3WCpl4jQ1U1blRr&qq=","liang":0},
{"name":"疑问","url":"http://api.caonm.net/api/mb/wh?key=JMHz65uMHMZ3WCpl4jQ1U1blRr&qq=","liang":0},
{"name":"上电视","url":"http://api.caonm.net/api/kds/k?key=JMHz65uMHMZ3WCpl4jQ1U1blRr&qq=","liang":0},
{"name":"这像画吗","url":"http://api.caonm.net/api/hua/h?key=JMHz65uMHMZ3WCpl4jQ1U1blRr&qq=","liang":0},
{"name":"垃圾","url":"http://api.caonm.net/api/ljt/l?key=JMHz65uMHMZ3WCpl4jQ1U1blRr&qq=","liang":0},
{"name":"为什么艾特我","url":"http://api.caonm.net/api/why/at?key=JMHz65uMHMZ3WCpl4jQ1U1blRr&qq=","liang":0},
{"name":"墙纸","url":"http://api.caonm.net/api/bz/w?key=JMHz65uMHMZ3WCpl4jQ1U1blRr&qq=","liang":0},
{"name":"求婚","url":"http://ovooa.caonm.net/API/face_propose/?key=JMHz65uMHMZ3WCpl4jQ1U1blRr&qq=","liang":0},
{"name":"感动哭了","url":"http://ovooa.caonm.net/API/face_touch/?key=JMHz65uMHMZ3WCpl4jQ1U1blRr&qq=","liang":0},
{"name":"高质量","url":"http://ovooa.caonm.net/API/face_gao/?key=JMHz65uMHMZ3WCpl4jQ1U1blRr&qq=","liang":0},
{"name":"咸鱼","url":"http://ovooa.caonm.net/API/face_yu/?key=JMHz65uMHMZ3WCpl4jQ1U1blRr&qq=","liang":0},
{"name":"快逃","url":"http://xiaobai.klizi.cn/API/gif/escape?key=JMHz65uMHMZ3WCpl4jQ1U1blRr&qq=","liang":0},
{"name":"要钱钱","url":"http://api.caonm.net/api/wyqq/q?key=JMHz65uMHMZ3WCpl4jQ1U1blRr&qq=","liang":0},
{"name":"瑟瑟","url":"https://xiaobai.klizi.cn/API/gif/erotic?key=JMHz65uMHMZ3WCpl4jQ1U1blRr&qq=","liang":0},
{"name":"随机证书","url":"https://xiaobai.klizi.cn/API/ce/zs?key=JMHz65uMHMZ3WCpl4jQ1U1blRr&qq=","liang":0},
{"name":"滚出","url":"http://api.caonm.net/api/gun/index?key=JMHz65uMHMZ3WCpl4jQ1U1blRr&qq=","liang":0},
{"name":"羡慕","url":"https://api.andeer.top/API/xianmu?key=JMHz65uMHMZ3WCpl4jQ1U1blRr&qq=","liang":0},
{"name":"摸狗狗","url":"http://api.caonm.net/api/wus/w?key=JMHz65uMHMZ3WCpl4jQ1U1blRr&qq=","liang":0},
{"name":"网络公主","url":"http://api.caonm.net/api/yyy/y?key=JMHz65uMHMZ3WCpl4jQ1U1blRr&qq=","liang":0},
{"name":"删库","url":"http://h.xiaocha.fun/api/pao?key=JMHz65uMHMZ3WCpl4jQ1U1blRr&qq=","liang":0},
{"name":"看电视","url":"http://h.xiaocha.fun/api/kan?key=JMHz65uMHMZ3WCpl4jQ1U1blRr&qq=","liang":0},
{"name":"美女抬","url":"http://h.xiaocha.fun/api/tai?key=JMHz65uMHMZ3WCpl4jQ1U1blRr&qq=","liang":0},
{"name":"难办","url":"http://h.xiaocha.fun/api/ban?key=JMHz65uMHMZ3WCpl4jQ1U1blRr&qq=","liang":0},
{"name":"女拿","url":"http://h.xiaocha.fun/api/na?key=JMHz65uMHMZ3WCpl4jQ1U1blRr&qq=","liang":0},
{"name":"拍死你","url":"http://h.xiaocha.fun/api/pai?key=JMHz65uMHMZ3WCpl4jQ1U1blRr&qq=","liang":0},
{"name":"4举","url":"http://h.xiaocha.fun/api/ju?key=JMHz65uMHMZ3WCpl4jQ1U1blRr&qq=","liang":0},
{"name":"快溜","url":"http://h.xiaocha.fun/api/liu/liu?key=JMHz65uMHMZ3WCpl4jQ1U1blRr&qq=","liang":0},
{"name":"怒","url":"http://h.xiaocha.fun/api/nu/nu?key=JMHz65uMHMZ3WCpl4jQ1U1blRr&qq=","liang":0},
{"name":"不想上学","url":"http://h.xiaocha.fun/api/xue/xue?key=JMHz65uMHMZ3WCpl4jQ1U1blRr&qq=","liang":0},
{"name":"露脸","url":"http://h.xiaocha.fun/api/lou/lou?key=JMHz65uMHMZ3WCpl4jQ1U1blRr&qq=","liang":0},
{"name":"滑稽捶","url":"http://h.xiaocha.fun/api/chui/chui?key=JMHz65uMHMZ3WCpl4jQ1U1blRr&qq=","liang":0},
{"name":"咬2","url":"http://h.xiaocha.fun/api/yao/yao?key=JMHz65uMHMZ3WCpl4jQ1U1blRr&qq=","liang":0},
{"name":"心碎2","url":"http://h.xiaocha.fun/api/sui/sui?key=JMHz65uMHMZ3WCpl4jQ1U1blRr&qq=","liang":0},
{"name":"乡下人","url":"http://api.caonm.net/api/txmb/6?key=JMHz65uMHMZ3WCpl4jQ1U1blRr&qq=","liang":0},
{"name":"看这个","url":"http://api.caonm.net/api/txmb/5?key=JMHz65uMHMZ3WCpl4jQ1U1blRr&qq=","liang":0},
{"name":"灵动岛","url":"http://api.caonm.net/api/txmb/3?key=JMHz65uMHMZ3WCpl4jQ1U1blRr&qq=","liang":0},
{"name":"流汗","url":"http://api.caonm.net/api/txmb/1?key=JMHz65uMHMZ3WCpl4jQ1U1blRr&qq=","liang":0},
{"name":"纱雾举牌","url":"http://api.caonm.net/api/wus/w?key=JMHz65uMHMZ3WCpl4jQ1U1blRr&qq=","liang":0},
{"name":"整一个","url":"http://apicaonm.net/api/zyg/gei?key=JMHz65uMHMZ3WCpl4jQ1U1blRr&qq=","liang":0},
{"name":"老干妈","url":"http://api.caonm.net/api/lgm/index?key=JMHz65uMHMZ3WCpl4jQ1U1blRr&qq=","liang":0},
{"name":"拿手机","url":"http://h.xiaocha.fun/api/sj?key=JMHz65uMHMZ3WCpl4jQ1U1blRr&qq=","liang":0},
{"name":"我的人","url":"http://h.xiaocha.fun/api/wode?key=JMHz65uMHMZ3WCpl4jQ1U1blRr&qq=","liang":0},
{"name":"喝饮料","url":"http://h.xiaocha.fun/api/xi?key=JMHz65uMHMZ3WCpl4jQ1U1blRr&qq=","liang":0},
{"name":"看淡了","url":"http://h.xiaocha.fun/api/dan?key=JMHz65uMHMZ3WCpl4jQ1U1blRr&qq=","liang":0},
{"name":"坤证","url":"http://api.caonm.net/api/txmb/7?key=JMHz65uMHMZ3WCpl4jQ1U1blRr&qq=","liang":0},
{"name":"懒羊羊","url":"http://api.caonm.net/api/lyy/l?key=JMHz65uMHMZ3WCpl4jQ1U1blRr&qq=","liang":0},
{"name":"摇摆","url":"http://api.caonm.net/api/ajl/y?key=JMHz65uMHMZ3WCpl4jQ1U1blRr&qq=","liang":0},
{"name":"颜色","url":"http://api.caonm.net/api/sjbc/y?key=JMHz65uMHMZ3WCpl4jQ1U1blRr&qq=","liang":0},
{"name":"走路","url":"http://api.caonm.net/api/zoul/y?key=JMHz65uMHMZ3WCpl4jQ1U1blRr&qq=","liang":0},
{"name":"女装协议","url":"http://api.caonm.net/api/jqxy/n?key=JMHz65uMHMZ3WCpl4jQ1U1blRr&qq=","liang":0},
{"name":"进群协议","url":"http://api.caonm.net/api/jqxy/j?key=JMHz65uMHMZ3WCpl4jQ1U1blRr&qq=","liang":0},
{"name":"拿来吧你","url":"http://xiaobapi.top/api/xb/api/give_me_that?key=JMHz65uMHMZ3WCpl4jQ1U1blRr&qq=","liang":0},
{"name":"颜值高","url":"http://xiaobapi.top/api/xb/api/error?key=JMHz65uMHMZ3WCpl4jQ1U1blRr&qq=","liang":0},
{"name":"亲亲","url":"http://api.caonm.net/api/ddqq/y?key=JMHz65uMHMZ3WCpl4jQ1U1blRr&qq=","liang":0},
{"name":"按下","url":"http://api.caonm.net/api/anniu/a?key=JMHz65uMHMZ3WCpl4jQ1U1blRr&qq=","liang":0},
{"name":"50","url":"http://api.caonm.net/api/v50/b?key=JMHz65uMHMZ3WCpl4jQ1U1blRr&qq=","liang":0},
{"name":"涩图","url":"http://api.caonm.net/api/mstl/s?key=JMHz65uMHMZ3WCpl4jQ1U1blRr&qq=","liang":0},
{"name":"杜蕾斯","url":"http://api.caonm.net/api/byt/b?key=JMHz65uMHMZ3WCpl4jQ1U1blRr&qq=","liang":0},
{"name":"打篮球","url":"http://api.caonm.net/api/txmb/3?key=JMHz65uMHMZ3WCpl4jQ1U1blRr&qq=","liang":0},
{"name":"挥拳","url":"http://api.caonm.net/api/hq/chui?key=JMHz65uMHMZ3WCpl4jQ1U1blRr&qq=","liang":0},
{"name":"写代码","url":"http://api.wqwlkj.cn/wqwlapi/jwxdm?key=JMHz65uMHMZ3WCpl4jQ1U1blRr&qq=","liang":0},
{"name":"安排","url":"http://api.wqwlkj.cn/wqwlapi/anpai?key=JMHz65uMHMZ3WCpl4jQ1U1blRr&qq=","liang":0},
{"name":"萌新一个","url":"http://api.wqwlkj.cn/wqwlapi/wsmx?key=JMHz65uMHMZ3WCpl4jQ1U1blRr&qq=","liang":0},
{"name":"差评","url":"http://api.wqwlkj.cn/wqwlapi/cp?key=JMHz65uMHMZ3WCpl4jQ1U1blRr&qq=","liang":0},
{"name":"好评","url":"http://api.wqwlkj.cn/wqwlapi/hp?key=JMHz65uMHMZ3WCpl4jQ1U1blRr&qq=","liang":0},
{"name":"羡慕","url":"http://api.wqwlkj.cn/wqwlapi/xianmu?key=JMHz65uMHMZ3WCpl4jQ1U1blRr&qq=","liang":0},
{"name":"坤举旗","url":"http://api.wqwlkj.cn/wqwlapi/kunjuqi?key=JMHz65uMHMZ3WCpl4jQ1U1blRr&qq=","liang":0},
{"name":"开始摆烂","url":"http://api.luanmo.top/API/tu_bailan?key=JMHz65uMHMZ3WCpl4jQ1U1blRr&qq=","liang":0},
{"name":"保护","url":"http://api.luanmo.top/API/tu_dog2?key=JMHz65uMHMZ3WCpl4jQ1U1blRr&qq=","liang":0},
{"name":"地图头像","url":"http://api.wqwlkj.cn/wqwlapi/zgdt?key=JMHz65uMHMZ3WCpl4jQ1U1blRr&qq=","liang":0},
{"name":"小c酱","url":"http://api.caonm.net/api/xc/index?","liang":0},
{"name":"mc酱","url":"http://api.caonm.net/api/mc/index?","liang":0},
{"name":"兽猫酱","url":"http://api.caonm.net/api/smj/index?","liang":0},
{"name":"柴郡","url":"http://api.caonm.net/api/chai/c?","liang":0},
{"name":"ikun","url":"http://api.caonm.net/api/kun/k?","liang":0},
{"name":"龙图","url":"http://api.caonm.net/api/long/l?","liang":0},
{"name":"变魔术","url":"http://api.caonm.net/api/tax/y?key=JMHz65uMHMZ3WCpl4jQ1U1blRr&qq=","liang":0},
{"name":"结婚","url":"https://api.caonm.net/api/jhzz/j?key=JMHz65uMHMZ3WCpl4jQ1U1blRr&qq=","liang":2},
{"name":"两只猫","url":"https://api.caonm.net/api/xmmz/y?key=JMHz65uMHMZ3WCpl4jQ1U1blRr&qq=","liang":0},
{"name":"煮","url":"https://api.caonm.net/api/huos/y?key=JMHz65uMHMZ3WCpl4jQ1U1blRr&qq=","liang":0},
{"name":"画画","url":"https://api.caonm.net/api/huaa/h?key=JMHz65uMHMZ3WCpl4jQ1U1blRr&qq=","liang":0},
{"name":"打鸡蛋","url":"https://api.caonm.net/api/chaof/y?key=JMHz65uMHMZ3WCpl4jQ1U1blRr&qq=","liang":0},
{"name":"2舔","url":"https://api.caonm.net/api/chixg/y?key=JMHz65uMHMZ3WCpl4jQ1U1blRr&qq=","liang":0},
{"name":"枕头","url":"https://api.caonm.net/api/zhent/y?key=JMHz65uMHMZ3WCpl4jQ1U1blRr&qq=","liang":0},
{"name":"IKUN","url":"http://api.caonm.net/api/ikz/i?key=JMHz65uMHMZ3WCpl4jQ1U1blRr&qq=","liang":0},
{"name":"滚","url":"http://api.caonm.net/api/gund/g?key=JMHz65uMHMZ3WCpl4jQ1U1blRr&qq=","liang":0},
{"name":"注意身份","url":"http://api.caonm.net/api/zynsf/z?key=JMHz65uMHMZ3WCpl4jQ1U1blRr&qq=","liang":0},
{"name":"翻画板","url":"http://api.caonm.net/api/dakai/a?key=JMHz65uMHMZ3WCpl4jQ1U1blRr&qq=","liang":0},
{"name":"街舞","url":"https://api.caonm.net/api/tmcw/y?key=JMHz65uMHMZ3WCpl4jQ1U1blRr&qq=","liang":0},
{"name":"蹭","url":"https://api.caonm.net/api/cence/y?key=JMHz65uMHMZ3WCpl4jQ1U1blRr&qq=","liang":0},
{"name":"2拍","url":"https://api.caonm.net/api/paid/y?key=JMHz65uMHMZ3WCpl4jQ1U1blRr&qq=","liang":0},
{"name":"装高手","url":"http://www.xiaoqiandtianyi.tk/api/z?key=JMHz65uMHMZ3WCpl4jQ1U1blRr&qq=","liang":0},
{"name":"打篮球","url":"http://www.xiaoqiandtianyi.tk/api/cxk?key=JMHz65uMHMZ3WCpl4jQ1U1blRr&qq=","liang":0},
{"name":"追","url":"https://api.caonm.net/api/zhuid/y?key=JMHz65uMHMZ3WCpl4jQ1U1blRr&qq=","liang":0},
{"name":"2敲","url":"https://api.caonm.net/api/qiaod/y?key=JMHz65uMHMZ3WCpl4jQ1U1blRr&qq=","liang":0},
{"name":"上吊","url":"https://api.caonm.net/api/shangd/y?key=JMHz65uMHMZ3WCpl4jQ1U1blRr&qq=","liang":0},
{"name":"跳舞","url":"http://api.caonm.net/api/tiaow/y?key=JMHz65uMHMZ3WCpl4jQ1U1blRr&qq=","liang":0},
{"name":"诈尸","url":"http://api.caonm.net/api/zhas/y?key=JMHz65uMHMZ3WCpl4jQ1U1blRr&qq=","liang":0},
{"name":"踢球","url":"https://api.caonm.net/api/tiqiu/y?key=JMHz65uMHMZ3WCpl4jQ1U1blRr&qq=","liang":0},
{"name":"骗子","url":"https://api.caonm.net/api/pianzi/c?key=JMHz65uMHMZ3WCpl4jQ1U1blRr&qq=","liang":0},
{"name":"导管","url":"https://api.caonm.net/api/daoguan/c?key=JMHz65uMHMZ3WCpl4jQ1U1blRr&qq=","liang":0},
{"name":"强行瑟瑟","url":"https://api.caonm.net/api/kapian/c?key=JMHz65uMHMZ3WCpl4jQ1U1blRr&qq=","liang":0},
{"name":"我牛子呢","url":"https://api.caonm.net/api/kapian/c2?key=JMHz65uMHMZ3WCpl4jQ1U1blRr&qq=","liang":0},
{"name":"恶魔","url":"https://api.caonm.net/api/kapian/c3?key=JMHz65uMHMZ3WCpl4jQ1U1blRr&qq=","liang":0},
{"name":"演员","url":"https://api.caonm.net/api/madou/c2?key=JMHz65uMHMZ3WCpl4jQ1U1blRr&qq=","liang":0},
{"name":"狗呢","url":"https://api.caonm.net/api/asc/c?key=JMHz65uMHMZ3WCpl4jQ1U1blRr&qq=","liang":0},
{"name":"不幸","url":"https://api.caonm.net/api/asc/c2?key=JMHz65uMHMZ3WCpl4jQ1U1blRr&qq=","liang":0},
{"name":"老实点","url":"https://api.caonm.net/api/asc/c3?key=JMHz65uMHMZ3WCpl4jQ1U1blRr&qq=","liang":0},
{"name":"动漫画画","url":"https://api.caonm.net/api/asc/c4?key=JMHz65uMHMZ3WCpl4jQ1U1blRr&qq=","liang":0},
{"name":"木鱼","url":"https://api.caonm.net/api/muyu/y?key=JMHz65uMHMZ3WCpl4jQ1U1blRr&qq=","liang":0},
{"name":"金钱攻击","url":"https://api.caonm.net/api/jingq/y?key=JMHz65uMHMZ3WCpl4jQ1U1blRr&qq=","liang":0},
{"name":"安全感","url":"http://api.caonm.net/api/anqg/c?key=JMHz65uMHMZ3WCpl4jQ1U1blRr&qq=","liang":0},
{"name":"陪睡券","url":"https://api.caonm.net/api/asc/c5?key=JMHz65uMHMZ3WCpl4jQ1U1blRr&qq=","liang":0},
{"name":"男同","url":"https://api.caonm.net/api/asc/c6?key=JMHz65uMHMZ3WCpl4jQ1U1blRr&qq=","liang":0},
{"name":"掀墙纸","url":"https://api.andeer.top/API/gif_wallpaper?key=JMHz65uMHMZ3WCpl4jQ1U1blRr&qq=","liang":0},
{"name":"胡桃咬","url":"https://api.andeer.top/API/gif_hutao_bite?key=JMHz65uMHMZ3WCpl4jQ1U1blRr&qq=","liang":0},
{"name":"可莉吃","url":"https://api.andeer.top/API/gif_klee_eat?key=JMHz65uMHMZ3WCpl4jQ1U1blRr&qq=","liang":0},
{"name":"崇拜","url":"https://api.andeer.top/API/gif_worship?key=JMHz65uMHMZ3WCpl4jQ1U1blRr&qq=","liang":0},
{"name":"嘎达","url":"https://api.andeer.top/API/img_tr?key=JMHz65uMHMZ3WCpl4jQ1U1blRr&qq=","liang":0},
{"name":"要亲亲","url":"https://api.andeer.top/API/img_kiss_1?key=JMHz65uMHMZ3WCpl4jQ1U1blRr&qq=","liang":0},
{"name":"宝可梦","url":"https://api.andeer.top/API/img_pokemon?key=JMHz65uMHMZ3WCpl4jQ1U1blRr&qq=","liang":0},
{"name":"可爱","url":"https://api.andeer.top/API/img_cute?key=JMHz65uMHMZ3WCpl4jQ1U1blRr&qq=","liang":0},
{"name":"蒙娜丽莎","url":"https://api.andeer.top/API/img_mnls?key=JMHz65uMHMZ3WCpl4jQ1U1blRr&qq=","liang":0},
{"name":"精神涣散","url":"https://api.andeer.top/API/no_attention?key=JMHz65uMHMZ3WCpl4jQ1U1blRr&qq=","liang":0},
{"name":"贴贴","url":"https://api.andeer.top/API/img_kiss1?bqq=","liang":3},//cqq
{"name":"击剑","url":"https://api.andeer.top/API/gif_beat_j?bqq=","liang":3},
{"name":"过来洗头","url":"https://api.andeer.top/API/moca?bqq=","liang":3},
{"name":"正在加载","url":"https://api.andeer.top/API/img_loading?key=JMHz65uMHMZ3WCpl4jQ1U1blRr&qq=","liang":0},
{"name":"体操服","url":"http://api.caonm.net/api/jupai/m?key=JMHz65uMHMZ3WCpl4jQ1U1blRr&qq=","liang":0},
{"name":"技能","url":"http://api.caonm.net/api/jineng/y?key=JMHz65uMHMZ3WCpl4jQ1U1blRr&qq=","liang":0},
{"name":"GKD","url":"http://api.caonm.net/api/kapian/c5?key=JMHz65uMHMZ3WCpl4jQ1U1blRr&qq=","liang":0},
{"name":"无法瑟瑟","url":"http://api.caonm.net/api/kapian/c4?key=JMHz65uMHMZ3WCpl4jQ1U1blRr&qq=","liang":0},
{"name":"超市","url":"http://api.caonm.net/api/chaop/j?key=JMHz65uMHMZ3WCpl4jQ1U1blRr&qq=","liang":2},
{"name":"目录","url":"http://api.caonm.net/api/asc/c9?key=JMHz65uMHMZ3WCpl4jQ1U1blRr&qq=","liang":0},
{"name":"床上一躺","url":"http://api.caonm.net/api/asc/c8?key=JMHz65uMHMZ3WCpl4jQ1U1blRr&qq=","liang":0},
{"name":"啊！","url":"http://api.caonm.net/api/asc/c7?key=JMHz65uMHMZ3WCpl4jQ1U1blRr&qq=","liang":0},
{"name":"包夜","url":"http://api.caonm.net/api/guoy/g?key=JMHz65uMHMZ3WCpl4jQ1U1blRr&qq=","liang":0},
{"name":"报警了","url":"http://api.caonm.net/api/baon/1?key=JMHz65uMHMZ3WCpl4jQ1U1blRr&qq=","liang":0},
{"name":"星期四","url":"http://api.caonm.net/api/kfc/50?key=JMHz65uMHMZ3WCpl4jQ1U1blRr&qq=","liang":0},
{"name":"女同","url":"http://api.caonm.net/api/asc/c66?key=JMHz65uMHMZ3WCpl4jQ1U1blRr&qq=","liang":0},
{"name":"芙蓉王","url":"http://api.caonm.net/api/yan/y?key=JMHz65uMHMZ3WCpl4jQ1U1blRr&qq=","liang":0},
{"name":"望远镜","url":"https://api.caonm.net/api/wyj/w?key=JMHz65uMHMZ3WCpl4jQ1U1blRr&qq=","liang":0},
{"name":"完美","url":"http://api.caonm.net/api/meiyou/c?key=JMHz65uMHMZ3WCpl4jQ1U1blRr&qq=","liang":0},
{"name":"汤姆猫","url":"http://api.caonm.net/api/tmgx/y?key=JMHz65uMHMZ3WCpl4jQ1U1blRr&qq=","liang":0},
{"name":"一脚","url":"http://api.caonm.net/api/zjyj/y?qq1=","liang":2},
{"name":"大哭","url":"http://api.caonm.net/api/txmb/8?key=JMHz65uMHMZ3WCpl4jQ1U1blRr&qq=","liang":0},
{"name":"情侣","url":"http://api.caonm.net/api/mxbc/m?key=JMHz65uMHMZ3WCpl4jQ1U1blRr&qq=","liang":0},
{"name":"名片","url":"http://api.caonm.net/api/tp/m?key=JMHz65uMHMZ3WCpl4jQ1U1blRr&qq=","liang":0},
{"name":"美女抱","url":"http://api.caonm.net/api/jupai/d?key=JMHz65uMHMZ3WCpl4jQ1U1blRr&qq=","liang":0}]
let ml = process.cwd();
export class emoticon extends plugin {
    constructor() {
        super({
            /** 功能名称 */
            name: '土块表情包合成',
            /** 功能描述 */
            dsc: '土块表情包合成',
            /** https://oicqjs.github.io/oicq/#events */
            event: 'message',
            /** 优先级,数字越小等级越高 */
            priority: 145,
            rule: [{
                reg: '(.*?)',
                fnc: 'bqbhc',
				log: false
             
            }
            ]

        })
    }

	
    async bqbhc(e) {

	  

	    

        if(e.msg == '#表情包列表'){
            MyUin = e.user_id
            let bqname =[]
            for(let i=0;i<sj.length;i++){
                bqname.push(sj[i].name)

            }
            let data1 = {
                tplFile: './plugins/earth-k-plugin/resources/html/emoticon/ml.html',
                dz: ml,
                lb: bqname,
                qsid: 0

            }

            let img = await puppeteer.screenshot("123", {
                ...data1,
            });
            e.reply(img)
        }


        if(e.isGroup){


		
			



            let qq = e.at
      
            if(qq == undefined){
                return false
            }
    
            let n = sj.findIndex(item => item.name == e.msg) 
            if(n == -1){
                return false
            }
            
                let msg 
                let sjlx = sj[n].liang
                if(sjlx == 1){
                    msg = sj[n].url + e.user_id +'&qq='  + String(qq)
                }
                if(sjlx == 2){
                    msg = sj[n].url + e.user_id + '&qq2='  + String(qq)
                }
                if(sjlx == 3){
                    msg = sj[n].url + e.user_id + '&cqq='  + String(qq)
                }
                if(sjlx == 0){
                    msg = sj[n].url + String(qq)
                }
                console.log(msg)
                
                e.reply(segment.image(msg))
             
            

            
           
        }
        


        return false
    }
}
