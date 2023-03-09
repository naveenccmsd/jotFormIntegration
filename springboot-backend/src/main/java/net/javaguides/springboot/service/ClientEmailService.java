package net.javaguides.springboot.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.MimeMessageHelper;
import org.springframework.stereotype.Component;
import freemarker.template.Configuration;

import javax.mail.MessagingException;
import javax.mail.internet.MimeMessage;

@Component
public class ClientEmailService {
    @Qualifier("gmail")
    @Autowired
    private JavaMailSender javaMailSender;
    @Autowired
    Configuration fmConfiguration;

    public void sendEmail(String content) {
        MimeMessage mimeMessage = javaMailSender.createMimeMessage();
        try {

            MimeMessageHelper mimeMessageHelper = new MimeMessageHelper(mimeMessage, true);

            mimeMessageHelper.setSubject("Test");
            mimeMessageHelper.setFrom("naveen.ccmsd@gmail.com");
            mimeMessageHelper.setTo("naveen.ccmsd@gmail.com");
            mimeMessageHelper.setText(content, true);
            javaMailSender.send(mimeMessageHelper.getMimeMessage());
        } catch (MessagingException e) {
            e.printStackTrace();
        }
    }
}