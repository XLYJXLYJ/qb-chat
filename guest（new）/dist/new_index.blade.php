<!DOCTYPE html><html><head><meta charset=utf-8><meta name=viewport content="width=device-width,initial-scale=1,user-scalable=0"><title>{{$title or '智能风险官Aimi'}}</title><link href=/static/css/app.f4506bccdf73167953158ce25234ed68.css rel=stylesheet></head><body><div id=app-box></div><script type=text/javascript src=/static/js/manifest.cc61a698e67fbc03cbc2.js></script><script type=text/javascript src=/static/js/vendor.b296cf762bf6ed6bc6fe.js></script><script type=text/javascript src=/static/js/app.4877ff76cf3cbaecf9a5.js></script></body><script src=/static/js/RongIMLib.js></script><script src=/static/js/exif.js></script><script src=http://static.qibaozz.com/crypto/aes.js></script></html><script>//测试数据

		// var show_claims_consultation = '{{$show_claims_consultation}}'; //是否显示理赔咨询
		// var slogon = '智能保险机器人';
		// var avatar_big = "http://test.open.qb-tech.net/img/aimi-big.png";
		// var qas = ['m1','m2','m3','m4','m5','m6','m7','m8','m9','m10'];
    // var extendList = [{"personal_image":"https:\/\/i1.mifile.cn\/a1\/pms_1528719461.20891365!220x220.jpg","personal_name":"\u7ba1\u7406","personal_url":"https:\/\/www.hao123.com\/"},{"personal_image":"https:\/\/i1.mifile.cn\/a1\/pms_1528719461.20891365!220x220.jpg","personal_name":"\u5c0f\u7c73\u624b\u673a","personal_url":"https:\/\/www.mi.com\/"},{"personal_image":"https:\/\/i1.mifile.cn\/a1\/pms_1528719461.20891365!220x220.jpg","personal_name":"\u5c0f\u7c73\u624b\u673a","personal_url":"https:\/\/www.mi.com\/"},{"personal_image":"https:\/\/i1.mifile.cn\/a1\/pms_1528719461.20891365!220x220.jpg","personal_name":"\u5c0f\u7c73\u624b\u673a","personal_url":"https:\/\/www.mi.com\/"},{"personal_image":"https:\/\/i1.mifile.cn\/a1\/pms_1528719461.20891365!220x220.jpg","personal_name":"\u5c0f\u7c73\u624b\u673a","personal_url":"https:\/\/www.mi.com\/"}];
    // var key = "{{$key}}";
		// var skey = "{{$skey}}";
		// var aimi_name = "aimi";
		// var avatar_small = "http://test.open.qb-tech.net/img/aimi-big.png";
		// var wait_response = "让我思考一下哦";
		// var greet_msg = "你好，我是Aimi，我是您的全天候保险助手";
    
		// var timeout_msg = "请求超时,请重试";
		// var url = "{{ asset('/') }}";
		// var send_url = "{{ asset('/chat/send') }}";
		// var feedback_url = "{{ asset('/chat/feedback') }}";
		// var res_url = url;
		// var hostArr = document.domain.split('.');
		// var p2 = hostArr.pop();
		// var p1 = hostArr.pop();

    // var show_claims_consultation = '{{$show_claims_consultation}}'; //是否显示理赔咨询
		// var slogon = '{{$slogon}}';
		// var avatar_big = "{{$avatar_big or '/img/aimi-big.png'}}";
		// var qas = {!! $qas !!};
		// var key = "{{$key}}";

		// var show_claims_consultation = '{{$show_claims_consultation}}'; //是否显示理赔咨询
		// var slogon = '智能保险机器人';
		// var avatar_big = "http://test.open.qb-tech.net/img/aimi-big.png";
		// var qas = ['m1','m2','m3','m4','m5','m6','m7','m8','m9','m10'];
    // var extendList = [{"personal_image":"https:\/\/i1.mifile.cn\/a1\/pms_1528719461.20891365!220x220.jpg","personal_name":"\u7ba1\u7406","personal_url":"https:\/\/www.hao123.com\/"},{"personal_image":"https:\/\/i1.mifile.cn\/a1\/pms_1528719461.20891365!220x220.jpg","personal_name":"\u5c0f\u7c73\u624b\u673a","personal_url":"https:\/\/www.mi.com\/"},{"personal_image":"https:\/\/i1.mifile.cn\/a1\/pms_1528719461.20891365!220x220.jpg","personal_name":"\u5c0f\u7c73\u624b\u673a","personal_url":"https:\/\/www.mi.com\/"},{"personal_image":"https:\/\/i1.mifile.cn\/a1\/pms_1528719461.20891365!220x220.jpg","personal_name":"\u5c0f\u7c73\u624b\u673a","personal_url":"https:\/\/www.mi.com\/"},{"personal_image":"https:\/\/i1.mifile.cn\/a1\/pms_1528719461.20891365!220x220.jpg","personal_name":"\u5c0f\u7c73\u624b\u673a","personal_url":"https:\/\/www.mi.com\/"}];
    // var key = "{{$key}}";

		// var skey = "{{$skey}}";
		// var aimi_name = "aimi";
		// var avatar_small = "http://test.open.qb-tech.net/img/aimi-big.png";
		// var wait_response = "{!! $wait or '让我思考一下哦' !!}";
		// var greet_msg = "你好，我是Aimi，我是您的全天候保险助手";
		// var timeout_msg = "{!! $timeout or '请求超时,请重试' !!}";
		// var url = "{{ asset('/') }}";
		// var send_url = "{{ asset('/chat/send') }}";
		// var feedback_url = "{{ asset('/chat/feedback') }}";
		// var res_url = url;
		// var hostArr = document.domain.split('.');
		// var p2 = hostArr.pop();
		// var p1 = hostArr.pop();

    var show_claims_consultation = '{{$show_claims_consultation}}'; //是否显示理赔咨询
		var slogon = '{{$slogon}}';
		var avatar_big = "{{$avatar_big or '/img/aimi-big.png'}}";
		var qas = {!! $qas !!};
		var extendList = {!! $extends !!};
		var key = "{{$key}}";
		var skey = "{{$skey}}";
		var aimi_name = "{{$display_name or 'Aimi'}}";
		var avatar_small = "{{$avatar_small or '/img/aimi.png'}}";
		var wait_response = "{!! $wait or '让我思考一下哦' !!}";
		var greet_msg = "{!! $greet or '你好，我是Aimi，我是您的全天候保险助手。' !!}";
		var timeout_msg = "{!! $timeout or '请求超时,请重试' !!}";
		var url = "{{ asset('/') }}";
		var send_url = "{{ asset('/chat/send') }}";
		var feedback_url = "{{ asset('/chat/feedback') }}";
		var res_url = url;
		var hostArr = document.domain.split('.');
		var p2 = hostArr.pop();
		var p1 = hostArr.pop();
		document.domain = p1 + '.' + p2;</script>