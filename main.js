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
