// Check if window is defined (so if in the browser or in node.js).
const isBrowser = typeof window !== "undefined"
export default function MyComponent() {
  let loggedIn = false
  if (isBrowser) {
    window.localstorage.getItem("isLoggedIn") === "true"
  }
      window.onload = () => {
        let apiUrl =
          "https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&playlistId=PLFszJqZtLxVnHCxHlnTHU468qPA1hHNRa&key=AIzaSyCbaV62f8OKSaU8hURXHixccwL4Vg7-Fe8";

        fetch(apiUrl)
          .then((response) => response.json())
          .then((data) => {
            console.log(data.items);
            data.items.forEach((item) => {
              createVideoElement(item.snippet.resourceId.videoId);
            });
          })
          .catch((err) => {
            alert(err);
          });
      };

      function createVideoElement(videoId) {
        let appendTarget = document.getElementById("target");
        let container = document.createElement("div");
        let frame = document.createElement("iframe");

        container.className = "video";
        frame.src = `https://www.youtube.com/embed/${videoId}`;
        frame.width = 560;
        frame.height = 315;
        frame.frameborder = 0;
        frame.allowFullscreen = true;

        container.append(frame);
        target.append(container);
      }
};