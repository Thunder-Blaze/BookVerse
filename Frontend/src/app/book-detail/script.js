document.addEventListener('DOMContentLoaded', function () {
    // Theme toggle functionality
    const themeToggle = document.getElementById('theme-toggle')
    const sunIcon = document.getElementById('sun-icon')
    const moonIcon = document.getElementById('moon-icon')
    const body = document.body

    // Check for saved theme preference or use default (dark)
    const savedTheme = localStorage.getItem('theme') || 'dark'
    body.classList.add(savedTheme)

    // Update icons based on current theme
    updateThemeIcons(savedTheme)

    // Toggle theme when button is clicked
    themeToggle.addEventListener('click', function () {
        if (body.classList.contains('dark')) {
            body.classList.remove('dark')
            body.classList.add('light')
            localStorage.setItem('theme', 'light')
            updateThemeIcons('light')
        } else {
            body.classList.remove('light')
            body.classList.add('dark')
            localStorage.setItem('theme', 'dark')
            updateThemeIcons('dark')
        }
    })

    function updateThemeIcons(theme) {
        if (theme === 'dark') {
            sunIcon.classList.remove('hidden')
            moonIcon.classList.add('hidden')
        } else {
            sunIcon.classList.add('hidden')
            moonIcon.classList.remove('hidden')
        }
    }

    // Tab functionality
    const tabButtons = document.querySelectorAll('.tab-button')
    const tabPanes = document.querySelectorAll('.tab-pane')
    const tabIndicator = document.querySelector('.tab-indicator')

    // Set initial tab indicator position
    updateTabIndicator(document.querySelector('.tab-button.active'))

    tabButtons.forEach((button) => {
        button.addEventListener('click', function () {
            const tabId = this.getAttribute('data-tab')

            // Remove active class from all buttons and panes
            tabButtons.forEach((btn) => btn.classList.remove('active'))
            tabPanes.forEach((pane) => pane.classList.remove('active'))

            // Add active class to current button and pane
            this.classList.add('active')
            document.getElementById(tabId).classList.add('active')

            // Update tab indicator position
            updateTabIndicator(this)
        })
    })

    function updateTabIndicator(activeTab) {
        tabIndicator.style.width = `${activeTab.offsetWidth}px`
        tabIndicator.style.left = `${activeTab.offsetLeft}px`
    }

    // Handle window resize for tab indicator
    window.addEventListener('resize', function () {
        const activeTab = document.querySelector('.tab-button.active')
        updateTabIndicator(activeTab)
    })
})
