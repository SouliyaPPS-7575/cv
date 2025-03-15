export const useDownloadCV = () => {
     const downloadCV = () => {
          const googleDriveFileId = "10nG_AlDwVyXEBqYE4QkIu0mC0DSeOq4K";
          const downloadUrl = `https://drive.google.com/uc?export=download&id=${googleDriveFileId}`;

          const link = document.createElement("a");
          link.href = downloadUrl;
          link.target = "_blank"; // Opens in a new tab
          link.download = "CV.pdf"; // Suggested file name
          document.body.appendChild(link);
          link.click();
          document.body.removeChild(link);
     };

     return downloadCV;
};