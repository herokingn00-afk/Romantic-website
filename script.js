// Messages for different buttons
const comfortMessages = [
    "When you're feeling down, remember that I'm here for you. Always. Your struggles are temporary, but my love for you is forever. 💙",
    "Life can be tough, but you're tougher. Take a deep breath. You've overcome challenges before, and you'll overcome this too. I believe in you. 💙",
    "On your hard days, know that you are deserving of rest, kindness, and love—especially from yourself. Let me be here to comfort you. 💙",
    "Your tears are valid. Your feelings matter. And I'm right here, holding you through it all. You're not alone. 💙",
    "Even in the darkest moments, you shine with resilience. Let me be your light. I've got you, always. 💙"
];

const encourageMessages = [
    "You are capable of amazing things! Every step you take forward, no matter how small, is a victory. Keep going! 💪",
    "Don't doubt yourself for a moment. You have the strength, the intelligence, and the heart to achieve your dreams. Go for it! 💪",
    "You've already proven how incredible you are. Now it's time to prove it to yourself. You can do this! 💪",
    "The world needs what only you can give. Don't hold back. Your potential is limitless. Believe in yourself! 💪",
    "You are stronger than your challenges and braver than your fears. Go out there and show the world what you're made of! 💪"
];

const admireMessages = [
    "Your smile could light up the darkest room. When I see you happy, my whole world becomes brighter. 😊",
    "The way you care about others shows the beauty of your soul. You make the world a better place just by being in it. 😊",
    "I admire your courage, your kindness, and your unwavering spirit. You are extraordinary. 😊",
    "Your passion for life is contagious. The way you pursue your dreams inspires me every single day. 😊",
    "You are not just beautiful on the outside—your heart, your mind, and your spirit are absolutely stunning. 😊"
];

const proposeMessages = [
    "Every moment with you feels like a dream. You've become my favorite person, my greatest adventure, and my home. I love you more than words can express. 💕",
    "In a world full of chaos, you are my peace. Your love has transformed my life in ways I never imagined possible. Thank you for being you. 💕",
    "I promise to love you through every season of life—the sunny days and the stormy nights. You are my forever. 💕",
    "When I look into your eyes, I see my future. I see a lifetime of laughter, support, and unconditional love. Will you spend forever with me? 💕",
    "You are my greatest blessing, my deepest joy, and my truest love. I want to build a beautiful life with you. I choose you, every single day. 💕"
];

// Function to show comfort messages
function showComfort() {
    const randomMessage = comfortMessages[Math.floor(Math.random() * comfortMessages.length)];
    showPopup(randomMessage);
    triggerHeartAnimation();
}

// Function to show encouragement messages
function showEncourage() {
    const randomMessage = encourageMessages[Math.floor(Math.random() * encourageMessages.length)];
    showPopup(randomMessage);
    triggerConfetti();
}

// Function to show admiration messages
function showAdmire() {
    const randomMessage = admireMessages[Math.floor(Math.random() * admireMessages.length)];
    showPopup(randomMessage);
    triggerSparkles();
}

// Function to show love declaration
function showPropose() {
    const randomMessage = proposeMessages[Math.floor(Math.random() * proposeMessages.length)];
    showPopup(randomMessage);
    triggerAllEffects();
}

// Show popup modal
function showPopup(message) {
    const popup = document.getElementById('popup');
    const popupMessage = document.getElementById('popup-message');
    popupMessage.textContent = message;
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

// Confetti effect
function triggerConfetti() {
    for (let i = 0; i < 50; i++) {
        const confetti = document.createElement('div');
        confetti.innerHTML = ['🎉', '✨', '⭐', '🌟', '💫'][Math.floor(Math.random() * 5)];
        confetti.style.position = 'fixed';
        confetti.style.left = Math.random() * window.innerWidth + 'px';
        confetti.style.top = '-10px';
        confetti.style.fontSize = Math.random() * 15 + 20 + 'px';
        confetti.style.zIndex = '999';
        confetti.style.pointerEvents = 'none';
        document.body.appendChild(confetti);
        
        const duration = Math.random() * 2 + 2;
        const xMove = Math.random() * 200 - 100;
        confetti.animate([
            { transform: 'translateY(0) translateX(0) rotate(0deg)', opacity: 1 },
            { transform: `translateY(${window.innerHeight}px) translateX(${xMove}px) rotate(360deg)`, opacity: 0 }
        ], {
            duration: duration * 1000,
            easing: 'ease-in'
        }).onfinish = () => confetti.remove();
    }
}

// Sparkles effect
function triggerSparkles() {
    for (let i = 0; i < 30; i++) {
        setTimeout(() => {
            const sparkle = document.createElement('div');
            sparkle.innerHTML = '✨';
            sparkle.style.position = 'fixed';
            sparkle.style.left = Math.random() * window.innerWidth + 'px';
            sparkle.style.top = Math.random() * window.innerHeight + 'px';
            sparkle.style.fontSize = '20px';
            sparkle.style.zIndex = '999';
            sparkle.style.pointerEvents = 'none';
            document.body.appendChild(sparkle);
            
            const duration = Math.random() * 1.5 + 1;
            sparkle.animate([
                { opacity: 1, transform: 'scale(1)' },
                { opacity: 0, transform: 'scale(0)' }
            ], {
                duration: duration * 1000,
                easing: 'ease-out'
            }).onfinish = () => sparkle.remove();
        }, i * 50);
    }
}

// All effects combined
function triggerAllEffects() {
    triggerHeartAnimation();
    triggerConfetti();
    triggerSparkles();
}