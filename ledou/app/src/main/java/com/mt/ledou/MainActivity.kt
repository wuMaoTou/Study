package com.mt.ledou

import android.os.Bundle
import android.support.v7.app.AppCompatActivity
import android.text.TextUtils
import com.mt.ledou.service.MapPushService
import com.mt.ledou.service.QualifyingService
import com.mt.ledou.service.TurntableService
import kotlinx.android.synthetic.main.activity_main.*
import org.jetbrains.anko.onUiThread
import org.jetbrains.anko.toast

class MainActivity : AppCompatActivity() {

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_main)
        start.setOnClickListener {
            if (getUserToken(edittext.text.toString())) {
//                async { MapPushService().init() }
                val t = Thread(Runnable {
                    kotlin.run {
                        MapPushService().init()
                        QualifyingService().init()
                        TurntableService().init()
                    }
                })
                t.start()
            }
        }
    }

    /**
     * 输入拦截请求的post数据
     */
    fun getUserToken(cookie: String): Boolean {

        if (TextUtils.isEmpty(cookie)) {
            onUiThread {
                toast("输入token信息")
            }
            return false;
        }

        val params = cookie.trim().split("&")

        for (param in params) {
            val split = param.split("=")
            Contacts.TOKEN_PARAMS.put(split[0], split[1])
        }

        if (TextUtils.isEmpty(Contacts.TOKEN_PARAMS.get("uid"))) {
            onUiThread {
                toast("获取用户uid失败")
            }
            return false;
        } else {
            Contacts.UID = Contacts.TOKEN_PARAMS.get("uid")!!
        }

        if (Contacts.TOKEN_PARAMS.get("pf") == "sq") {
            Contacts.BASE_URL = "https://zone1.ledou.qq.com/" + Contacts.DOMAIN
        } else if (Contacts.TOKEN_PARAMS.get("pf") == "wx2") {
            Contacts.BASE_URL = "https://zone4.ledou.qq.com/" + Contacts.DOMAIN
        } else if (Contacts.TOKEN_PARAMS.get("pf") == "wb") {
            Contacts.BASE_URL = "https://zone3.ledou.qq.com/" + Contacts.DOMAIN
        } else {
            onUiThread {
                toast("获取用户uid失败")
            }
            return false;
        }

        return true;
    }

//    fun zaofang() {
//        async {
//            val readText = URL("https://zone4.ledou.qq.com/fcgi-bin/petpk?" +
//                    "cmd=meridian&op=visit&id=${npcid}&uid=469304&uin=null&skey=null" +
//                    "&h5openid=oKIwA0Vr_K8bwu1tjNiLIgsg3m_A&h5token=370675a48b30dab6ef809e0ba94c9de8&pf=wx2")
//                    .readText()
//
//            val bean = Gson().fromJson(readText, zaofangbean::class.java)
//
//            Log.d("MainActivity", readText)
//
//            if (bean.result == 0) {
//                zaofang = (bean.result == 0);
//
//                npcid = bean.act_npc
//
//                list.add(readText)
//
////                uiThread { adapter.notifyDataSetChanged() }
//            }
//        }
//    }
//
//    fun init() {
//        async {
//            val readText = URL("https://zone4.ledou.qq.com/fcgi-bin/petpk?" +
//                    "cmd=meridian&op=visitpage&uid=469304&uin=null&skey=null" +
//                    "&h5openid=oKIwA0Vr_K8bwu1tjNiLIgsg3m_A&h5token=370675a48b30dab6ef809e0ba94c9de8&pf=wx2")
//                    .readText()
//
//            val bean = Gson().fromJson(readText, initbean::class.java)
//            Log.d("MainActivity", readText)
//            if (bean.result == 0) {
//                npcid = bean.act_npc
//            }
//
//        }
//    }
}