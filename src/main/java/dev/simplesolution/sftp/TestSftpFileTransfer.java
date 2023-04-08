package dev.simplesolution.sftp;

import org.apache.commons.io.FileUtils;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

import dev.simplesolution.sftp.service.FileTransferService;

import java.io.File;
import java.nio.charset.Charset;
import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.List;
import java.util.Locale;

@Component
public class TestSftpFileTransfer implements CommandLineRunner {

	@Autowired
	private FileTransferService fileTransferService;
	
	private Logger logger = LoggerFactory.getLogger(TestSftpFileTransfer.class);
	
	@Override
	public void run(String... args) throws Exception {
		logger.info("Start download file");
		boolean isDownloaded = fileTransferService
				.downloadFile("anusha_test.txt",
						"/www.newmanltc.com/web/content/anusha_test.txt");
		logger.info("Download result: " + String.valueOf(isDownloaded));
		File op = new File("anusha_test.txt");
		List<String> data = FileUtils.readLines(op, Charset.defaultCharset());
		data.add(LocalDateTime.now().toString());
		FileUtils.writeLines(op,data,false);
		logger.info("Start upload file");
		boolean isUploaded = fileTransferService.uploadFile(
				"anusha_test.txt", "www.newmanltc.com/web/content/anusha_test.txt");
		logger.info("Upload result: " + String.valueOf(isUploaded));
	}

}
