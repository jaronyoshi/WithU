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

