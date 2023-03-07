import axios from 'axios';

const CLIENT_FORM_API_BASE_URL = "http://localhost:8080/api/v1/clientForms";

class ClientInformationService {

    getFormData(){
        return axios.get(CLIENT_FORM_API_BASE_URL);
    }

    createFormEntry(data){
        return axios.post(CLIENT_FORM_API_BASE_URL, data);
    }

    getFormDataById(formId){
        return axios.get(CLIENT_FORM_API_BASE_URL + '/' + formId);
    }
}

export default new ClientInformationService()