document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('name-form');

  form.addEventListener('submit', async (e) => {
    e.preventDefault();

    const name = document.getElementById('name').value;

    const { data, error } = await supabase
      .from('support_form')
      .insert([{ name }]);

    if (error) {
      console.error('Error saving name:', error.message);
    } else {
      console.log('Saved:', data);
      window.location.href = 'onboarding6.html';
    }
  });
});


// --- This is to select and deselect symptoms --- //

document.querySelectorAll('.icon').forEach(icon => {
  icon.addEventListener('click', () => {
    const isSelected = icon.classList.toggle('selected');

    icon.src = isSelected
      ? icon.dataset.selected
      : icon.dataset.default;
  });
});


// ---- Frequency Slider ---- //

document.addEventListener('DOMContentLoaded', function() {
            const slider = document.getElementById('frequencySlider');
            const frequencyText = document.getElementById('frequencyText');

            function updateFrequency() {
                const value = parseInt(slider.value);
                let text;
                
                if (value === 0) {
                    text = "0 times a week";
                } else if (value === 7) {
                    text = "Everyday";
                } else if (value === 1) {
                    text = "1 time a week";
                } else {
                    text = `${value} times a week`;
                }
                
                frequencyText.textContent = text;
                
                // Update slider track fill
                const percentage = (value / 7) * 100;
                slider.style.background = `linear-gradient(to right, #B8EA9B 0%, #B8EA9B ${percentage}%, #DADED7 ${percentage}%, #DADED7 100%)`;
            }

            slider.addEventListener('input', updateFrequency);
            
            // Initialize
            updateFrequency();
        });


// Mobile nav bar//

document.addEventListener('DOMContentLoaded', function() {
    const navItems = document.querySelectorAll('.nav-item');
    

    const currentPage = window.location.pathname.split('/').pop();
    

    navItems.forEach(item => {
        const tabName = item.dataset.tab;
        const icon = item.querySelector('.nav-icon');
        let iconName = tabName === 'Account' ? 'Profile' : tabName;
        

        if ((currentPage === 'home.html' && tabName === 'Home') ||
            (currentPage === 'journal.html' && tabName === 'Journal') ||
            (currentPage === 'profile.html' && tabName === 'Account')) {
            

            item.classList.add('active');
            icon.src = `assets/nav-icons/${iconName}-active.svg`;
        } else {

            item.classList.remove('active');
            icon.src = `assets/nav-icons/${iconName}.svg`;
        }
    });
    

    navItems.forEach(item => {
        item.addEventListener('click', function() {
            const tabName = this.dataset.tab;
            
            if (tabName === 'Home') {
                window.location.href = 'home.html';
            } else if (tabName === 'Journal') {
                window.location.href = 'journal.html';
            } else if (tabName === 'Account') {
                window.location.href = 'profile.html';
            }
        });
    });
});



