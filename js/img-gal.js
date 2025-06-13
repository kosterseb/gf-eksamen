// Modal - Array med kortdata
const cardData = [
    {
        image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        title: "EVENTYR !",
        text: "Tag med på tur i det vilde og find alle de kartoffelmader du kunne ønske dig."
    },
    {
        image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        title: "Lækre surdejsboller",
        text: "kan du lide surdejsboller som alle andre snæversyndede- kaffelatte drikkende københavnere, så har vi det her !."
    },
    {
        image: "https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        title: "fy for en skefuld",
        text: "Nu er jeg godt nok træt af at skrive fuldstændig ligegyldig tekst."
    }
];

// Funktion til at generere kortene

function openModal(index) {
    const modal = document.getElementById('modal');
    const modalImage = document.getElementById('modalImage');
    const modalTitle = document.getElementById('modalTitle');
    const modalText = document.getElementById('modalText');
    
    modalImage.src = cardData[index].image;
    modalTitle.textContent = cardData[index].title;
    modalText.textContent = cardData[index].text;
    
    modal.classList.add('active');
};


// Funktion til at lukke kortene
function closeModal() {
    const modal = document.getElementById('modal');
    modal.classList.remove('active');
};