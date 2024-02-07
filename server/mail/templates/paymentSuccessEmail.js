exports.paymentSuccessEmail = (name, amount, orderId, paymentId) => {
  return `<!DOCTYPE html>
    <html>
    
    <head>
        <meta charset="UTF-8">
        <title>Payment Confirmation</title>
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
    
            .cta {
                display: inline-block;
                padding: 10px 20px;
                background-color: #FFD60A;
                color: #000000;
                text-decoration: none;
                border-radius: 5px;
                font-size: 16px;
                font-weight: bold;
                margin-top: 20px;
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
            <div class="message">Course Payment Confirmation</div>
            <div class="body">
                <p>Dear ${name},</p>
                <p>We have received a payment of <span class='highlight'>₹${amount}</span></p>.
                <p>Your Payment ID is <b>${paymentId}</b></p>
                <p>Your Order ID is <b>${orderId}</b></p>
            </div>
            <div class="support">If you have any questions or need assistance, please feel free to reach out to us at 
            <a href="mailto:info@eshop.com">info@eshop.com</a>. We are here to help!</div>
        </div>
    </body>
    
    </html>`
}
