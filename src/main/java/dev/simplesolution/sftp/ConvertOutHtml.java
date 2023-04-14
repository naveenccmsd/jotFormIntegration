package dev.simplesolution.sftp;

import java.io.ByteArrayOutputStream;
import java.io.FileOutputStream;
import java.io.OutputStream;

import org.docx4j.Docx4J;
import org.docx4j.Docx4jProperties;
import org.docx4j.convert.out.ConversionFeatures;
import org.docx4j.convert.out.HTMLSettings;
import org.docx4j.convert.out.html.SdtToListSdtTagHandler;
import org.docx4j.convert.out.html.SdtWriter;
import org.docx4j.fonts.BestMatchingMapper;
import org.docx4j.fonts.IdentityPlusMapper;
import org.docx4j.fonts.Mapper;
import org.docx4j.fonts.PhysicalFont;
import org.docx4j.fonts.PhysicalFonts;
import org.docx4j.model.fields.FieldUpdater;
import org.docx4j.openpackaging.packages.WordprocessingMLPackage;

/**
 * This sample uses XSLT (and Xalan) to
 * produce HTML output.  (There is also
 * HtmlExporterNonXSLT for environments where
 * that is not desirable eg Android).
 * <p>
 * If the source docx contained a WMF, that
 * will get converted to inline SVG.  In order
 * to see the SVG in your browser, you'll need
 * to rename the file to .xml or serve
 * it with MIME type application/xhtml+xml
 */
public class ConvertOutHtml {


    public static void main(String[] args) throws Exception {

        docxToHTML("C:\\Users\\navee\\Downloads\\test_mail.docx");
    }

    private static void docxToHTML(String inputfilepath) throws Exception {
        // Document loading (required)
        WordprocessingMLPackage wordMLPackage;
        System.out.println("Loading file from " + inputfilepath);
        wordMLPackage = Docx4J.load(new java.io.File(inputfilepath));
        // HTML exporter setup (required)
        // .. the HTMLSettings object
        HTMLSettings htmlSettings = Docx4J.createHTMLSettings();
        htmlSettings.setImageDirPath(inputfilepath + "_files");
        htmlSettings.setImageTargetUri(inputfilepath.substring(inputfilepath.lastIndexOf("/") + 1) + "_files");
        htmlSettings.setOpcPackage(wordMLPackage);
        String userCSS;
        // use browser defaults for ol, ul, li
        userCSS = "html, body, div, span, h1, h2, h3, h4, h5, h6, p, a, img,  table, caption, tbody, tfoot, thead, tr, th, td " + "{ margin: 0; padding: 0; border: 0;}" + "body {line-height: 1;} ";
        htmlSettings.setUserCSS(userCSS);
        SdtWriter.registerTagHandler("HTML_ELEMENT", new SdtToListSdtTagHandler());
        FieldUpdater updater = null;
//		Mapper fontMapper = new IdentityPlusMapper(); // better for Windows
        Mapper fontMapper = new BestMatchingMapper(); // better for Linux
        wordMLPackage.setFontMapper(fontMapper);
        // output to an OutputStream.
        OutputStream os;

        os = new FileOutputStream(inputfilepath + ".html");

        // If you want XHTML output
        Docx4jProperties.setProperty("docx4j.Convert.Out.HTML.OutputMethodXML", true);
        Docx4J.toHTML(htmlSettings, os, Docx4J.FLAG_EXPORT_PREFER_XSL);

        // Clean up, so any ObfuscatedFontPart temp files can be deleted
        if (wordMLPackage.getMainDocumentPart().getFontTablePart() != null) {
            wordMLPackage.getMainDocumentPart().getFontTablePart().deleteEmbeddedFontTempFiles();
        }
    }


}