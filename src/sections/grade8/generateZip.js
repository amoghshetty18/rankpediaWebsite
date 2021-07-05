import JSZip from 'jszip';
import { saveAs } from 'file-saver';
import JSZipUtils from 'jszip-utils';
export const generateZip = () => {
  var zip = new JSZip();

  zip.file('Hello.txt', 'Hello World\n');

  var img = zip.folder('images');

  zip.generateAsync({ type: 'blob' }).then(function(content) {
    saveAs(content, 'example.zip');
  });
};

export const generateZipFromCloud = () => {
  // let filename = 'MultiFilesDownload';
  // const urls = [
  //   'https://assets.thehindustep.in/user_tasks/01bd55804ecb6f90408f87d5710df126.docx'
  // ];
  // const zip = new JSZip();
  // const folder = zip.folder('project');
  // urls.forEach(url => {
  //   const blobPromise = fetch(url).then(function(response) {
  //     console.log({ response });
  //     if (response.status === 200 || response.status === 0) {
  //       return Promise.resolve(response.blob());
  //     } else {
  //       return Promise.reject(new Error(response.statusText));
  //     }
  //   });
  //   const name = url.substring(url.lastIndexOf('/'));
  //   folder.file(name, blobPromise);
  // });

  // zip
  //   .generateAsync({ type: 'blob' })
  //   .then(blob => saveAs(blob, filename))
  //   .catch(e => console.log(e));

  var zip = new JSZip();
var count = 0;
var zipFilename = "zipFilename.zip";
var urls = [
  'http://image-url-1'
];

urls.forEach(function(url){
  var filename = "filename";
  // loading a file and add it in a zip file
  JSZipUtils.getBinaryContent(url, function (err, data) {
     if(err) {
        throw err; // or handle the error
     }
     zip.file(filename, data, {binary:true});
     count++;
     if (count == urls.length) {
       var zipFile = zip.generate({type: "blob"});
       saveAs(zipFile, zipFilename);
     }
  });
});

};
