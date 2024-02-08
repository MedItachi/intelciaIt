import axios from "axios";

class UploadFilesService {
  // array of files
  files = [];
  upload(file, onUploadProgress) {
    let formData = new FormData();
    formData.append("file", file);

    return axios.post("/upload", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
      onUploadProgress,
    });
  }

  addFile(file) {
    files.push(file);
  }
  getFiles() {
    return files;
  }
}

export default new UploadFilesService();
