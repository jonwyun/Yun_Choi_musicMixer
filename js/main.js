let mixerTrigger = document.querySelectorAll(".mixer-trigger img"),
    dropZones = document.querySelectorAll(".drop-zone"),
    resetButton = document.querySelector("#reset-button img"),
    audioElements = document.querySelectorAll("audio"),
    playButton = document.querySelector("#play-button"),
    pauseButton = document.querySelector("#pause-button"),
    allMusic = document.querySelectorAll(".key"),
    draggedPiece,
    playing = false;

// Drag and Drop

function changeBGImage() {      
    mixerTrigger.forEach((piece) => {
        const containerId = piece.dataset.container;
        const container = document.getElementById(containerId);
        container.appendChild(piece);
    });
      
    dropZones.forEach(zone => {
        while (zone.firstChild) {
            zone.removeChild(zone.firstChild);
        }
    });
}
  
function handleStartDrag() { 
    console.log('started dragging this piece:', this);
    draggedPiece = this;
}

function handleDragOver(e) { 
    e.preventDefault(); 
    console.log('dragged over me'); 
}

function handleDrop(e) { 
	e.preventDefault();
	console.log('dropped something on me');
	
    if (this.children.length === 0) {
        let previousDropZone = draggedPiece.parentNode;
        previousDropZone.removeChild(draggedPiece);
        this.appendChild(draggedPiece);

        let audioClip = document.querySelector(`audio[data-key="${draggedPiece.dataset.key}"]`);
        if (audioClip) {
            audioClip.currentTime = 0;
            audioClip.play();
        }
    }
}

// Audio 

function playTrack() { 
    audioElements.forEach(audio => audio.play()); 
    playing = true; 
}

function pauseTrack() { 
    audioElements.forEach(audio => audio.pause()); 
    playing = false; 
}

function rewindTrack() { audioElements.forEach(audio => audio.currentTime = 0); }
  
mixerTrigger.forEach(piece => piece.addEventListener("dragstart", handleStartDrag));
dropZones.forEach(zone => {
    zone.addEventListener("dragover", handleDragOver);
    zone.addEventListener("drop", handleDrop);
});
resetButton.addEventListener("click", changeBGImage);
playButton.addEventListener("click", playTrack);
pauseButton.addEventListener("click", pauseTrack);
resetButton.addEventListener("click", pauseTrack);

