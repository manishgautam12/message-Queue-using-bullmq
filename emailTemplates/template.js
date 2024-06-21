// HTML email templates       
export const emailTemplates = [
    {
        name: "Booking creation",
        subject: "Welcome to Our Community!",
        html: `
      <html lang="en">
      <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>Booking creation</title>
      </head>
      <body>
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
              <header style="background-color: #f0f0f0; padding: 20px;">
                  <h1>Booking creation success</h1>
              </header>
              <main style="padding: 20px;">
                  <p>Dear [Recipient Name],</p>
                  <p>We're excited to have you on board!</p>
                  <p>Here are some updates:</p>
                  <ul>
                      <li>Update 1</li>
                      <li>Update 2</li>
                      <li>Update 3</li>
                  </ul>
                  <p>Thank you for subscribing!</p>
              </main>
              <footer style="background-color: #f0f0f0; padding: 20px; text-align: center;">
                  <p>&copy; 2024 Your Company. All rights reserved.</p>
              </footer>
          </div>
      </body>
      </html>
      `
    },
    {
        name: "Booking cancellation",
        subject: "Exclusive Offer Inside!",
        html: `
      <html lang="en">
      <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title> Booking cancellation</title>
      </head>
      <body>
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
              <header style="background-color: #f0f0f0; padding: 20px;">
                  <h1>Booking cancellation success</h1>
              </header>
              <main style="padding: 20px;">
                  <p>Dear [Recipient Name],</p>
                  <p>We have a special offer just for you!</p>
                  <p>Here are the details:</p>
                  <ul>
                      <li>Offer 1</li>
                      <li>Offer 2</li>
                      <li>Offer 3</li>
                  </ul>
                  <p>Don't miss out on this opportunity!</p>
              </main>
              <footer style="background-color: #f0f0f0; padding: 20px; text-align: center;">
                  <p>&copy; 2024 Your Company. All rights reserved.</p>
              </footer>
          </div>
      </body>
      </html>
      `
    },
];