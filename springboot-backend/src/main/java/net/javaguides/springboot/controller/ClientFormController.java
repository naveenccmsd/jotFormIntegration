package net.javaguides.springboot.controller;

import net.javaguides.springboot.model.ClientForm;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/v1/")
public class ClientFormController {

	Logger logger = LoggerFactory.getLogger(ClientFormController.class);


	@CrossOrigin(origins = {"http://localhost:3000", "http://localhost:8080","http://localhost:80"})
	@PostMapping("/clientForms")
	public ClientForm addFormEntry(@RequestBody ClientForm formData) {
		logger.info("Result : {}" , JsonUtil.objectToJson(formData));
		try {
			Thread.sleep(10000);
		} catch (InterruptedException e) {
			throw new RuntimeException(e);
		}
		logger.info("completed");
		return formData;
	}
}
