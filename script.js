const imageArrays = {

    nature: [
        { url: './nature/nt1.jpg', alt: 'Nature Image 1', title: 'Image 1' },
        { url: './nature/nt2.jpg', alt: 'Nature Image 2', title: 'Image 2' },
        { url: './nature/nt3.jpg', alt: 'Nature Image 3', title: 'Image 3' },
        { url: './nature/nt4.jpg', alt: 'Nature Image 4', title: 'Image 4' },
        { url: './nature/nt5.jpg', alt: 'Nature Image 5', title: 'Image 5' },
        { url: './nature/nt6.jpg', alt: 'Nature Image 6', title: 'Image 6' },
        { url: './nature/nt7.jpg', alt: 'Nature Image 7', title: 'Image 7' },
        { url: './nature/nt8.jpg', alt: 'Nature Image 8', title: 'Image 8' },
        { url: './nature/nt9.jpg', alt: 'Nature Image 9', title: 'Image 9' },
    ],
    qazaqstan: [
        { url: './kz/kz1.jpg', alt: 'Qazaqhstan Image 1', title: 'Image 1' },
        { url: './kz/kz2.jpg', alt: 'Qazaqhstan Image 2', title: 'Image 2' },
        { url: './kz/kz3.jpg', alt: 'Qazaqhstan Image 3', title: 'Image 3' },
        { url: './kz/kz4.jpg', alt: 'Qazaqhstan Image 4', title: 'Image 4' },
        { url: './kz/kz5.jpg', alt: 'Qazaqhstan Image 5', title: 'Image 5' },
        { url: './kz/kz6.jpg', alt: 'Qazaqhstan Image 6', title: 'Image 6' },
        { url: './kz/kz7.jpg', alt: 'Qazaqhstan Image 7', title: 'Image 7' },
        { url: './kz/kz8.jpg', alt: 'Qazaqhstan Image 8', title: 'Image 8' },
        { url: './kz/kz9.jpg', alt: 'Qazaqhstan Image 9', title: 'Image 9' },
        { url: './kz/kz10.jpg', alt: 'Qazaqhstan Image 10', title: 'Image 10' },
    ],
    creatures: [
        { url: './animals/anim1.jpg', alt: 'animals Image 1', title: 'Image 1' },
        { url: './animals/anim2.jpg', alt: 'animals Image 2', title: 'Image 2' },
        { url: './animals/anim3.jpg', alt: 'animals Image 3', title: 'Image 3' },
        { url: './animals/anim4.jpg', alt: 'animals Image 4', title: 'Image 4' },
        { url: './animals/anim5.jpg', alt: 'animals Image 5', title: 'Image 5' },
        { url: './animals/anim6.jpg', alt: 'animals Image 6', title: 'Image 6' },
        { url: './animals/anim7.jpg', alt: 'animals Image 7', title: 'Image 7' },
        { url: './animals/anim8.jpg', alt: 'animals Image 8', title: 'Image 8' },
    ],
};

document.addEventListener('DOMContentLoaded', () => {
    const imagesContainer = document.querySelector('.main-right');
    const titles = document.querySelectorAll('.head-title');
    let activeTitle = document.querySelector('.head-title.selected'); 
    const yesAnswer = document.querySelector('.footer-yes');
    const noAnswer = document.querySelector('.footer-no');


    const loadImages = (category) => {
        imagesContainer.innerHTML = ''; 
        const pictures = imageArrays[category];

        pictures.forEach(pic => {
            const imgElement = document.createElement('img');
            imgElement.src = pic.url;
            imgElement.alt = pic.alt;
            imgElement.title = pic.title;
            imgElement.classList.add('main-pic');
            imagesContainer.appendChild(imgElement);
        });
    };


    loadImages(activeTitle.textContent.toLowerCase());

    titles.forEach(title => {
        title.addEventListener('click', (event) => {
            if (activeTitle !== title) {
                if (activeTitle) {
                    activeTitle.classList.remove('selected');
                }
                title.classList.add('selected');
                activeTitle = title;

                loadImages(activeTitle.textContent.toLowerCase());
            }
        });
    });


    imagesContainer.addEventListener('click', (event) => {
        if (event.target.classList.contains('main-pic')) {
            const enlargedImage = document.querySelector('.enlarged');
            if (enlargedImage) {
                enlargedImage.remove();
                return; 
            }
            const newEnlargedImage = event.target.cloneNode(); 
            newEnlargedImage.classList.add('enlarged');
            document.body.appendChild(newEnlargedImage); 
            newEnlargedImage.addEventListener('click', () => {
                newEnlargedImage.remove(); 
            });
        }
    });

    yesAnswer.addEventListener('click', () => {
        alert('Thank you, darling');
    });

    noAnswer.addEventListener('click', () => {
        alert("If it's a no, let it be so")
    } )

});