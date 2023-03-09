package net.javaguides.springboot.model;

import java.util.LinkedHashMap;
import java.util.Map;
import javax.annotation.Generated;

import com.fasterxml.jackson.annotation.JsonAnyGetter;
import com.fasterxml.jackson.annotation.JsonAnySetter;
import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonPropertyOrder;

public class ClientForm {
    @JsonProperty("captchaToken")
    private String captchaToken;
    @JsonProperty("applyFor")
    private String applyFor = "";
    @JsonProperty("clientState")
    private String clientState = "";
    @JsonProperty("agentEmail")
    private String agentEmail = "";
    @JsonProperty("acceptAgreement")
    private String acceptAgreement = "";
    @JsonProperty("meetingDate")
    private String meetingDate = "";
    @JsonProperty("meetingTime")
    private String meetingTime = "";
    @JsonProperty("clientFirstName")
    private String clientFirstName = "";
    @JsonProperty("clientLastName")
    private String clientLastName = "";
    @JsonProperty("clientAge")
    private String clientAge = "";
    @JsonProperty("clientTobaccoNicUse")
    private String clientTobaccoNicUse = "";
    @JsonProperty("clientGender")
    private String clientGender = "";
    @JsonProperty("clientLastPhysicalComplete")
    private String clientLastPhysicalComplete = "";
    @JsonProperty("clientHeight")
    private String clientHeight = "";
    @JsonProperty("clientWeight")
    private String clientWeight = "";
    @JsonProperty("clientMedication")
    private String clientMedication = "";
    @JsonProperty("clientHealth")
    private String clientHealth = "";
    @JsonProperty("partnerFirstName")
    private String partnerFirstName = "";
    @JsonProperty("partnerLastName")
    private String partnerLastName = "";
    @JsonProperty("partnerAge")
    private String partnerAge = "";
    @JsonProperty("partnerGender")
    private String partnerGender = "";
    @JsonProperty("partnerLastPhysicalComplete")
    private String partnerLastPhysicalComplete = "";
    @JsonProperty("partnerHeight")
    private String partnerHeight = "";
    @JsonProperty("partnerWeight")
    private String partnerWeight = "";

    @JsonProperty("partnerTobaccoNicUse")
    private String partnerTobaccoNicUse = "";
    @JsonProperty("partnerMedication")
    private String partnerMedication = "";
    @JsonProperty("partnerHealth")
    private String partnerHealth = "";
    @JsonProperty("moreDetails")
    private String moreDetails = "";
    @JsonProperty("priorExperience")
    private String priorExperience = "";
    @JsonProperty("agentFirstName")
    private String agentFirstName = "";
    @JsonProperty("agentLastName")
    private String agentLastName = "";
    @JsonProperty("agentPhoneNumber")
    private String agentPhoneNumber = "";
    @JsonProperty("agentState")
    private String agentState = "";
    @JsonIgnore
    private Map<String, Object> additionalProperties = new LinkedHashMap<String, Object>();

    @JsonProperty("applyFor")
    public String getApplyFor() {
        return applyFor;
    }

    @JsonProperty("applyFor")
    public void setApplyFor(String applyFor) {
        this.applyFor = applyFor;
    }

    @JsonProperty("clientState")
    public String getClientState() {
        return clientState;
    }

    @JsonProperty("clientState")
    public void setClientState(String clientState) {
        this.clientState = clientState;
    }

    @JsonProperty("agentEmail")
    public String getAgentEmail() {
        return agentEmail;
    }

    @JsonProperty("agentEmail")
    public void setAgentEmail(String agentEmail) {
        this.agentEmail = agentEmail;
    }

    @JsonProperty("acceptAgreement")
    public String getAcceptAgreement() {
        return acceptAgreement;
    }

    @JsonProperty("acceptAgreement")
    public void setAcceptAgreement(String acceptAgreement) {
        this.acceptAgreement = acceptAgreement;
    }

