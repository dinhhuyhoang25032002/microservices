import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { User, USER_MODEL } from 'src/schemas/users.schema';
import { Model } from 'mongoose';
import { google } from 'googleapis';
import * as nodemailer from 'nodemailer';
import { UserClass } from 'src/users/class/User.class';
@Injectable()
export class MailerService {
    constructor(
        @InjectModel(USER_MODEL)
        private readonly userModel: Model<User>
    ) { }

    async handleSendEmail(payload: { email: string }) {
        const { email } = payload
        const user = await this.userModel.findOne({ email: email })
        if (!user) {
            throw new HttpException(
                { message: 'Resource not found user', errorCode: 404 },
                HttpStatus.CONFLICT,
            )
        }
        const { fullname } = user as UserClass
        const oAuth2Client = new google.auth.OAuth2(
            {
                clientId: process.env.CLIENT_AUTH_GOOGLE_ID,
                clientSecret: process.env.CLIENT_AUTH_GOOGLE_SECRET,
                redirectUri: process.env.REDIRECT_URL,
            }
        );
        oAuth2Client.setCredentials({ refresh_token: process.env.REFRESH_TOKEN })

        try {
            const accessToken = await oAuth2Client.getAccessToken()
            console.log({
                accessToken: accessToken.token,
            });
            const transporter = nodemailer.createTransport({
                service: "gmail",
                auth: {
                    type: 'OAuth2',
                    user: process.env.SENDER_EMAIL,
                    clientId: process.env.CLIENT_AUTH_GOOGLE_ID,
                    clientSecret: process.env.CLIENT_AUTH_GOOGLE_SECRET,
                    refreshToken: process.env.REFRESH_TOKEN,
                    accessToken: accessToken.token,
                },
            });

            const mailOptions = {
                from: process.env.SENDER_EMAIL,
                to: email,
                subject: 'Phản hồi từ OpenLAB',
                //text: `Chào ${fullname}! Cảm ơn bạn đã phản đóng góp ý kiến cho chúng tôi. OpenLAB đã tiếp nhận ý kiến của bạn và phản hồi sau 24h tới.`,
                html: ` <div
      style="
        font-family: Arial, sans-serif;
        font-size: 16px;
        line-height: 1.5;
        color: #333;
      "
    >
      <p>Xin chào <strong>${fullname}</strong>,</p>
      <p>
        Cảm ơn bạn đã đóng góp ý kiến cho OpenLAB. Chúng tôi đã tiếp nhận ý kiến
        của bạn và sẽ phản hồi trong vòng 24 giờ.
      </p>
      <p>
        Nếu bạn có thêm bất kỳ câu hỏi nào, vui lòng liên hệ qua email
        này. <strong style="color: #074069">openlab.user@gmail.com</strong>
      </p>
      <br />
      <p>Trân trọng,</p>
      <p><strong>Đội ngũ OpenLAB</strong></p>
      <hr />
      <footer style="font-size: 14px; color: #888">
        <p>Đây là email tự động, vui lòng không trả lời email này.</p>
      </footer>
    </div>`
            };
            const result = await transporter.sendMail(mailOptions);
            console.log({ message: 'Email sent successfully', result });
            return { message: 'Email sent successfully', result }

        } catch (error) {
            console.log(error);

        }
    }
}
