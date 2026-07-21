// Urdu Shayaris for Zainu with image paths
const messages = [
    {
        text: "Zainuu tumhari yaad se roshan meri har shaam rehti hai,\nTumhari mohabbat hi meri rooh ka inaam rehti hai.\nRab se aur kya maangu apni taqdeer ke liye,\nBas tumhari hansi hi meri har dua ka naam rehti hai.",
        image: "images/IMG_20260721_215811_224.jpg"
    },
    {
        text: "mohtarmaaa aapki aankhon mein meri duniya ka noor basta hai,\nAapki har baat mein mohabbat ka dastoor basta hai.\nMain kya tareef karun aapki ai jaan-e-wafa,\nAapke wajood mein khud Rab ka noor basta hai.",
        image: "images/Screenshot_2026_0721_215634.jpg"
    },
    {
        text: "mohtarma ki gardan ka woh til bhi kya haseen nishaan hai,\nJaise chaand ke daaman mein chhupa aasman hai.\nAapko dekhoon to har dafa yahi ehsaas hota hai,\nKe husn bhi tere aage bas ek imtihaan hai.",
        image: "images/Screenshot_2026_0721_215656.jpg"
    },
    {
        text: "wapas kuch bhool jaao toh phir seh kehna 'kya naam tha?'\nDil ne kaha, meri jaan... bas mera naam tha.\nAapki har bhooli hui baat bhi yaadgar ban jaati hai,\nAapki har ada pe mohabbat beshumaar hai.",
        image: "images/photo4.jpg"
    }
];

// Function to show message by index
function showMessage(index) {
    if (index >= 1 && index <= 4) {
        showPopup(messages[index - 1]);
        triggerHeartAnimation();
    }
}

// Show popup modal with image and message
function showPopup(messageObj) {
    const popup = document.getElementById('popup');
    const popupMessage = document.getElementById('popup-message');
    const popupImage = document.getElementById('popup-image');
    
    popupMessage.textContent = messageObj.text;
    popupImage.src = messageObj.image;
    popupImage.alt = "Special Photo";
    
    popup.style.display = 'block';
}

// Close popup modal
function closePopup() {
    const popup = document.getElementById('popup');
    popup.style.display = 'none';
}

// Close popup when clicking outside the content
window.onclick = function(event) {
    const popup = document.getElementById('popup');
    if (event.target == popup) {
        popup.style.display = 'none';
    }
}

// Heart animation effect
function triggerHeartAnimation() {
    const hearts = ['❤️', '💙', '💜', '💖', '💕'];
    for (let i = 0; i < 10; i++) {
        setTimeout(() => {
            const heart = document.createElement('div');
            heart.innerHTML = hearts[Math.floor(Math.random() * hearts.length)];
            heart.style.position = 'fixed';
            heart.style.left = Math.random() * window.innerWidth + 'px';
            heart.style.top = window.innerHeight + 'px';
            heart.style.fontSize = Math.random() * 20 + 30 + 'px';
            heart.style.zIndex = '999';
            heart.style.pointerEvents = 'none';
            heart.style.opacity = '1';
            document.body.appendChild(heart);
            
            let opacity = 1;
            const interval = setInterval(() => {
                opacity -= 0.05;
                heart.style.opacity = opacity;
                heart.style.transform = 'translateY(' + (-i * 10) + 'px)';
                if (opacity <= 0) {
                    clearInterval(interval);
                    heart.remove();
                }
            }, 50);
        }, i * 100);
    }
}
