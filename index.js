// Mobile Nav Toggle
const mobileBtn = document.querySelector(".mobile-toggle-btn");
const headerNav = document.querySelector(".header");
const navLink = document.querySelectorAll(".link-nav");

mobileBtn.addEventListener("click", () => {
  headerNav.classList.toggle("active");
  profilePic.classList.toggle("hide-profile");
});

[].forEach.call(navLink, (element) => {
  element.onclick = () => {
    headerNav.classList.remove("active");
  };
});

// Implement Dynamic Functionality for cards and modal
document.addEventListener("DOMContentLoaded", () => {
  const modal = document.getElementById("myModal");
  const gridItems = document.getElementById("grid");

  // Create a new object
  const mainCardDetails = {
    title: 'Multi-Post Stories',
    desc: `A daily selection of privately personalized reads; no accounts or
    sign-ups required. has been the industry's standard dummy text
    ever since the 1500s, when an unknown printer took a standard
    dummy text.`,
    languages: ['css', 'html', 'bootstrap', 'Ruby'],
    live: "",
    source: "",
    img: 'imgs/img-placeholder-fw.png',
  };

  const {
    title, desc, languages, live, source, img,
  } = mainCardDetails;
  // Get all data from languages array in side mainCardDetails object
  const languagesArr = languages
    .map((language) => `<li>${language}</li>`)
    .join("");

  // Add dynamic data in main card
  let mainCardData = "";
  mainCardData += `
                  <h1 class='work-main-heading'>My Recent Works</h1>
                  <hr class='divider' />
                  <div class='main-card' id='main'>
                    <img src=${img} class='post-image'/>
                    <div class='main-card-content'>
                      <h4 class='work-title-post'>${title}</h4>
                      <p class='work-supporting-text'>
                      ${desc.slice(0, 100)} ...
                      </p>
                      <ul class='languages-list'>
                        ${languagesArr}
                      </ul>
                      <div class='btn-left'>
                        <button class='btn-primary btn' onclick='mainModal()'>See Project</button>
                      </div>
                    </div>
                  </div>
  `;

  // Create new array of objects
  const cardDetails = [
    {
      id: 1,
      title: 'Profesional Art Printing Data',
      desc: `A daily selection of privately personalized reads; no accounts or
      sign-ups required. has been the industry's standard dummy text
      ever since the 1500s, when an unknown printer took a standard
      dummy text.`,
      languages: ['html', 'bootstrap', 'Ruby'],
      live: '',
      source: "",
      img: './imgs/placeholder-img.png',
    },
    {
      id: 2,
      title: 'Profesional Art Printing Data',
      desc: `A daily selection of privately personalized reads; no accounts or
      sign-ups required. has been the industry's standard.`,
      languages: ['html', 'javascript', 'css'],
      live: "",
      source: "",
      img: './imgs/placeholder-img.png',
    },
    {
      id: 3,
      title: 'Website Protfolio',
      desc: `A daily selection of privately personalized reads; no accounts or
      sign-ups required. has been the industry's standard.`,
      languages: ['html', 'javascript', 'Ruby'],
      live: "",
      source: "",
      img: './imgs/placeholder-img.png',
    },
    {
      id: 4,
      title: 'Profesional Art Data Printing',
      desc: `A daily selection of privately personalized reads; no accounts or
      sign-ups required. has been the industry's standard.`,
      languages: ['html', 'css', 'Ruby'],
      live: "",
      source: "",
      img: './imgs/placeholder-img.png',
    },
    {
      id: 5,
      title: 'Healthcare Data Dashboard',
      desc: `A daily selection of privately personalized reads; no accounts or
      sign-ups required. has been the industry's standard.`,
      languages: ['html', 'javascript', 'bootstrap'],
      live: "",
      source: "",
      img: './imgs/placeholder-img.png',
    },
    {
      id: 6,
      title: "My Website Portfolio",
      desc: `A daily selection of privately personalized reads; no accounts or
      sign-ups required. has been the industry's standard.`,
      languages: ['html', 'css', 'bootstrap', 'Ruby'],
      live: "",
      source: "",
      img: './imgs/placeholder-img.png',
    },
  ];

  // Fetch all cards details from cardsDetails array of objects
  let cardData = "";
  cardDetails.map((card) => {
    const {
      id, img, title, desc, languages,
    } = card;
    // Fetch languages array from a languages object
    const languagesArr = languages.map((lang) => `<li>${lang}</li>`).join("");
    // Add dynamic in other cards
    cardData += `
                <div class='card-desktop' id='card-image-${id}'>
                  <img src='${img}' alt='card image' />
                  <div class='card-info'>
                    <h1 class='card-heading'>${title}</h1>
                    <p class='card-text'>${desc.slice(0, 100)} ...</p>
                    <ul class='card-languages-list'>
                      ${languagesArr}
                    </ul>
                    <button
                      class='btn-block btn-primary btn-hidden'
                      onclick='otherModal(${id})'
                    >
                      See Project
                    </button>
                  </div>
                </div>
                <div class='card'>
                  <img src='${img}' alt='card image' />
                  <div class='card-info'>
                    <h1 class='card-heading'>${title}</h1>
                    <p class='card-text'>${desc.slice(0, 100)} ...</p>
                    <ul class='card-languages-list'>
                      ${languagesArr}
                    </ul>
                    <button
                      class='btn-block btn-primary btn'
                      onclick='otherModal(${id})'
                    >
                      See Project
                    </button>
                  </div>
                </div>
    `;
    return cardData;
  });

  // Show all data in main and other cards
  gridItems.innerHTML = mainCardData + cardData;

  // Add dynamic modal for main cards data
  mainModal = () => {
    let modalDetails = "";
    modalDetails += `
                    <div class='modal'>
                      <div class='modal-header'>
                        <h1>${title}</h1>
                        <ion-icon name='close' class='modal-close-icon'></ion-icon>
                      </div>
                      <ul class='modal-languages-list'>
                        ${languages.map((lang) => `<li>${lang}</li>`).join("")}
                      </ul>
                      <div class='modal-content'>
                        <div class='modal-image-mobile'>
                          <img src='${img}' alt='modal image' />
                        </div>
                        <div class='modal-image-desktop'>
                          <img src='${img}' alt='modal image' />
                        </div>
                        <p class='title'>${desc}</p>
                      </div>
                      <div class='buttons'>
                        <a href='${live}' class='btn-primary' target='_blank'>
                          See Live
                          <span>
                            <img  src='./assets/images/Icon-Export.svg'
                                  alt='live-icon'
                                  class='icon-right'
                                  height='18'/>
                            </span>
                        </a>
                        <a href='${source}' class='btn-primary' target='_blank'>
                          See Source
                          <span>
                          <img  src='./assets/images/Icon-GitHub.svg'
                                alt='live-icon'
                                class='icon-right'
                                height='18'/>
                          </span>
                        </a>
                      </div>
                    </div>
  `;

    // Show Data in modal
    modal.innerHTML = modalDetails;

    // Open modal
    modal.style.display = "block";

    // Close modal
    const closeModal = document.getElementsByClassName("modal-close-icon")[0];
    closeModal.addEventListener("click", () => {
      modal.style.display = "none";
    });
  };

  // Add dynamic modal details for other cards
  otherModal = (id) => {
    const data = cardDetails.find((card) => card.id === id);
    let modalData = "";
    modalData += `
                  <div class='modal'>
                    <div class='modal-header'>
                      <h1>${data.title}</h1>
                      <ion-icon name='close' class='modal-close-icon'></ion-icon>
                    </div>
                    <ul class='modal-languages-list'>
                      ${data.languages
    .map((lang) => `<li>${lang}</li>`)
    .join("")}
                    </ul>
                    <div class='modal-content'>
                      <div class='modal-image-mobile'>
                        <img src='${data.img}' alt='modal image' />
                      </div>
                      <div class='modal-image-desktop'>
                        <img src='${data.img}' alt='modal image' />
                      </div>
                      <p class='title'>${data.desc}</p>
                    </div>
                    <div class='buttons'>
                      <a href='${
  data.live
}' class='btn-primary' target='_blank'>
                          See Live
                          <span>
                            <img  src='./assets/images/Icon-Export.svg'
                                alt='live-icon'
                                class='icon-right'
                                height='18'/>
                          </span>
                      </a>
                      <a href='${
  data.source
}' class='btn-primary' target='_blank'>
                        See Source
                        <span>
                          <img  src='./assets/images/Icon-GitHub.svg'
                              alt='live-icon'
                              class='icon-right'
                              height='18'/>
                        </span>
                      </a>
                    </div>
                  </div>
    `;

    // Show Data in modal
    modal.innerHTML = modalData;

    // Open modal
    modal.style.display = "block";

    // Close modal
    const closeModal = document.getElementsByClassName("modal-close-icon")[0];
    closeModal.addEventListener("click", () => {
      modal.style.display = "none";
    });
  };

  // When user clicks out side of the modal, close the modal.
  document.onclick = (e) => {
    if (e.target === modal) {
      modal.style.display = "none";
    }
  };

  new Typed(".auto-change", {
    strings: [
      "Web Developer",
      "Full Stack Developer",
    ],
    typeSpeed: 80,
    backSpeed: 80,
    loop: true,
  });
});

