function convertFormToJSON(form) {
  const json = {};
  $.each(form, function () {
    json[this.name] = this.value || "";
  });
  return json;
}

// Example starter JavaScript for disabling form submissions if there are invalid fields

(() => {
  'use strict'

  // Fetch all the forms we want to apply custom Bootstrap validation styles to
  const forms = document.querySelectorAll('.needs-validation')

  // Loop over them and prevent submission
  Array.from(forms).forEach(form => {
    form.addEventListener('submit', event => {
      event.preventDefault()
      event.stopPropagation()      
      form.classList.add('was-validated')
      if (form.checkValidity()) {
       //get the action-url of the form
       var actionurl = "http://localhost:8080/employees";
       //do your own request an handle the results
       var formData = convertFormToJSON($("#myform").serializeArray()); // Create array of object
        var jsonConvertedData = JSON.stringify(formData);
       window.alert("submitting form to " + actionurl);
       $.ajax({
               url: actionurl,
               type: 'post',
               dataType: 'json',
               contentType : 'application/json',
               data: jsonConvertedData,
               success: function(result) {
                $("#message").html("Thank you !! Form submitted.." + new Date());
                console.log(result);
               },
               error: function(xhr, resp, text) {
                console.log(xhr, resp, text);
            }
       });
      }
    }, false)
  })
})()
