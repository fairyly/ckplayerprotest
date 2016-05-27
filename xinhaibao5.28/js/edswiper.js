$(function(){
	var $cw=document.documentElement.clientWidth;
	var $ch=document.documentElement.clientHeight;
	$(".start img").css("width",$cw);
	$(".start img").css("height",$ch);
	// $(".st333").click(function(){
	// 	$(".start").hide();
	// 	$(".first").show();

	// });
	console.log("屏幕宽高为："+screen.width+"*"+screen.height);
    $(".swiper-wrapper").find("div").eq(0).click(function(){
      console.log("第一个");
      console.log($(".title1 p").length);
     $("body").css("background","none")
      $(".more").hide();
      $(".swiper-container").hide();
      $(".edit1").show();
      console.log($(".edit1").css("width"));
      console.log($(".edit1").css("height"));
	       $("#upfile").change(function(){
				var objUrl = getObjectURL(this.files[0]) ;
	               var file = document.getElementById("upfile").files;
				    console.log(file);
				    console.log(file[0].size);
				    console.log(file[0].type);
				    console.log(file[0].name);
					console.log("objUrl = "+objUrl) ;
				if (objUrl) {
					$(".m1 img").attr("src", objUrl) ;
					// $(".indexone").hide();
					// $(".xianshi").show();
					// $(".up1").hide();
				}
			});
	       $("#upfile2").change(function(){
				var objUrl = getObjectURL(this.files[0]) ;
	               var file = document.getElementById("upfile2").files;
				    console.log(file);
				    console.log(file[0].size);
				    console.log(file[0].type);
				    console.log(file[0].name);
					console.log("objUrl = "+objUrl) ;
				if (objUrl) {
					$(".m2 img").attr("src", objUrl) ;
					// $(".indexone").hide();
					// $(".xianshi").show();
					// $(".up2").hide();
				}
			});
	        
	       //建立一个可存取到该file的url
			function getObjectURL(file) {
				var url = null ; 

				if (window.createObjectURL!=undefined) { // basic
					url = window.createObjectURL(file) ;
				} else if (window.URL!=undefined) { // mozilla(firefox)
					url = window.URL.createObjectURL(file) ;
				} else if (window.webkitURL!=undefined) { // webkit or chrome
					url = window.webkitURL.createObjectURL(file) ;
				}
				return url ;
			}
			$(".shengcheng").click(function(){
                
                $(".shengcheng").hide();
                // $(".edit1").show();
                $(".up1").hide();
                $(".up2").hide();
                $(".header").hide();
                $("body").css("background","none");
                html2canvas($("body"), {
                        allowTaint: true,
                        taintTest: false,
                        onrendered: function(canvas) {
          //               	var extra_canvas = document.createElement("canvas");
						    // extra_canvas.setAttribute('width',700);
						    // extra_canvas.setAttribute('height',713);

						    //获取屏幕像素比
						   // var ctx = canvas.getContext('2d');
         //                        var getPixelRatio = function(context) {
					    //             var backingStore = context.backingStorePixelRatio ||
					    //                 context.webkitBackingStorePixelRatio ||
					    //                 context.mozBackingStorePixelRatio ||
					    //                 context.msBackingStorePixelRatio ||
					    //                 context.oBackingStorePixelRatio ||
					    //                 context.backingStorePixelRatio || 1;
					    //             return (window.devicePixelRatio || 1) / backingStore;
					    //         };
					    //         var ratio = getPixelRatio(ctx);
					    //          console.log(ratio);

					    //          var iw=canvas.width*ratio;
					    //          var ih=canvas.height*ratio;
						   //  ctx.drawImage(canvas,0,0,iw, ih,0,0,iw,ih);
                            // canvas.id = "mycanvas";
                            //document.body.appendChild(canvas);
                            //生成base64图片数据
                            $(".header").show();
                            $(".baocun").show();
                            var dataUrl = canvas.toDataURL("image/jpeg");
                            $.ajax({  
	                            type : "POST",  
	                            url : '1.php',  
	                            data : {data:dataUrl},  
	                            timeout : 60000,  
	                            success : function(data){  
	                                // console.log(data);
	                                
	                                var src=data;
	                                // $('#myShowImage').attr('src', '${ctxStatic}/images/'+data+'.jpg'); //服务器上保存图片路径，data是返回的文件名。  
	                                $(".baocunimg img").attr("src",src) ;
	                            }  
	                        });  
                            // $(".baocunimg img").attr("src",dataUrl) ;
                            $(".edit1").hide();
                        }
                });
    		});
    		//生成第一个页面结束
    });
    //第一页结束
     $(".swiper-slide").eq(1).click(function(){
      console.log("第二个");
     
      $(".more").hide();
      $(".swiper-container").hide();
      $(".edit1").hide();
      $(".edit2").show();
      console.log($(".edit2").css("width"));
      console.log($(".edit2").css("height"));
     		 $("#upfile3").change(function(){
				var objUrl = getObjectURL(this.files[0]) ;
	               var file = document.getElementById("upfile3").files;
				    console.log(file);
				    console.log(file[0].size);
				    console.log(file[0].type);
				    console.log(file[0].name);
					console.log("objUrl = "+objUrl) ;
				if (objUrl) {
					$(".mm2 img").attr("src", objUrl) ;
					// $(".indexone").hide();
					// $(".xianshi").show();
					// $(".up3").hide();
				}
			});
     		 $("#upfile4").change(function(){
				var objUrl = getObjectURL(this.files[0]) ;
	               var file = document.getElementById("upfile4").files;
				    console.log(file);
				    console.log(file[0].size);
				    console.log(file[0].type);
				    console.log(file[0].name);
					console.log("objUrl = "+objUrl) ;
				if (objUrl) {
					$(".mm22 img").attr("src", objUrl) ;
					// $(".indexone").hide();
					// $(".xianshi").show();
					// $(".up4").hide();
				}
			});
     		 //建立一个可存取到该file的url
			function getObjectURL(file) {
				var url = null ; 

				if (window.createObjectURL!=undefined) { // basic
					url = window.createObjectURL(file) ;
				} else if (window.URL!=undefined) { // mozilla(firefox)
					url = window.URL.createObjectURL(file) ;
				} else if (window.webkitURL!=undefined) { // webkit or chrome
					url = window.webkitURL.createObjectURL(file) ;
				}
				return url ;
			}
			$(".shengcheng2").click(function(){
                
                $(".shengcheng2").hide();
                // $(".edit2").show();
                $(".up3").hide();
                $(".up4").hide();
                $(".header").hide();
                $("body").css("background","none");
                html2canvas($("body"), {
                        allowTaint: true,
                        taintTest: false,
                        onrendered: function(canvas) {
                            canvas.id = "mycanvas";
                            //document.body.appendChild(canvas);
                            //生成base64图片数据
                            $(".header").show();
                            $(".baocun").show();
                            var dataUrl = canvas.toDataURL("image/png");
                             $.ajax({  
	                            type : "POST",  
	                            url : '1.php',  
	                            data : {data:dataUrl},  
	                            // timeout : 60000,  
	                            success : function(data){  
	                                // console.log(data);
	                                // $('#myShowImage').attr('src', '${ctxStatic}/images/'+data+'.jpg'); //服务器上保存图片路径，data是返回的文件名。  
	                                $(".baocunimg img").attr("src",data) ;

	                            }  
	                        });  
                            // $(".baocunimg img").attr("src",dataUrl) ;
                            $(".edit2").hide();
                        }
                });

    		});
    		//生成第二个页面结束
    });
    //第二页结束
    $(".swiper-slide").eq(2).click(function(){
      console.log("第三个");
      $(".more").hide();
      $(".swiper-container").hide();
      $(".edit1").hide();
      $(".edit2").hide();
      $(".edit3").show();
      console.log($(".edit3").css("width"));
      console.log($(".edit3").css("height"));
     		 $("#upfile5").change(function(){
				var objUrl = getObjectURL(this.files[0]) ;
	               var file = document.getElementById("upfile5").files;
				    console.log(file);
				    console.log(file[0].size);
				    console.log(file[0].type);
				    console.log(file[0].name);
					console.log("objUrl = "+objUrl) ;
				if (objUrl) {
					$(".m3 img").attr("src", objUrl) ;
					// $(".indexone").hide();
					// $(".xianshi").show();
					// $(".up5").hide();
				}
			});
     		 $("#upfile6").change(function(){
				var objUrl = getObjectURL(this.files[0]) ;
	               var file = document.getElementById("upfile6").files;
				    console.log(file);
				    console.log(file[0].size);
				    console.log(file[0].type);
				    console.log(file[0].name);
					console.log("objUrl = "+objUrl) ;
				if (objUrl) {
					$(".con33 img").attr("src", objUrl) ;
					// $(".indexone").hide();
					// $(".xianshi").show();
					// $(".up6").hide();
				}
			});
     		 //建立一个可存取到该file的url
			function getObjectURL(file) {
				var url = null ; 

				if (window.createObjectURL!=undefined) { // basic
					url = window.createObjectURL(file) ;
				} else if (window.URL!=undefined) { // mozilla(firefox)
					url = window.URL.createObjectURL(file) ;
				} else if (window.webkitURL!=undefined) { // webkit or chrome
					url = window.webkitURL.createObjectURL(file) ;
				}
				return url ;
			}
			$(".shengcheng3").click(function(){
                
                $(".shengcheng3").hide();
                // $(".edit3").show();
                $(".up5").hide();
                $(".up6").hide();
                $(".header").hide();
                $("body").css("background","none");
                html2canvas($("body"), {
                        allowTaint: true,
                        taintTest: false,
                        onrendered: function(canvas) {
                            canvas.id = "mycanvas";
                            //document.body.appendChild(canvas);
                            //生成base64图片数据
                            $(".header").show();
                            $(".baocun").show();
                            var dataUrl = canvas.toDataURL("image/png");
                             $.ajax({  
	                            type : "POST",  
	                            url : '1.php',  
	                            data : {data:dataUrl},  
	                            // timeout : 60000,  
	                            success : function(data){  
	                                // console.log(data);
	                                // $('#myShowImage').attr('src', '${ctxStatic}/images/'+data+'.jpg'); //服务器上保存图片路径，data是返回的文件名。  
	                                $(".baocunimg img").attr("src",data) ;
	                            }  
	                        });  
                            // $(".baocunimg img").attr("src",dataUrl) ;
                            $(".edit3").hide();
                        }
                });
    		});
    		//生成第三个页面结束
    });
    //第三页结束
    $(".more").click(function(){
    	$(".more").hide();
        $(".swiper-container").hide();
        $(".editmore").show();
    });
    //模板页结束
    
    
});