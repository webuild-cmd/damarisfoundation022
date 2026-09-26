/* =========================
   OBJECTIVES
========================= */

const objectives = [
  'To promote awareness and understanding of prematurity and its associated challenges, particularly among parents, caregivers, healthcare workers and the general public in Nigeria and other resource-limited settings.',
  'To advocate for improved survival, quality of care and long-term outcomes of premature and vulnerable newborns, especially those in underserved and resource-constrained communities.',
  'To support healthcare facilities caring for premature and vulnerable infants through the donation of appropriate non-cash medical supplies, newborn-care materials, equipment and other relevant resources, subject to applicable laws and regulations.',
  'To organise and facilitate short courses, workshops, seminars and other educational programmes for healthcare workers on the recognition, management, monitoring and prevention of complications associated with prematurity and newborn illness.',
  'To provide educational support and practical guidance to parents, families and caregivers of premature infants, including information on newborn care, nutrition, follow-up, developmental needs and recognition of danger signs.',
  'To provide care and support packages and other appropriate non-cash assistance to families of premature infants, particularly families experiencing financial or social hardship, in accordance with the Foundation’s charitable purposes.',
  'To create public awareness of the short- and long-term complications associated with prematurity, including developmental, nutritional, neurological, respiratory, visual, hearing and other potential complications, and to promote appropriate follow-up and early intervention.',
  'To promote early identification, referral and appropriate management of premature and high-risk newborns by strengthening awareness and linkages between families, communities and relevant healthcare services.',
  'To support community-based education and advocacy programmes aimed at reducing preventable complications and deaths associated with prematurity and improving newborn health outcomes.',
  'To collaborate with hospitals, healthcare institutions, professional bodies, government agencies, non-governmental organisations, development partners, academic institutions and other relevant organisations in furtherance of the Foundation’s objectives.',
  'To support research, data collection, documentation and dissemination of information relating to prematurity and newborn health, particularly in Nigeria and other resource-limited settings, where such activities advance the Foundation’s charitable purposes.',
  'To promote the dignity, inclusion, wellbeing and rights of premature infants and their families, and to encourage systems and practices that support their health and development.',
  'To mobilise charitable donations, grants, gifts and other lawful resources from individuals, organisations, institutions and development partners for the achievement of the Foundation’s objectives.',
  'To establish, support or participate in programmes and initiatives that improve access to appropriate information, resources and support for premature infants and their families, particularly in underserved communities.',
  'To undertake any other lawful charitable activities that are incidental or conducive to the attainment of the above objectives, provided that such activities are consistent with the non-profit character and objects of the Foundation.'
];

const objectiveList = document.getElementById('objectiveList');

if (objectiveList) {
  objectives.forEach((text, i) => {
    const item = document.createElement('div');
    item.className = 'objective';

    item.innerHTML = `
      <button type="button" aria-expanded="false">
        <span>${String(i + 1).padStart(2, '0')}</span>
        <strong>Objective ${i + 1}</strong>
        <span>+</span>
      </button>

      <div class="body">${text}</div>
    `;

    const button = item.querySelector('button');

    button.addEventListener('click', () => {
      const open = item.classList.toggle('open');
      button.setAttribute('aria-expanded', open);
    });

    objectiveList.appendChild(item);
  });
}


/* =========================
   TEAM
========================= */

const team = [
  {
    name: 'Barrister Olaniyi George',
    role: 'Chairman of the Board of Governors',
    img: 'barrister-olaniyi-george.jpg'
  },
  {
    name: 'Joyce Foluke Olaniyi George',
    role: 'Executive Director',
    img: 'joyce-foluke-olaniyi-george.jpg'
  },
  {
    name: 'Obaloluwa Olaniyi George',
    role: 'Secretary',
    img: 'obaloluwa-olaniyi-george.jpg'
  },
  {
    name: 'Enioluwa Olaniyi-George, RN, RPHN, BNSc',
    role: 'Treasurer',
    img: 'enioluwa-olaniyi-george.webp',
    bio: 'Enioluwa Olaniyi-George, RN, RPHN, BNSc is a registered nurse and public health nurse with a passion for clinical care, public health, emergency nursing, and health education. He has received clinical training across medical-surgical nursing, maternal and child health, mental health, and community health settings. Beyond nursing, Enioluwa is actively involved in music and leadership, having served in various leadership roles within his university choir and musicians’ community. He is passionate about continuous learning, service, and using his skills to make a meaningful impact in healthcare and society.'
  },
  {
    name: 'Glory Omomobi',
    role: 'Program Director'
  },
  {
    name: 'ToriOluwa Damaris Olaniyi-George',
    role: 'Creativity, Content & Continuity Director'
  },
  {
    name: 'Mrs Joanah Ibilola',
    role: 'Matron/Patron'
  },
  {
    name: 'Dr Ikeoluwapo Moody',
    role: 'Medical Adviser'
  },
  {
    name: 'Opeoluwa Taylor',
    role: 'Chair of Damaris Foundation International Chapter'
  }
];

const teamGrid = document.getElementById('teamGrid');

