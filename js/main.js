let mixerTrigger = document.querySelectorAll(".mixer-trigger img"),
    dropZones = document.querySelectorAll(".drop-zone"),
    resetButton = document.querySelector("#reset-button img"),
    draggedPiece;

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
    }
}

mixerTrigger.forEach(piece => piece.addEventListener("dragstart", handleStartDrag));

dropZones.forEach(zone => zone.addEventListener("dragover", handleDragOver));

dropZones.forEach(zone => zone.addEventListener("drop", handleDrop));

resetButton.addEventListener("click", changeBGImage);