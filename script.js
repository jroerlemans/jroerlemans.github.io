(function ($) {
  $(window).on('load hashchange', function () {
    $('.content-region').hide();
    $('.main-menu a').removeClass('active');

    var region = location.hash.toString() || $('.main-menu a:first').attr('href');
    $(region).show();
    $('.main-menu a[href="' + region + '"]').addClass('active');
  });

  // Card selection functionality
  $(document).ready(function() {
    const projectData = {
      'web-development': {
        title: 'Web Development',
        description: 'Frontend and backend web applications built with modern technologies.',
        projects: [
          'Responsive portfolio websites',
          'E-commerce platforms',
          'Web APIs and microservices',
          'Progressive Web Apps (PWAs)'
        ],
        technologies: ['HTML5', 'CSS3', 'JavaScript', 'React', 'Node.js', 'Python', 'Django']
      },
      'mobile-apps': {
        title: 'Mobile Apps',
        description: 'Native and cross-platform mobile applications for iOS and Android.',
        projects: [
          'Cross-platform apps with React Native',
          'Native iOS development with Swift',
          'Android apps with Kotlin',
          'Hybrid apps with Flutter'
        ],
        technologies: ['React Native', 'Swift', 'Kotlin', 'Flutter', 'Firebase', 'REST APIs']
      },
      'data-science': {
        title: 'Data Science',
        description: 'Machine learning, data analysis, and predictive modeling projects.',
        projects: [
          'Predictive analytics models',
          'Natural language processing',
          'Computer vision applications',
          'Data visualization dashboards'
        ],
        technologies: ['Python', 'TensorFlow', 'Pandas', 'NumPy', 'Scikit-learn', 'Jupyter']
      },
      'game-development': {
        title: 'Game Development',
        description: 'Interactive games and simulations using modern game engines.',
        projects: [
          '2D platformer games',
          '3D adventure games',
          'Educational simulations',
          'VR/AR experiences'
        ],
        technologies: ['Unity', 'Unreal Engine', 'C#', 'C++', 'Blender', 'Game Design']
      }
    };

    // Card click handler
    $('.card').on('click', function() {
      const category = $(this).data('category');
      const data = projectData[category];
      
      if (data) {
        $('#selected-category').text(data.title);
        
        let content = `<p>${data.description}</p>`;
        content += '<h4>Sample Projects:</h4><ul>';
        data.projects.forEach(project => {
          content += `<li>${project}</li>`;
        });
        content += '</ul>';
        
        content += '<h4>Technologies Used:</h4><div class="tech-tags">';
        data.technologies.forEach(tech => {
          content += `<span class="tech-tag">${tech}</span>`;
        });
        content += '</div>';
        
        $('#details-content').html(content);
        $('#project-details').addClass('show');
        
        // Smooth scroll to details
        $('html, body').animate({
          scrollTop: $('#project-details').offset().top - 20
        }, 500);
      }
    });

    // Close details handler
    $('#close-details').on('click', function() {
      $('#project-details').removeClass('show');
    });

    // Close details when clicking outside
    $(document).on('click', function(e) {
      if (!$(e.target).closest('#project-details, .card').length) {
        $('#project-details').removeClass('show');
      }
    });

    // Keyboard navigation
    $(document).on('keydown', function(e) {
      if (e.key === 'Escape') {
        $('#project-details').removeClass('show');
      }
    });
  });
})(jQuery);