package org.example;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.*;

@RestController
public class EmployeeController {

    @Autowired
    EmailService emailService;

    @GetMapping(value = "/healthcheck", produces = "application/json; charset=utf-8")
    public String getHealthCheck() {
        return "{ \"isWorking\" : true }";
    }

    @GetMapping("/jotForm")
    public String submitForm(@RequestBody Object formValue) {
        sendMails(JsonUtil.objectToJson(formValue));
         return "{ \"submitted\" : true }";
    }




    private void sendMails(String body) {

        String from = "naveen.ccmsd@gmail.com";
        String to = "naveen.ccmsd@gmail.com";
        String subject = "Java Mail with Spring Boot - Plain Text";

        EmailTemplate template = new EmailTemplate("hello-world-plain.txt");

        Map<String, String> replacements = new HashMap<String, String>();
        replacements.put("user", "Naveen");
        replacements.put("today", String.valueOf(new Date()));

//        String message = template.getTemplate(replacements);

        Email email = new Email(from, to, subject, body);


        try {

            emailService.send(email);

        } catch (Exception e) {
            e.printStackTrace();
        }
    }

}
