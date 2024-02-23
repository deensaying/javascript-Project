// JavaScript
const hadithElement = document.getElementById('hadis');
const newHadithButton = document.getElementById('newb');
const BookNameElement = document.getElementById('Book-Name');
const ChapterNameElement = document.getElementById('Chapter-Name');
const ReferenceTextElement = document.getElementById('refno-text');
const narratorElement = document.getElementById('narrator');
const soundIcon = document.querySelector('.sound');
const soundOffIcon = document.querySelector('.stop');
const CopyIcon = document.querySelector('.copy');

let speech = null;

async function fetchRandomHadith() {
  try {
    newHadithButton.innerText = 'Loading Hadith...';
    const response = await fetch('https://random-hadith-generator.vercel.app/muslim/');
    const data = await response.json();
    hadithElement.innerText = data.data.hadith_english;
    BookNameElement.innerText = data.data.bookName;
    ChapterNameElement.innerText = data.data.chapterName;
    narratorElement.innerText = data.data.header; 
    ReferenceTextElement.innerText= data.data.refno;
    newHadithButton.innerText = 'New Hadith';
  } catch (error) {
    console.error('Error fetching Hadith:', error);
    newHadithButton.innerText = 'Failed to load Hadith';
  }
}
      CopyIcon.addEventListener("click",()=>{
        navigator.clipboard.writeText(narratorElement.innerText+"\n"+hadithElement.innerText+"\n"+ReferenceTextElement.innerText);
      });
soundIcon.addEventListener('click', () => {
  if (speech === null) {
    speech = new SpeechSynthesisUtterance(hadithElement.innerText);
    speech.onend = () => {
      speech = null;
    };
    speechSynthesis.speak(speech);
  }
});

soundOffIcon.addEventListener('click', () => {
  if (speech !== null) {
    speechSynthesis.cancel();
  }
});

newHadithButton.addEventListener('click', fetchRandomHadith);


