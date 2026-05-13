async function setup() {
  const popoverElement = document.querySelector('[popover]');
  popoverElement.addEventListener(
    'click',
    (event) => {
      if (event.target.tagName === 'BUTTON') {
        setTimeout(() => {
          alert(`You have clicked on button: ${event.target.textContent}`);
        }, 150);
      }
    },
    false,
  );
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', async () => {
    await setup();
  });
} else {
  await setup();
}
