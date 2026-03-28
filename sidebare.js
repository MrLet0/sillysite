const openBtn = document.getElementById('openBtn');
const closeBtn = document.getElementById('closeBtn');
const sidebar = document.getElementById('sidebar');

// Открыть панель
openBtn.onclick = function() {
    console.log("123")
    sidebar.classList.add('active')
}

// Закрыть панель
closeBtn.addEventListener('click', () => {
  sidebar.classList.remove('active');
});