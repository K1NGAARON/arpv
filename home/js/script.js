function changeReviews() {
    const reviews = [
        {
            name: 'Karen',
            review: 'Al verschillende keren beroep gedaan op ARPV voor werken in ons huis. Binnen deuren, hulp bij parket, afwerking trap, stalen deur, ... Altijd prijs/kwaliteit tiptop in orde.',
        },
        {
            name: 'Bert',
            review: 'Thomas & team hebben ons snel en professioneel geholpen bij het plaatsen van een valse wand met binnendeur. De werken werden tijdig en kwalitatief uitgevoerd.',
        },
        {
            name: 'Christine',
            review: 'Top service, top afwerking, heel tevreden over. Binnendeuren laten plaatsen en verandering van ingang. Kwaliteitsvol voor eerlijke prijs. Wij zullen zeker nog werken laten uitvoeren door dit bedrijf. Aanrader.',
        }
    ];

    $('.dot').removeClass('active');
    $(this).addClass('active');

    const dotIndex = $('.dot').index(this);
    const reviewContainer = $('.review-wrapper');

    reviewContainer.find('.review-author').text(reviews[dotIndex].name);
    reviewContainer.find('.review-body').text(reviews[dotIndex].review);
};

$('.dot').click(changeReviews);