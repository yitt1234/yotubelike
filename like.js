const API_KEY = 'Your Api key';

// Function to get video likes
let a = document.querySelector('#some')


function getVideoLikes(videoId) {
    const apiUrl = `https://www.googleapis.com/youtube/v3/videos?part=statistics&id=${videoId}&key=${API_KEY}`;

    fetch(apiUrl)
        .then(response => response.json())
        .then(json => {
            const data = json.items;
            console.log(data)

            if (json.items.length > 0) {
                const likes = parseInt(json.items[0].statistics.likeCount);
                alert(`Number of likes: ${likes}`);
            } else {
                alert('Video not found or unable to retrieve likes.');
            }

        })
        .catch(error => {
            console.error('An error occurred:', error);
        });
}


a.addEventListener('click', function(){
    let b = document.querySelector('#idvideo').value
  const videoId = b


    getVideoLikes(videoId);

});
// https://www.googleapis.com/youtube/v3/channels?part=statistics&id=${channelId}&key=${API_KEY} the url of subscriber
