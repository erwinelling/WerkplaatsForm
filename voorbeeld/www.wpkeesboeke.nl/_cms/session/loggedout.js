var user = {};

$(function ()
{
	var ctrlAltDown = false;

	$(document).keydown(function (evt) { ctrlAltDown = (evt.ctrlKey && evt.altKey); });
	$(document).keyup(function   (evt) { if (ctrlAltDown) { ctrlAltDown=false; logIn(); } });

	function logIn ()
	{
		if (!$('#cmsLoginForm').length)
		{
			$('body').append('\
				<div id="cmsLoginForm">\
					<form>\
						<h1>Inloggen</h1>\
						<label><span>Gebruikersnaam</span><input type="text" name="cmsUserName"></label>\
						<label><span>Wachtwoord</span><input type="password" name="cmsPassWord"></label>\
						<input type="submit" id="cmsLoginFormOK" value="OK">\
						<button id="cmsLoginFormCancel">Cancel</button>\
					</form>\
				</div>');
			
			$('#cmsLoginForm input').keydown(function (evt)
			{
				switch (evt.keyCode)
				{
					case 9:
						if (evt.target==$('#cmsLoginForm input')[1])
						{
							$('#cmsLoginForm input')[0].focus();
							evt.stopPropagation();
							evt.preventDefault();
						}
					break;
					case 13:
						doSubmitCMSLoginForm(evt);
					case 27:
						doCancelCMSLoginForm(evt);
					break;
				}
			});
			$('#cmsLoginFormOK').click(doSubmitCMSLoginForm);
			$('#cmsLoginFormCancel').click(doCancelCMSLoginForm);
		}
		else
		{
			$('#cmsLoginForm').removeClass('cmsHidden');
		}
		$('#cmsLoginForm input')[0].focus();
	}

	function doCancelCMSLoginForm (evt)
	{
		evt.preventDefault();
		$('#cmsLoginForm input')[0].value = '';
		$('#cmsLoginForm input')[1].value = '';
		$('#cmsLoginForm input')[0].blur();
		$('#cmsLoginForm').addClass('cmsHidden');
	}

	function doSubmitCMSLoginForm (evt)
	{
		evt.preventDefault();
		var userName = $('#cmsLoginForm input')[0].value;
		if (userName)
		{
			var passWord = $('#cmsLoginForm input')[1].value;
			if (passWord)
			{
				$.ajax({ method:"GET", url:'_cms/session/login.php', data:{ userName:userName, passWord:passWord }})
				.done(function (msg)
				{
					if (msg=="OK")
					{
						localStorage.setItem("cmsIsEditing", true);
						document.location.reload();
					}
					else
						alert("Dan niet.\n\n" + msg);
				});
			}
		}
	}
});