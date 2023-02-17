package org.example;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.MimeMessageHelper;
import org.springframework.stereotype.Component;

import javax.mail.MessagingException;
import javax.mail.internet.MimeMessage;

//import javax.mail.MessagingException;
//import javax.mail.internet.MimeMessage;


/**
 * @author pavan.solapure
 *
 */
@Component
public class EmailService {

	@Qualifier("gmail")
	@Autowired
	private JavaMailSender mailSender;


	public void encryptAndSend(Email eParams) throws Exception {
		
		MimeMessage message = mailSender.createMimeMessage();
		MimeMessageHelper helper = new MimeMessageHelper(message);
		helper.setTo(eParams.getTo().toArray(new String[eParams.getTo().size()]));
		helper.setReplyTo(eParams.getFrom());
		helper.setFrom(eParams.getFrom());
		helper.setSubject(eParams.getSubject() + "Encrypt and send");
		helper.setText(eParams.getMessage(), true);
		
		mailSender.send(message);
		
	}
	
	public void signAndSend(Email eParams) throws Exception {
		
		MimeMessage message = mailSender.createMimeMessage();
		MimeMessageHelper helper = new MimeMessageHelper(message);
		helper.setTo(eParams.getTo().toArray(new String[eParams.getTo().size()]));
		helper.setReplyTo(eParams.getFrom());
		helper.setFrom(eParams.getFrom());
		helper.setSubject(eParams.getSubject() + "Sign and send");
		helper.setText(eParams.getMessage(), true);
		
//		mailSender.send(MailEncryptionUtil.signMessage(message));
		mailSender.send(message);
		
	}
	
	public void send(Email eParams) {

		if (eParams.isHtml()) {
			try {
				sendHtmlMail(eParams);
			} catch (MessagingException e) {
				e.printStackTrace();
			}
		} else {
			sendPlainTextMail(eParams);
		}

	}

	private void sendHtmlMail(Email eParams) throws MessagingException, javax.mail.MessagingException {

		boolean isHtml = true;

		MimeMessage message = mailSender.createMimeMessage();
		MimeMessageHelper helper = new MimeMessageHelper(message);
		helper.setTo(eParams.getTo().toArray(new String[eParams.getTo().size()]));
		helper.setReplyTo(eParams.getFrom());
		helper.setFrom(eParams.getFrom());
		helper.setSubject(eParams.getSubject());
		helper.setText(eParams.getMessage(), isHtml);

		if (eParams.getCc().size() > 0) {
			helper.setCc(eParams.getCc().toArray(new String[eParams.getCc().size()]));
		}

		mailSender.send(message);
	}

	private void sendPlainTextMail(Email eParams) {

		SimpleMailMessage mailMessage = new SimpleMailMessage();

		eParams.getTo().toArray(new String[eParams.getTo().size()]);
		mailMessage.setTo(eParams.getTo().toArray(new String[eParams.getTo().size()]));
		mailMessage.setReplyTo(eParams.getFrom());
		mailMessage.setFrom(eParams.getFrom());
		mailMessage.setSubject(eParams.getSubject());
		mailMessage.setText(eParams.getMessage());

		if (eParams.getCc().size() > 0) {
			mailMessage.setCc(eParams.getCc().toArray(new String[eParams.getCc().size()]));
		}

		mailSender.send(mailMessage);

	}

}
