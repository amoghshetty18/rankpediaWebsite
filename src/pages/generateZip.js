import JSZip from 'jszip';
import { saveAs } from 'file-saver';
import JSZipUtils from 'jszip-utils';
export const generateZip = () => {
  // var zip = new JSZip();

  // zip.file('Hello.txt', 'Hello World\n');

  // var img = zip.folder('images');

  // zip.generateAsync({ type: 'blob' }).then(function(content) {
  //   saveAs(content, 'example.zip');
  // });

  var zip = new JSZip();

  // Add a text file with the contents "Hello World\n"
  zip.file("Hello.txt", "Hello World\n");
  
  // Add a another text file with the contents "Goodbye, cruel world\n"
  zip.file("Goodbye.txt", "Goodbye, cruel world\n");
  
  // Add a folder named "images"
  var img = zip.folder("images");
  
  // Add a file named "smile.gif" to that folder, from some Base64 data
  img.file("smile.gif", {base64: true});
  
  zip.generateAsync({type:"base64"}).then(function (content) {
      // location.href="data:application/zip;base64," + content;
  });
};

export const generateZipFromCloud = () => {
 


};
