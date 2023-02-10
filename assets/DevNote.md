# Javascript drag and drop
https://www.javascripttutorial.net/web-apis/javascript-drag-and-drop/

## Youtube
https://youtu.be/THpPGezCAGs

## ChatGPT
#### html
----------------------------------------------------------------------
<div id="draggable-element" class="draggable">Draggable Element</div>
<div id="dropzone" class="dropzone">Dropzone</div>

#### CSS
----------------------------------------------------------------------
.draggable {
  width: 100px;
  height: 100px;
  background-color: lightblue;
  text-align: center;
  line-height: 100px;
}

.dropzone {
  width: 200px;
  height: 200px;
  background-color: lightgray;
  border: 2px solid black;
  text-align: center;
  line-height: 200px;
}

#### Javascript
----------------------------------------------------------------------
const draggableElement = document.getElementById("draggable-element");
const dropzone = document.getElementById("dropzone");

draggableElement.addEventListener("dragstart", function(event) {
  event.dataTransfer.setData("text", event.target.id);
});

dropzone.addEventListener("dragover", function(event) {
  event.preventDefault();
});

dropzone.addEventListener("drop", function(event) {
  event.preventDefault();
  const data = event.dataTransfer.getData("text");
  event.target.appendChild(document.getElementById(data));
});
------------------------------------------------------------
This example uses the dragstart and dragover events to initiate and control the drag and drop process, and the drop event to handle the drop action.

The dragstart event sets the data being dragged using the setData method of the DataTransfer object. In this example, the ID of the draggable element is set as the data.

The dragover event is used to prevent the default behavior of the browser, which is to navigate to the dropped data.

The drop event retrieves the data being dragged using the getData method of the DataTransfer object and appends the dragged element to the dropzone element using the appendChild method.


# Sounds
## https://www.bensound.com/free-music-for-videos
## free sound samples:

1. Freesound.org: This is a community-driven website that offers a wide variety of sound effects and samples.
2. 99Sounds.org: This website offers a collection of high-quality sound effects and samples that you can use for free.
3. SoundBible.com: This website provides a large collection of free sound effects and samples that are organized into categories for easy browsing.
4. Zapsplat.com: This website offers a library of more than 50,000 sound effects and samples, all of which are available for free.
5. OrangeFreeSounds.com: This website offers a collection of free sound samples and effects that can be used for a variety of projects, including video and audio production.