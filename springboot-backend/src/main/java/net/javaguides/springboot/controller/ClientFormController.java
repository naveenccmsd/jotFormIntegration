package net.javaguides.springboot.controller;

import freemarker.template.Configuration;
import freemarker.template.TemplateException;
import net.javaguides.springboot.model.ClientEmailBuilder;
import net.javaguides.springboot.model.ClientEmailService;
import net.javaguides.springboot.model.ClientForm;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.ui.freemarker.FreeMarkerTemplateUtils;
import org.springframework.web.bind.annotation.*;

import java.io.IOException;

@RestController
@RequestMapping("/api/v1/")
public class ClientFormController {

    @Autowired
    Configuration fmConfiguration;
    @Autowired
    ClientEmailService clientEmailService;

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