// Form Validation
const email = document.getElementById("email");
const submit = document.getElementById("submit");
const alert = document.getElementById("alert-danger");

const submitForm = (e) => {
  const regex = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/;
  const str = email.value;
  if (str === str.toLowerCase()) {
    if (regex.test(str)) {
      alert.classList.remove("show-alert");
    } else {
      e.preventDefault();
      alert.classList.add("show-alert");
      alert.innerHTML = `
          <span>
            <ion-icon name="close-circle" class="alert-icon"></ion-icon>
          </span>
          You enter invalid email address!
    `;
    }
  } else {
    e.preventDefault();
    alert.classList.add("show-alert");
    alert.innerHTML = `
          <span>
            <ion-icon name="close-circle" class="alert-icon"></ion-icon>
          </span>
          Please enter lowercase letters.
    `;
  }
  setTimeout(() => {
    alert.classList.remove("show-alert");
  }, 2000);
};

submit.addEventListener("click", submitForm);

// Store data in localStorage
const fullName = document.getElementById("fullName");
const message = document.getElementById("message");
const reset = document.getElementById("reset");

changeHandler = () => {
  const field = {
    name: fullName.value,
    email: email.value,
    message: message.value,
  };
  localStorage.setItem("user", JSON.stringify(field));
};

if (localStorage.getItem("user") === null) {
  email.value = "";
  fullName.value = "";
  message.value = "";
} else {
  const user = JSON.parse(localStorage.getItem("user"));
  email.value = user.email;
  fullName.value = user.name;
  message.value = user.message;
}

const resetFrom = (e) => {
  e.preventDefault();
  email.value = "";
  fullName.value = "";
  message.value = "";
  localStorage.removeItem("user");
};

reset.addEventListener("click", resetFrom);
