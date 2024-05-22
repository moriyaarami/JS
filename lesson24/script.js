class Gallery {
    Images = [];
    imgElem = document.createElement("img");
    currentImage = 0;

    constructor(elemID, ...images) {
        const galleryElem = document.getElementById(elemID);
        this.Images = images;

        galleryElem.appendChild(this.imgElem);
        this.showImage();

        this.imgElem.addEventListener("click", () => this.nextImage());
    }

    nextImage() {
        this.currentImage++;

        if (this.currentImage >= this.Images.length) {
            this.currentImage = 0;
        }

        this.showImage();

    }

    showImage() {
        // מחליפים את התמונה בגלרייה לפי המיקום החדש
        this.imgElem.src = `./images/${this.Images[this.currentImage]}`;
    }


}



new Gallery("gallery", "תמונה (1).jpg", "תמונה (2).jpg");
new Gallery("gallery", "תמונה (3).jpg", "תמונה (4).jpg");

