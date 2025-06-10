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



