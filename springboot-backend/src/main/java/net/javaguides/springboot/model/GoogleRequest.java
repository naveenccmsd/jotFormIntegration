package net.javaguides.springboot.model;

import com.fasterxml.jackson.annotation.JsonProperty;

public class GoogleRequest {

    @JsonProperty("secret")
    private String secret;
    @JsonProperty("response")
    private String response;

    @JsonProperty("remoteip")
    private String remoteIp;

    public GoogleRequest(){}
    public GoogleRequest(String secret, String response ,String remoteIp){
        this.secret = secret;
        this.response = response;
        this.remoteIp = remoteIp;
    }
    public String getSecret() {
        return secret;
    }

    public void setSecret(String secret) {
        this.secret = secret;
    }

    public String getResponse() {
        return response;
    }

    public void setResponse(String response) {
        this.response = response;
    }

    public String getRemoteIp() {
        return remoteIp;
    }

    public void setRemoteIp(String remoteIp) {
        this.remoteIp = remoteIp;
    }

    @Override
    public String toString() {
        return "GoogleRequest{" +
                "secret='" + secret + '\'' +
                ", response='" + response + '\'' +
                ", remoteip='" + remoteIp + '\'' +
                '}';
    }
}
