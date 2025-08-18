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
        + 'Based on that structure, SAM can crawl the forum and extract data from the pages. Based on that data, the forum can be reconstructed and manually flagged for illegal content, such as '
        + 'credit card fraud, identity theft, illegal trading, etc. Obviously, forums containing sensitive data want to avoid bots crawling their pages. SAM is made to mimmick a human user, and bypass bot detection using CAPTCHA'
        + 'solving and human-like mouse movements. SAM is still used by the University today. Due to the sensitivity of the project, no GitHub page or Demo can be featured, but for more in-depth there is a report to be downloaded.',
        image: 'assets/SAM-det.png',
        features: [
          'Automated web crawling and data extraction',
          'Advanced filtering and search capabilities',
          'Data storage in MongoDB database',
          'Security-focused monitoring features',
          'CAPTCHA solving'
        ],
        technologies: ['Python', 'MongoDB', 'JavaScript', 'Security', 'Forum Crawling', 'TOR'],
        github: '', // No GitHub link for this project
        liveDemo: '', // No demo link for this project
        downloadReport: 'assets/reports/sam.pdf' // PDF report available
      },
      'fluid-simulation': {
        title: 'Fluid Simulation',
        description: 'This project features fluid dynamics simulated in a C++ program. By running the simulation, a user can modify parameters during runtime. Flow can be added to the fluid and interacted with. Object collision is '
        + 'introduced where fluid flow is obstructed by addition of objects. Similarly these objects are two-way coupled, having them move based on average flow on the object. Temperature, vorticity, viscosity, diffusion and bouyance are all '
        + 'adjustable during runtime allowing for some cool interactions. Information on the math is in the report and all features are explained in the demo.',
        image: 'assets/fluid-det.png',
        features: [
          'Physics based simulation',
          'C/C++ based program',
          'Fluid to object and object to fluid interactions',
          'Interaction during runtime'
        ],
        technologies: ['C', 'C++', 'Physics', 'GLUT'],
        github: 'https://github.com/jroerlemans/Fluid-Simulation',
        liveDemo: 'https://drive.google.com/file/d/1b57gsJEGunXQp7qHX033io4D6CX2P-cG/view?usp=sharing',
        downloadReport: 'assets/reports/fluid.pdf' // No report available
      },
      'stratego': {
        title: 'Stratego - Graphics & AI',
        description: 'Stratego is a known chess-like game featuring strength based interaction between units. The ultimate goal is to find the opposing teams flag. Unlike chess, opposing units identity is hidden until interacted with by your own pieces. '
        + 'In this Java-based program, the games mechanics and features are built from scratch. Computer graphic strategies are used to make 3D visualizations of the different pieces and a neural network is made to predict the next best move for the current data. '
        + '',
        image: 'assets/stratego-det.png',
        features: [
          'Stratego game design',
          'Monte-Carlo Tree neural network',
          'Computer Graphics to model unit types',
          'Best next move prediction'
        ],
        technologies: ['Java', 'Computer Graphics', 'Neural Network', '3D modeling'],
        github: 'https://github.com/jroerlemans/Stratego',
        liveDemo: '',
        downloadReport: 'assets/reports/stratego.pdf' // PDF report available
      },
      'forma': {
        title: 'Domain Specific Language: Forma',
        description: 'Forma is a custom made domain language using Rascal. This means Forma has a customly designed language syntax, both abstract and concrete and based on that syntax, code is generated. More specific, a user can define certain shapes: circles, '
        + 'rectangles and triangles. These shapes can hold properties based on its type. A circle for example has a radius and position, while a rectangle has a width and height. Based on the set properties a JavaScript + HTML file is produced to create '
        + 'a webpage comforming to the specification provided. Shapes can be composite and looped, creating interesting webpage designs. Furthermore, rules can be applied to change shapes during runtime based on shape or position.',
        image: 'assets/forma-det.png',
        features: [
          'Domain Specific Language from scratch',
          'Syntax definitions',
          'Concrete to Abstract implosion',
          'Syntax to Code transformation'
        ],
        technologies: ['Rascal', 'JavaScript', 'DSL design', 'JSON'],
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