package net.javaguides.springboot.service;

public interface ICaptchaService {
    
    default void processResponse(final String response) throws RuntimeException  {}
    
    default void processResponse(final String response, String action) throws RuntimeException  {}
    
    String getReCaptchaSite();

    String getReCaptchaSecret();
}