function toggleModal(id) {
  const el = document.getElementById('modal-' + id);
  const form = document.querySelector('#modal-' + id + ' .form');
  el.classList.toggle('hidden');

  if (el.classList.contains('hidden')) form.reset();
}
