let audioPlayer = document.getElementById('audioPlayer');
        let audioSource = document.getElementById('audioSource');
        let modal = document.getElementById('audioModal');
        let modalImage = document.getElementById('modalImage');

        function playAudio(audioFile, imageFile) {
            audioSource.src = audioFile;
            modalImage.src = imageFile;
            audioPlayer.load();
            audioPlayer.play();
            modal.style.display = "flex";
        }

        function closeModal() {
            audioPlayer.pause();
            audioPlayer.currentTime = 0;
            modal.style.display = "none";
        }

        window.onclick = function(event) {
            if (event.target == modal) {
                closeModal();
            }
        }