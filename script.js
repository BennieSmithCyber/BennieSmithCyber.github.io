const buttons = document.querySelectorAll('[data-filter]');
const projects = document.querySelectorAll('.project');
buttons.forEach(button => button.addEventListener('click', () => {
  buttons.forEach(item => item.setAttribute('aria-pressed', String(item === button)));
  let count = 0;
  projects.forEach(project => {
    const visible = button.dataset.filter === 'All' || project.dataset.category === button.dataset.filter;
    project.hidden = !visible;
    if (visible) count++;
  });
  document.getElementById('filter-status').textContent = `Showing ${count} learning ${count === 1 ? 'project' : 'projects'}`;
}));
