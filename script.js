const hero = document.querySelector('.hero');
const profilePhoto = document.getElementById('profile-photo');
const project1Photo = document.getElementById('project1-photo');
const project2Photo = document.getElementById('project2-photo');
const images = [
  'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1400&q=80',
  'https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1400&q=80',
  'https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=1400&q=80'
];
const profileImages = [
  'images/pf2.jpeg',
  'images/pf3.jpg'
];
const project1Images = [
  'images/Projets/P1.jpg',
  'images/Projets/P2.jpg',
  'images/Projets/P3.jpg',
  'images/Projets/P4.jpg',
  'images/Projets/P5.jpg',
  'images/Projets/P6.jpg',
  'images/Projets/P7.jpg'
];
const project2Images = [
  'images/Projets/T1.jpg',
  'images/Projets/T2.jpg',
  'images/Projets/T3.jpg',
  'images/Projets/T4.jpg'
];

let currentIndex = 0;
let currentProfileIndex = 0;
let currentProject1Index = 0;
let currentProject2Index = 0;

const preloadProfileImages = profileImages.map(src => {
  const img = new Image();
  img.src = src;
  return img;
});
const preloadProject1Images = project1Images.map(src => {
  const img = new Image();
  img.src = src;
  return img;
});
const preloadProject2Images = project2Images.map(src => {
  const img = new Image();
  img.src = src;
  return img;
});

setInterval(() => {
  currentIndex = (currentIndex + 1) % images.length;
  hero.style.background = `linear-gradient(120deg, rgba(15, 45, 61, 0.88), rgba(31, 95, 91, 0.72)), url('${images[currentIndex]}') center/cover`;
}, 60000);

setInterval(() => {
  if (profilePhoto) {
    currentProfileIndex = (currentProfileIndex + 1) % profileImages.length;
    profilePhoto.classList.add('fade-out');
    setTimeout(() => {
      profilePhoto.src = profileImages[currentProfileIndex];
      profilePhoto.classList.remove('fade-out');
    }, 300);
  }

  if (project1Photo) {
    currentProject1Index = (currentProject1Index + 1) % project1Images.length;
    project1Photo.classList.add('fade-out');
    setTimeout(() => {
      project1Photo.src = project1Images[currentProject1Index];
      project1Photo.classList.remove('fade-out');
    }, 300);
  }

  if (project2Photo) {
    currentProject2Index = (currentProject2Index + 1) % project2Images.length;
    project2Photo.classList.add('fade-out');
    setTimeout(() => {
      project2Photo.src = project2Images[currentProject2Index];
      project2Photo.classList.remove('fade-out');
    }, 300);
  }
}, 6000);

const year = document.getElementById('year');
if (year) {
  year.textContent = new Date().getFullYear();
}

const countdownElement = document.getElementById('training-countdown');
if (countdownElement) {
  const academicYears = [
    { label: '2025-2026', start: new Date(2025, 8, 1), end: new Date(2026, 7, 31) },
    { label: '2026-2027', start: new Date(2026, 8, 1), end: new Date(2027, 7, 31) },
    { label: '2027-2028', start: new Date(2027, 8, 1), end: new Date(2028, 7, 31) }
  ];
  const now = new Date();

  let currentYearIndex = academicYears.findIndex(year => now >= year.start && now <= year.end);
  if (currentYearIndex === -1) {
    currentYearIndex = now < academicYears[0].start ? 0 : academicYears.length - 1;
  }

  const endDate = academicYears[academicYears.length - 1].end;
  const remainingMs = Math.max(0, endDate - now);
  const remainingMonths = Math.floor(remainingMs / (1000 * 60 * 60 * 24 * 30.4375));
  const years = Math.floor(remainingMonths / 12);
  const months = remainingMonths % 12;

  let text = '';
  if (remainingMs <= 0) {
    text = 'Formation terminée';
  } else {
    const currentYearLabel = academicYears[currentYearIndex].label;
    const yearText = `${currentYearLabel} (${currentYearIndex + 1}ᵉ année)`;
    if (years > 0) {
      text = `${yearText} — ${years} an${years > 1 ? 's' : ''}`;
      if (months > 0) {
        text += ` et ${months} mois`;
      }
      text += ' restants';
    } else {
      text = `${yearText} — ${months} mois restants`;
    }
  }

  countdownElement.textContent = text;
}
