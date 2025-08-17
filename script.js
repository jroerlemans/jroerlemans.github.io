// Existing: section routing via URL hash
(function ($) {
  $(window).on('load hashchange', function () {
    $('.content-region').hide();
    $('.main-menu a').removeClass('active');

    var region = location.hash.toString() || $('.main-menu a:first').attr('href');
    $(region).show();
    $('.main-menu a[href="' + region + '"]').addClass('active');
  });

  // === NEW: Projects modal ===
  function openModal(payload) {
    $('#modal-title').text(payload.title || '');
    $('#modal-description').text(payload.description || '');
    $('#modal-tech').text(payload.tech || '');
    $('#modal-link').attr('href', payload.link || '#');
    if (payload.image) {
      $('#modal-media').css('background-image', "url('" + payload.image + "')");
    } else {
      $('#modal-media').css('background-image', 'none');
    }
    $('#project-modal').attr('aria-hidden', 'false');
    $('body').addClass('no-scroll');
  }

  function closeModal() {
    $('#project-modal').attr('aria-hidden', 'true');
    $('body').removeClass('no-scroll');
  }

  // Click a card → open
  $(document).on('click', '.project-card', function () {
    var $el = $(this);
    openModal({
      title: $el.data('title'),
      description: $el.data('description'),
      tech: $el.data('tech'),
      link: $el.data('link'),
      image: $el.data('image')
    });
  });

  // Close on backdrop / button / ESC
  $(document).on('click', '[data-close]', closeModal);
  $(document).on('keydown', function (e) {
    if (e.key === 'Escape') closeModal();
  });

})(jQuery);