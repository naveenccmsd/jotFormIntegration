package net.javaguides.springboot.model;

import freemarker.template.Configuration;
import freemarker.template.TemplateException;
import org.springframework.ui.freemarker.FreeMarkerTemplateUtils;

import java.io.IOException;

public class ClientEmailBuilder {

    public static String createEmailForm(Configuration fmConfiguration, ClientForm formData) throws IOException, TemplateException {
        StringBuffer content = new StringBuffer();
        content.append(FreeMarkerTemplateUtils.processTemplateIntoString(fmConfiguration.getTemplate("emailHeader.flth"), formData));
        content.append(FreeMarkerTemplateUtils.processTemplateIntoString(fmConfiguration.getTemplate("clientInformation.flth"), formData));
        if(formData.getApplyFor() !=null && !formData.getApplyFor().equalsIgnoreCase("Single")) {
            content.append(FreeMarkerTemplateUtils.processTemplateIntoString(fmConfiguration.getTemplate("partnerInformation.flth"), formData));
        }
        content.append(FreeMarkerTemplateUtils.processTemplateIntoString(fmConfiguration.getTemplate("agentInformation.flth"), formData));
        content.append(FreeMarkerTemplateUtils.processTemplateIntoString(fmConfiguration.getTemplate("emailFooter.flth"), formData));
        return content.toString();
    }
}
