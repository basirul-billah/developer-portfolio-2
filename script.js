const langToggle = document.getElementById('langBtn');

const about = document.getElementById('about');
const projects = document.getElementById('projects');
const contact = document.getElementById('contact');

const intro1 = document.getElementById('intro1');
const intro2 = document.getElementById('intro2');
const myName = document.getElementById('name');
const description = document.getElementById('description');
const hireme = document.getElementById('hireme');
const projectsBtn = document.getElementById('projectsBtn');

let currentLanguage = 'en';

langToggle.addEventListener('click', function() {
    this.classList.toggle('activeLang');
    if(currentLanguage==='en') {
        currentLanguage = 'bn';
        this.firstChild.textContent = 'বাং';
        toggleLanguageToBengali();
    }
    else {
        currentLanguage = 'en';
        this.firstChild.textContent = 'en';
        toggleLanguageToEnglish();
    }
});

function toggleLanguageToBengali() {
    about.firstChild.textContent = 'পরিচিতি';
    projects.firstChild.textContent = 'প্রজেক্টস';
    contact.firstChild.textContent = 'যোগাযোগ';
    intro1.firstChild.textContent = 'আমি একজন ';
    intro2.firstChild.textContent = 'এবং আমার নাম';
    myName.firstChild.textContent = 'বাসিরুল বিল্লাহ';
    description.firstChild.textContent = 'আমি একজন ওয়েব ডেভেলপার। আমি রিয়েক্ট, নেক্সট এবং নোডজেএসের কাজ পারি।';
    hireme.firstChild.textContent = 'হায়ার করুন';
    projectsBtn.firstChild.textContent = 'প্রজেক্টস';
}

function toggleLanguageToEnglish() {
    about.firstChild.textContent = 'About';
    projects.firstChild.textContent = 'Projects';
    contact.firstChild.textContent = 'Contact';
    intro1.firstChild.textContent = `I'm a`;
    intro2.firstChild.textContent = `and my name is`;
    myName.firstChild.textContent = 'Basirul Billah';
    description.firstChild.textContent = 'I am a web developer specializing in React, Next and Node. Open to hire.';
    hireme.firstChild.textContent = 'Hire me';
    projectsBtn.firstChild.textContent = 'Projects';
}


