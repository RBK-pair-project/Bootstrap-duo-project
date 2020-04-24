$('#submit').click(function(a){
			if($("#username").val()==="moez" && $("#password").val()==="moez" || $("#username").val()==="amine" && $("#password").val()==="amine"){
				$("#page1").css('display','none')
				$('#page2').css('display','block')
			}else{a.preventDefault() 
				$('.error1').css('display','block')
			}
		})