if (teamGrid) {

  team.slice(1).forEach((person, index) => {

    const card = document.createElement('article');
    card.className = 'team-card reveal';

    const visual = person.img
      ? `<img src="${person.img}" alt="${person.name}" loading="lazy">`
      : `<div class="team-placeholder">
           <span>${person.name.split(' ').map(x => x[0]).slice(0, 2).join('')}</span>
         </div>`;

    card.innerHTML = `
      ${visual}

      <div class="team-card-info">
        <h3>${person.name}</h3>
        <p>${person.role}</p>

        ${
          person.bio
            ? '<button class="bio-link" type="button">View biography <span>↗</span></button>'
            : ''
        }
      </div>
    `;

    if (person.bio) {
      const bioButton = card.querySelector('.bio-link');

      if (bioButton) {
        bioButton.addEventListener('click', e => {
          e.stopPropagation();
          openTeam({
            ...person,
            index: index + 1
          });
        });
      }
    }

    teamGrid.appendChild(card);
  });
}


/* =========================
   TEAM MODAL
========================= */

const modal = document.getElementById('teamModal');

function openTeam(person) {

  if (!modal) return;

  const modalName = document.getElementById('modalName');
  const modalRole = document.getElementById('modalRole');
  const modalBio = document.getElementById('modalBio');
  const modalImage = document.getElementById('modalImage');

  if (modalName) modalName.textContent = person.name;
  if (modalRole) modalRole.textContent = person.role;

  if (modalBio) {
    modalBio.textContent = person.bio || '';
    modalBio.style.display = person.bio ? 'block' : 'none';
  }

  if (modalImage) {

    if (person.img) {
      modalImage.src = person.img;
      modalImage.alt = person.name;
      modalImage.style.display = 'block';
    } else {
      modalImage.removeAttribute('src');
      modalImage.style.display = 'none';
    }
  }

  modal.classList.add('open');
  modal.setAttribute('aria-hidden', 'false');
  document.body.classList.add('modal-open');
}


function closeModal() {

  if (!modal) return;

  modal.classList.remove('open');
  modal.setAttribute('aria-hidden', 'true');
  document.body.classList.remove('modal-open');
}


const modalClose = document.querySelector('.modal-close');
const modalBackdrop = document.querySelector('.modal-backdrop');

if (modalClose) {
  modalClose.addEventListener('click', closeModal);
}

if (modalBackdrop) {
  modalBackdrop.addEventListener('click', closeModal);
}

document.addEventListener('keydown', e => {

  if (e.key === 'Escape') {
    closeModal();
  }

});


/* =========================
   MOBILE MENU
========================= */

const toggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('.nav');

if (toggle && nav) {

  toggle.addEventListener('click', () => {

    const open = nav.classList.toggle('open');

    toggle.setAttribute('aria-expanded', open);

  });

  nav.querySelectorAll('a').forEach(a => {

    a.addEventListener('click', () => {

      nav.classList.remove('open');
      toggle.setAttribute('aria-expanded', 'false');

    });

  });

}


/* =========================
   SCROLL UI
========================= */

const header = document.querySelector('.site-header');
const progress = document.getElementById('progress');

function scrollUI() {

  const y = window.scrollY;

  if (header) {
    header.classList.toggle('scrolled', y > 30);
  }

  if (progress) {

    const h = document.documentElement.scrollHeight - window.innerHeight;

    progress.style.width =
      (h ? Math.min(100, (y / h) * 100) : 0) + '%';
  }
}

window.addEventListener('scroll', scrollUI, {
  passive: true
});

scrollUI();


/* =========================
   REVEAL ANIMATIONS
========================= */

if ('IntersectionObserver' in window) {

  const observer = new IntersectionObserver(
    entries => {

      entries.forEach(entry => {

        if (entry.isIntersecting) {

          entry.target.classList.add('visible');

          observer.unobserve(entry.target);
        }

      });

    },
    {
      threshold: 0.12
    }
  );

  document.querySelectorAll('.reveal').forEach(el => {
    observer.observe(el);
  });

} else {

  document.querySelectorAll('.reveal').forEach(el => {
    el.classList.add('visible');
  });

}


/* =========================
   CURSOR GLOW
========================= */

const glow = document.getElementById('cursorGlow');

if (
  glow &&
  window.matchMedia('(pointer:fine)').matches
) {

  window.addEventListener('pointermove', e => {

    glow.style.left = e.clientX + 'px';
    glow.style.top = e.clientY + 'px';

  });

}


/* =========================
   MAGNETIC BUTTONS
========================= */

document.querySelectorAll('.magnetic').forEach(el => {

  el.addEventListener('pointermove', e => {

    const r = el.getBoundingClientRect();

    const x =
      (e.clientX - r.left - r.width / 2) * 0.08;

    const y =
      (e.clientY - r.top - r.height / 2) * 0.08;

    el.style.transform = `translate(${x}px, ${y}px)`;

  });

  el.addEventListener('pointerleave', () => {

    el.style.transform = '';

  });

});


/* =========================
   FOOTER YEAR
========================= */

const year = document.getElementById('year');

if (year) {
  year.textContent = new Date().getFullYear();
}


/* =========================
   WELCOME SCREEN
========================= */

document.addEventListener('DOMContentLoaded', function () {

  const welcomeScreen = document.getElementById('welcomeScreen');
  const welcomeEnter = document.getElementById('welcomeEnter');

  if (!welcomeScreen || !welcomeEnter) {
    return;
  }

  welcomeEnter.addEventListener('click', function () {

    welcomeScreen.classList.add('hide');

    setTimeout(function () {
      welcomeScreen.remove();
    }, 900);

  });

});

