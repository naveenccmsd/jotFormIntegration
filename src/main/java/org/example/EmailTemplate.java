/**
 * 
 */
package org.example;

import java.io.File;
import java.io.IOException;
import java.nio.file.Files;
import java.util.Collection;
import java.util.Map;


/**
 * @author pavan.solapure
 *
 */
public class EmailTemplate {

	private String templateId;

	private String template;

	private Map<String, String> replacementParams;

	public EmailTemplate(String templateId) {
		this.templateId = templateId;
		try {
			this.template = loadTemplate(templateId);
		} catch (Exception e) {
			this.template = Constants.BLANK;
		}
	}

	private String loadTemplate(String templateId) throws Exception {
		ClassLoader classLoader = getClass().getClassLoader();
		File file = new File(classLoader.getResource("email-templates/" + templateId).getFile());
		String content = Constants.BLANK;
		try {
			content = new String(Files.readAllBytes(file.toPath()));
		} catch (IOException e) {
			throw new Exception("Could not read template with ID = " + templateId);
		}
		return content;
	}

	public String getTemplate(Map<String, String> replacements) {
		String cTemplate = this.getTemplate();

		if (!isObjectEmpty(cTemplate)) {
			for (Map.Entry<String, String> entry : replacements.entrySet()) {
				cTemplate = cTemplate.replace("{{" + entry.getKey() + "}}", entry.getValue());
			}
		}
		
		return cTemplate;
	}

	public static boolean isObjectEmpty(Object object) {
		if(object == null) return true;
		else if(object instanceof String) {
			if (((String)object).trim().length() == 0) {
				return true;
			}
		} else if(object instanceof Collection) {
			return isCollectionEmpty((Collection<?>)object);
		}
		return false;
	}
	private static boolean isCollectionEmpty(Collection<?> collection) {
		if (collection == null || collection.isEmpty()) {
			return true;
		}
		return false;
	}
	/**
	 * @return the templateId
	 */
	public String getTemplateId() {
		return templateId;
	}

	/**
	 * @param templateId
	 *            the templateId to set
	 */
	public void setTemplateId(String templateId) {
		this.templateId = templateId;
	}

	/**
	 * @return the template
	 */
	public String getTemplate() {
		return template;
	}

	/**
	 * @param template
	 *            the template to set
	 */
	public void setTemplate(String template) {
		this.template = template;
	}

	/**
	 * @return the replacementParams
	 */
	public Map<String, String> getReplacementParams() {
		return replacementParams;
	}

	/**
	 * @param replacementParams
	 *            the replacementParams to set
	 */
	public void setReplacementParams(Map<String, String> replacementParams) {
		this.replacementParams = replacementParams;
	}

}