    @JsonProperty("meetingDate")
    public String getMeetingDate() {
        return meetingDate;
    }

    @JsonProperty("meetingDate")
    public void setMeetingDate(String meetingDate) {
        this.meetingDate = meetingDate;
    }

    @JsonProperty("meetingTime")
    public String getMeetingTime() {
        return meetingTime;
    }

    @JsonProperty("meetingTime")
    public void setMeetingTime(String meetingTime) {
        this.meetingTime = meetingTime;
    }

    @JsonProperty("clientFirstName")
    public String getClientFirstName() {
        return clientFirstName;
    }

    @JsonProperty("clientFirstName")
    public void setClientFirstName(String clientFirstName) {
        this.clientFirstName = clientFirstName;
    }

    @JsonProperty("clientLastName")
    public String getClientLastName() {
        return clientLastName;
    }

    @JsonProperty("clientLastName")
    public void setClientLastName(String clientLastName) {
        this.clientLastName = clientLastName;
    }

    @JsonProperty("clientAge")
    public String getClientAge() {
        return clientAge;
    }

    @JsonProperty("clientAge")
    public void setClientAge(String clientAge) {
        this.clientAge = clientAge;
    }

    @JsonProperty("clientTobaccoNicUse")
    public String getClientTobaccoNicUse() {
        return clientTobaccoNicUse;
    }

    @JsonProperty("clientTobaccoNicUse")
    public void setClientTobaccoNicUse(String clientTobaccoNicUse) {
        this.clientTobaccoNicUse = clientTobaccoNicUse;
    }

    @JsonProperty("clientGender")
    public String getClientGender() {
        return clientGender;
    }

    @JsonProperty("clientGender")
    public void setClientGender(String clientGender) {
        this.clientGender = clientGender;
    }

    @JsonProperty("clientLastPhysicalComplete")
    public String getClientLastPhysicalComplete() {
        return clientLastPhysicalComplete;
    }

    @JsonProperty("clientLastPhysicalComplete")
    public void setClientLastPhysicalComplete(String clientLastPhysicalComplete) {
        this.clientLastPhysicalComplete = clientLastPhysicalComplete;
    }

    @JsonProperty("clientHeight")
    public String getClientHeight() {
        return clientHeight;
    }

    @JsonProperty("clientHeight")
    public void setClientHeight(String clientHeight) {
        this.clientHeight = clientHeight;
    }


    @JsonProperty("clientHealth")
    public String getClientHealth() {
        return clientHealth;
    }

    @JsonProperty("clientHealth")
    public void setClientHealth(String clientWeight) {
        this.clientHealth = clientHealth;
    }

    @JsonProperty("clientWeight")
    public String getClientWeight() {
        return clientWeight;
    }

    @JsonProperty("clientWeight")
    public void setClientWeight(String clientWeight) {
        this.clientWeight = clientWeight;
    }

    @JsonProperty("partnerFirstName")
    public String getPartnerFirstName() {
        return partnerFirstName;
    }

    @JsonProperty("partnerFirstName")
    public void setPartnerFirstName(String partnerFirstName) {
        this.partnerFirstName = partnerFirstName;
    }

    @JsonProperty("partnerLastName")
    public String getPartnerLastName() {
        return partnerLastName;
    }

    @JsonProperty("partnerLastName")
    public void setPartnerLastName(String partnerLastName) {
        this.partnerLastName = partnerLastName;
    }

    @JsonProperty("partnerAge")
    public String getPartnerAge() {
        return partnerAge;
    }

    @JsonProperty("partnerAge")
    public void setPartnerAge(String partnerAge) {
        this.partnerAge = partnerAge;
    }

    @JsonProperty("partnerLastPhysicalComplete")
    public String getPartnerLastPhysicalComplete() {
        return partnerLastPhysicalComplete;
    }

