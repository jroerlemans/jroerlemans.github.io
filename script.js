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
      'dark-web-crawler': {
        title: 'Dark Web Crawler',
        description: 'SAM is a dark web crawler. A user of SAM can train a certain forum, inserting search queries, thread listings and other webpage features such that SAM understands the forums structure.'
        + 'Based on that structure, SAM can crawl the forum and extract data from the pages. Based on that data, the forum can be reconstructed and manually flagged for illegal content, such as ',
        image: 'assets/SAM-det.png',
        features: [
          'Automated web crawling and data extraction',
          'Advanced filtering and search capabilities',
          'Data storage in MongoDB database',
          'Security-focused monitoring features',
          'Automated reporting and alerts'
        ],
        technologies: ['Python', 'MongoDB', 'JavaScript', 'Security', 'Forum Crawling'],
        github: '', // No GitHub link for this project
        liveDemo: '', // No demo link for this project
        downloadReport: 'assets/reports/sam.pdf' // PDF report available
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
        liveDemo: 'https://taskmanager.app',
        downloadReport: '' // No report available
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
        liveDemo: 'https://sales-dashboard.com',
        downloadReport: 'assets/reports/sales-analytics-report.pdf' // PDF report available
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
        liveDemo: '', // No demo link for this project
        downloadReport: '' // No report available
      }
    };

    // Card click handler
    $('.card').on('click', function() {
      console.log('Card clicked!');
      const project = $(this).data('project');
      console.log('Project:', project);
      const data = projectData[project];
      console.log('Project data:', data);
      
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
          
          <div class="project-links">`;
        
        // Only show GitHub button if URL is provided and not empty
        if (data.github && data.github.trim() !== '') {
          content += `<a href="${data.github}" target="_blank" class="project-link github">View on GitHub</a>`;
        }
        
        // Only show Live Demo button if URL is provided and not empty
        if (data.liveDemo && data.liveDemo.trim() !== '') {
          content += `<a href="${data.liveDemo}" target="_blank" class="project-link demo">Live Demo</a>`;
        }
        
        // Only show Download Report button if PDF is provided and not empty
        if (data.downloadReport && data.downloadReport.trim() !== '') {
          content += `<a href="${data.downloadReport}" download class="project-link report">Download Report</a>`;
        }
        
        content += `</div>`;
        
        $('#details-content').html(content);
        $('#project-details').addClass('show');
        console.log('Added show class to project-details');
        
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