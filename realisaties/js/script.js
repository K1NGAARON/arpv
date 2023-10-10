function changeReviews() {
    const reviews = [
        {
            name: 'Kim',
            review: 'Ik ben super tevreden over hoe Thomas mijn 2 bovenverdiepingen heeft gerenoveerd. Hij denkt mee over mogelijke oplossingen, hij levert kwaliteit en de communicatie liep altijd vlot. Sowieso zal hij de rest van mijn huis in de toekomst mogen aanpakken!!',
        },
        {
            name: 'Gery',
            review: 'Samenwerken met ARPV was super! De firma heeft onze zolder geïsoleerd en afgewerkt tot een mooie relaxruimte. Tevens heeft hij onze verwarming nagezien en verbeterd en de regenwatervoorziening aangepast. Er was hierbij steeds een vlotte communicatie en een duidelijke en correcte prijsofferte en prijssetting. De afgesproken timing werd gevolgd. Ook de afwerking is prima. Thomas gaf goede suggesties, steeds met aandacht voor kwaliteit én prijsbewust. Hij was heel betrokken bij ons hele project. En op en top vriendelijk!',
        },
        {
            name: 'Yoshi',
            review: 'Wij werkten samen met ARPV voor een totaalrenovatie van onze woning. Vanaf de ruwbouw tot de afwerking van de ruimtes werden alle werken met veel verantwoordelijkheid en oog voor detail uitgevoerd. Naast de werken zelf konden we ook steeds terecht bij ARPV voor vragen of goede ideeën omtrent afwerking en opbouw. Kortom een aannemer die mee helpt werken en denken aan het eindresultaat. 1000x bedankt voor wat je ons gezin gegeven hebt :) Geen vaarwel, maar een tot ziens!',
        },
        {
            name: 'Nena',
            review: "Super tevreden van de samenwerking met ARPV! Thomas is heel professioneel en heeft prachtig werk afgeleverd met zijn team."
        },
        {
            name: 'Carol',
            review: "Super tevreden van de uitgevoerde werken (zolder 1), van een gewone zolderruimte naar een prachtige badkamer van A tot Z.. Super goeie service, gebruik van zeer degelijke materialen, alles zeer nauwkeurig afgewerkt met het nodige respect uitgevoerd. Zeker een aanrader voor iedereen!! Zeer tevreden! Top Firma !"
        },
        {
            name: 'Liesa',
            review: "Wij werkten met ARPV samen voor een totaalrenovatie. In 7 maanden heeft Thomas ervoor gezorgd dat ons huis er uit zag als een nieuwbouw. Wij zijn heel tevreden over het resultaat en zouden ARPV zeker nog contacteren🙂. Hij deed steeds zijn best om de beste en betaalbaarste optie te voorzien. Als je het mij vraagt. Voor een renovatie groot of klein moet je bij ARPV zijn🙂."
        }
    ];

    $('.dot').removeClass('active');
    $(this).addClass('active');

    const dotIndex = $('.dot').index(this);
    const reviewContainer = $('.review-wrapper');

    reviewContainer.find('.review-author').text(reviews[dotIndex].name);
    reviewContainer.find('.review-body').text(reviews[dotIndex].review);
};

function addProjects(e) {
    const projects = [
        {
            title: "Totaalproject",
            img: "/realisaties/liesa/img/banner.jpg",
            link: "/realisaties/liesa/",
        },
        {
            title: "Maatwerk & Binnendeuren",
            img: "/realisaties/maatwerk-binnendeuren/img/banner.jpg",
            link: "/realisaties/maatwerk-binnendeuren/",
        },
        {
            title: "Badkamer Renovatie",
            img: "/realisaties/daya/img/banner.jpg",
            link: "/realisaties/daya/",
        },
        {
            title: "Badkamer Renovatie",
            img: "/realisaties/hannes/img/banner.jpg",
            link: "/realisaties/hannes/",
        },
        {
            title: "Badkamer Renovatie",
            img: "/realisaties/jurgen/img/banner.jpg",
            link: "/realisaties/jurgen/",
        },
        {
            title: "Totaalproject",
            img: "/realisaties/justine/img/banner.jpg",
            link: "/realisaties/justine/",
        },
        {
            title: "Badkamer Renovatie",
            img: "/realisaties/kim/img/banner.jpg",
            link: "/realisaties/kim/",
        },
        {
            title: "Totaalproject",
            img: "/realisaties/kimberly/img/banner.jpg",
            link: "/realisaties/kimberly/",
        },
        {
            title: "Totaalproject",
            img: "/realisaties/sarah/img/banner.jpg",
            link: "/realisaties/sarah/",
        },
        {
            title: "Totaalproject",
            img: "/realisaties/yoshi/img/banner.jpg",
            link: "/realisaties/yoshi/",
        },
        // {
        //     title: "",
        //     img: "",
        //     link: "",
        // },
        // {
        //     title: "",
        //     img: "",
        //     link: "",
        // },
    ];

    const target = document.querySelector('#gallery-wrapper');

    if (!target) {
        return;
    }

    const cards = projects.map(item => {

        return `
            <a href="${item.link}" class="item-link">
                <div class="item">
                    <img src="${item.img}" alt="${item.title}">
                    <div class="content">
                        <h3>
                            ${item.title}
                        </h3>
                        <p class="read-more">
                            Lees meer
                        </p>
                    </div>
                    <div class="overlay"></div>
                </div>
            </a>
        `;
    }).join('');

    target.innerHTML = cards;
};

function disableScroll() {
    document.body.style.overflow = "hidden";
}

function enableScroll() {
    document.body.style.overflow = "auto";
}

function openImageModal(event) {
    const modalContainer = document.createElement("div");
    modalContainer.className = "modal";
    
    const modalContent = document.createElement("div");
    modalContent.className = "modal-content";
    
    const closeBtn = document.createElement("span");
    closeBtn.className = "close";
    closeBtn.innerHTML = "&times;";
    
    const modalImage = document.createElement("img");
    modalImage.src = event.target.src;
    modalImage.alt = "Image";

    // Append elements to the modal container
    modalContent.appendChild(closeBtn);
    modalContent.appendChild(modalImage);
    modalContainer.appendChild(modalContent);

    // Create and append the overlay
    const overlay = document.createElement("div");
    overlay.className = "modal-overlay";
    document.body.appendChild(overlay);

    // Append the modal container to the body
    document.body.appendChild(modalContainer);

    // Display the modal and overlay
    modalContainer.style.display = "block";
    overlay.style.display = "block";

    // disableScroll();

    // Close the modal and overlay when the close button is clicked
    closeBtn.addEventListener("click", () => {
        modalContainer.style.display = "none";
        overlay.style.display = "none";

        // Remove the modal container and overlay from the DOM when closed
        document.body.removeChild(modalContainer);
        document.body.removeChild(overlay);
        // enableScroll();
    });

    // Close the modal and overlay if the user clicks outside of it
    overlay.addEventListener("click", () => {
        modalContainer.style.display = "none";
        overlay.style.display = "none";

        // Remove the modal container and overlay from the DOM when closed
        document.body.removeChild(modalContainer);
        document.body.removeChild(overlay);
    });
}

// Get all images with the class "pop-up"
const popUpImages = document.querySelectorAll(".pop-up");

// Add click event listeners to each "pop-up" image
popUpImages.forEach((image) => {
    image.addEventListener("click", openImageModal);
});



$(document).ready(addProjects);
$('.dot').click(changeReviews);