    @JsonProperty("partnerLastPhysicalComplete")
    public void setPartnerLastPhysicalComplete(String partnerLastPhysicalComplete) {
        this.partnerLastPhysicalComplete = partnerLastPhysicalComplete;
    }

    @JsonProperty("partnerHeight")
    public String getPartnerHeight() {
        return partnerHeight;
    }

    @JsonProperty("partnerHeight")
    public void setPartnerHeight(String partnerHeight) {
        this.partnerHeight = partnerHeight;
    }

    @JsonProperty("partnerWeight")
    public String getPartnerWeight() {
        return partnerWeight;
    }

    @JsonProperty("partnerWeight")
    public void setPartnerWeight(String partnerWeight) {
        this.partnerWeight = partnerWeight;
    }

    @JsonProperty("partnerMedication")
    public String getPartnerMedication() {
        return partnerMedication;
    }

    @JsonProperty("partnerMedication")
    public void setPartnerMedication(String partnerMedication) {
        this.partnerMedication = partnerMedication;
    }

    @JsonProperty("partnerHealth")
    public String getPartnerHealth() {
        return partnerHealth;
    }

    @JsonProperty("partnerHealth")
    public void setPartnerHealth(String partnerHealth) {
        this.partnerHealth = partnerHealth;
    }

    @JsonProperty("moreDetails")
    public String getMoreDetails() {
        return moreDetails;
    }

    @JsonProperty("moreDetails")
    public void setMoreDetails(String moreDetails) {
        this.moreDetails = moreDetails;
    }

    @JsonProperty("priorExperience")
    public String getPriorExperience() {
        return priorExperience;
    }

    @JsonProperty("priorExperience")
    public void setPriorExperience(String priorExperience) {
        this.priorExperience = priorExperience;
    }

    @JsonProperty("agentFirstName")
    public String getAgentFirstName() {
        return agentFirstName;
    }

    @JsonProperty("agentFirstName")
    public void setAgentFirstName(String agentFirstName) {
        this.agentFirstName = agentFirstName;
    }

    @JsonProperty("agentLastName")
    public String getAgentLastName() {
        return agentLastName;
    }

    @JsonProperty("agentLastName")
    public void setAgentLastName(String agentLastName) {
        this.agentLastName = agentLastName;
    }

    @JsonProperty("agentPhoneNumber")
    public String getAgentPhoneNumber() {
        return agentPhoneNumber;
    }

    @JsonProperty("agentPhoneNumber")
    public void setAgentPhoneNumber(String agentPhoneNumber) {
        this.agentPhoneNumber = agentPhoneNumber;
    }

    @JsonProperty("agentState")
    public String getAgentState() {
        return agentState;
    }

    @JsonProperty("agentState")
    public void setAgentState(String agentState) {
        this.agentState = agentState;
    }

    @JsonAnyGetter
    public Map<String, Object> getAdditionalProperties() {
        return this.additionalProperties;
    }

    @JsonAnySetter
    public void setAdditionalProperty(String name, Object value) {
        this.additionalProperties.put(name, value);
    }

    public String getCaptchaToken() {
        return captchaToken;
    }

    public void setCaptchaToken(String captchaToken) {
        this.captchaToken = captchaToken;
    }

    public String getClientMedication() {
        return clientMedication;
    }

    public void setClientMedication(String clientMedication) {
        this.clientMedication = clientMedication;
    }

    public String getPartnerGender() {
        return partnerGender;
    }

    public void setPartnerGender(String partnerGender) {
        this.partnerGender = partnerGender;
    }

    public String getPartnerTobaccoNicUse() {
        return partnerTobaccoNicUse;
    }

    public void setPartnerTobaccoNicUse(String partnerTobaccoNicUse) {
        this.partnerTobaccoNicUse = partnerTobaccoNicUse;
    }

    public void setAdditionalProperties(Map<String, Object> additionalProperties) {
        this.additionalProperties = additionalProperties;
    }
}