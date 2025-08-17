(function ($) {
  $(window).on('load hashchange', function () {
    $('.content-region').hide();
    $('.main-menu a').removeClass('active');

    var region = location.hash.toString() || $('.main-menu a:first').attr('href');
    $(region).show();
    $('.main-menu a[href="' + region + '"]').addClass('active');
  });

  // Project selection functionality
  $(document).ready(function() {
    const projectData = {
      'portfolio-website': {
        title: 'Portfolio Website',
        description: 'A modern, responsive personal portfolio website showcasing my programming skills and projects. Built with clean, semantic HTML, advanced CSS animations, and interactive JavaScript features.',
        image: 'assets/rascal.jpg',
        features: [
          'Responsive design that works on all devices',
          'Interactive card-based project showcase',
          'Smooth animations and hover effects',
          'Modern glass-morphism design elements',
          'Optimized for performance and accessibility'
        ],
        technologies: ['HTML5', 'CSS3', 'JavaScript', 'jQuery', 'Responsive Design', 'CSS Grid', 'Flexbox'],
        github: 'https://github.com/yourusername/portfolio',
        liveDemo: 'https://yourportfolio.com'
      },
      'mobile-app': {
        title: 'Task Manager App',
        description: 'A cross-platform mobile application designed to help users organize their daily tasks and increase productivity. Features include task categorization, reminders, progress tracking, and data synchronization.',
        image: 'assets/rascal.jpg',
        features: [
          'Cross-platform compatibility (iOS & Android)',
          'Offline functionality with local storage',
          'Push notifications for task reminders',
          'Data backup and cloud synchronization',
          'Intuitive user interface with dark mode'
        ],
        technologies: ['React Native', 'JavaScript', 'Firebase', 'Redux', 'AsyncStorage', 'Push Notifications'],
        github: 'https://github.com/yourusername/task-manager',
        liveDemo: 'https://taskmanager.app'
      },
      'data-analysis': {
        title: 'Sales Analytics Dashboard',
        description: 'An interactive business intelligence dashboard that provides real-time insights into sales performance, customer behavior, and market trends. Features advanced data visualization and predictive analytics.',
        image: 'assets/rascal.jpg',
        features: [
          'Real-time data processing and visualization',
          'Interactive charts and graphs',
          'Predictive analytics and forecasting',
          'Customizable reporting and filters',
          'Export functionality for reports'
        ],
        technologies: ['Python', 'Pandas', 'NumPy', 'Plotly', 'Dash', 'SQL', 'Machine Learning'],
        github: 'https://github.com/yourusername/sales-dashboard',
        liveDemo: 'https://sales-dashboard.com'
      },
      'game-project': {
        title: '2D Platformer Game',
        description: 'An educational 2D platformer game designed to teach programming concepts through interactive gameplay. Players solve coding challenges while navigating through various levels and obstacles.',
        image: 'assets/rascal.jpg',
        features: [
          'Multiple levels with increasing difficulty',
          'Interactive programming challenges',
          'Physics-based gameplay mechanics',
          'Character customization options',
          'Progress tracking and achievements'
        ],
        technologies: ['Unity', 'C#', 'Game Design', '2D Graphics', 'Physics Engine', 'UI/UX Design'],
        github: 'https://github.com/yourusername/platformer-game',
        liveDemo: 'https://platformer-game.com'
      }
    };

    // Card click handler
    $('.card').on('click', function() {
      const project = $(this).data('project');
      const data = projectData[project];
      
      if (data) {
        $('#selected-project').text(data.title);
        
        let content = `
          <div class="project-header">
            <div class="project-image">
              <img src="${data.image}" alt="${data.title}" onerror="this.style.display='none'">
            </div>
            <div class="project-info">
              <h4>Project Description</h4>
              <p>${data.description}</p>
            </div>
          </div>
          
          <h4>Key Features</h4>
          <ul>`;
        
        data.features.forEach(feature => {
          content += `<li>${feature}</li>`;
        });
        
        content += `</ul>
          
          <h4>Technologies Used</h4>
          <div class="tech-tags">`;
        
        data.technologies.forEach(tech => {
          content += `<span class="tech-tag">${tech}</span>`;
        });
        
        content += `</div>
          
          <div class="project-links">
            <a href="${data.github}" target="_blank" class="project-link github">View on GitHub</a>
            <a href="${data.liveDemo}" target="_blank" class="project-link demo">Live Demo</a>
          </div>`;
        
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