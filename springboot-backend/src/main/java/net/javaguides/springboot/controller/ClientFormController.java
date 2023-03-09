package net.javaguides.springboot.controller;

import freemarker.template.Configuration;
import freemarker.template.TemplateException;
import net.javaguides.springboot.model.ClientEmailBuilder;
import net.javaguides.springboot.service.CaptchaServiceV3;
import net.javaguides.springboot.service.ClientEmailService;
import net.javaguides.springboot.model.ClientForm;
import net.javaguides.springboot.service.ICaptchaService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.io.IOException;

@RestController
@RequestMapping("/api/v1/")
public class ClientFormController {

    @Autowired
    Configuration fmConfiguration;
    @Autowired
    ClientEmailService clientEmailService;

    @Autowired
    ICaptchaService captchaServiceV3;

    Logger logger = LoggerFactory.getLogger(ClientFormController.class);


    @CrossOrigin(origins = {"http://localhost:3000", "http://localhost:8080", "http://localhost:80"})
    @PostMapping("/clientForms")
    public ClientForm addFormEntry(@RequestBody ClientForm formData) {
        logger.info("Result : {}", JsonUtil.objectToJson(formData));
        try {
            Thread.sleep(5000);
        } catch (InterruptedException e) {
            throw new RuntimeException(e);
        }
        try {
            logger.info("Token : {}", formData.getCaptchaToken());
            captchaServiceV3.processResponse(formData.getCaptchaToken(), CaptchaServiceV3.REGISTER_ACTION);
            String emailBody = ClientEmailBuilder.createEmailForm(fmConfiguration, formData);
            System.out.println(emailBody);
            clientEmailService.sendEmail(emailBody);
        } catch (IOException e) {
            throw new RuntimeException(e);
        } catch (TemplateException e) {
            throw new RuntimeException(e);
        }


        logger.info("completed");

        return formData;
    }
}
