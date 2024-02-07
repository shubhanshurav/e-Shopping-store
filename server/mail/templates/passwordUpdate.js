exports.passwordUpdated = (email, name) => {
	return `<!DOCTYPE html>
    <html>
    
    <head>
        <meta charset="UTF-8">
        <title>Password Update Confirmation</title>
        <style>
            body {
                background-color: #ffffff;
                font-family: Arial, sans-serif;
                font-size: 16px;
                line-height: 1.4;
                color: #333333;
                margin: 0;
                padding: 0;
            }
    
    
            .container {
                max-width: 600px;
                margin: 0 auto;
                padding: 20px;
                text-align: center;
            }
    
            .logo {
                max-width: 200px;
                margin-bottom: 20px;
            }

            img{
				mix-blend-mode: color-burn;
				border-radius:50%;
			}
    
            .message {
                font-size: 18px;
                font-weight: bold;
                margin-bottom: 20px;
            }
    
            .body {
                font-size: 16px;
                margin-bottom: 20px;
            }
    
            .support {
                font-size: 14px;
                color: #999999;
                margin-top: 20px;
            }
    
            .highlight {
                font-weight: bold;
            }
        </style>
    
    </head>
    
    <body>
        <div class="container">
            <img class="logo" src="https://th.bing.com/th/id/R.290e18969c9591b792df806809055959?rik=d8X6ze5bb%2f41JQ&riu=http%3a%2f%2fwww.pngplay.com%2fwp-content%2fuploads%2f1%2fOnline-Shopping-Cart-PNG-Background-Image.png&ehk=3Ms0Lc%2bsQT5DE4mm15WawVTkUeVf2i%2fYKLWRwPE%2bXeQ%3d&risl=&pid=ImgRaw&r=0" width:50px height:50px alt="IET Logo">
            <div class="message">Password Update Confirmation</div>
            <div class="body">
                <p>Hey ${name},</p>
                <p>Your password has been successfully updated for the email <span class="highlight">${email}</span>.
                </p>
                <p>If you did not request this password change, please contact us immediately to secure your account.</p>
            </div>
            <div class="support">If you have any questions or need further assistance, please feel free to reach out to us
                at
                <a href="mailto:info@esho.com">info@eshop.com</a>. We are here to help!
            </div>
        </div>
    </body>
    
    </html>`;
};
