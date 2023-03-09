package net.javaguides.springboot.service;

import java.net.URI;

import net.javaguides.springboot.model.GoogleRequest;
import net.javaguides.springboot.model.GoogleResponse;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestClientException;


@Service("captchaServiceV3")
public class CaptchaServiceV3 extends AbstractCaptchaService {

    private final static Logger LOGGER = LoggerFactory.getLogger(CaptchaServiceV3.class);
    
    public static final String REGISTER_ACTION = "register";
    
    @Override
    public void processResponse(String response, final String action) {
        securityCheck(response);
        
        final URI verifyUri = URI.create(String.format(RECAPTCHA_URL_TEMPLATE, getReCaptchaSecret(), response, getClientIP()));
        try {

            GoogleRequest googleRequest = new GoogleRequest(getReCaptchaSecret(),response, getClientIP());
            LOGGER.info("Google's Request: {} ", googleRequest);
            final GoogleResponse googleResponse = restTemplate.postForObject(verifyUri,googleRequest, GoogleResponse.class);
            LOGGER.info("Google's response: {} ", googleResponse.toString());

            if (!googleResponse.isSuccess()) {
                if (googleResponse.hasClientError()) {
                    reCaptchaAttemptService.reCaptchaFailed(getClientIP());
                }
                throw new RuntimeException("reCaptcha was not successfully validated");
            }
        } catch (RestClientException rce) {
            throw new RuntimeException("Registration unavailable at this time.  Please try again later.", rce);
        }
        reCaptchaAttemptService.reCaptchaSucceeded(getClientIP());
    } 
}