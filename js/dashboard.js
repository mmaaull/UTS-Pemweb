// ===== GANTI KATEGORI =====
const sidebarItems = document.querySelectorAll(".sidebar li");
const categories = document.querySelectorAll(".category");

sidebarItems.forEach(item => {
  item.addEventListener("click", () => {
    sidebarItems.forEach(i => i.classList.remove("active"));
    item.classList.add("active");

    const target = item.getAttribute("data-target");
    categories.forEach(cat => {
      cat.classList.remove("active");
      if (cat.id === target) cat.classList.add("active");
    });
  });
});

// ===== MODAL DETAIL =====
const modal = document.getElementById("detailModal");
const modalTitle = document.getElementById("modalTitle");
const modalDesc = document.getElementById("modalDesc");
const modalImg = document.getElementById("modalImg");
const closeBtn = document.querySelector(".close");

document.querySelectorAll(".info-card").forEach(card => {
  card.addEventListener("click", () => {
    modalTitle.textContent = card.dataset.title;
    modalDesc.textContent = card.dataset.desc;
    modalImg.src = card.querySelector("img").src;
    modal.style.display = "flex";
    document.body.style.overflow = "hidden";

    // Hapus komentar sebelumnya
    document.getElementById("commentList").innerHTML = "";
  });
});

closeBtn.addEventListener("click", () => {
  modal.style.display = "none";
  document.body.style.overflow = "auto";
});

window.addEventListener("click", e => {
  if (e.target === modal) {
    modal.style.display = "none";
    document.body.style.overflow = "auto";
  }
});

// ===== KOMENTAR =====
const commentInput = document.getElementById("commentInput");
const sendBtn = document.getElementById("sendComment");
const notif = document.getElementById("notif");

sendBtn.addEventListener("click", () => {
  const text = commentInput.value.trim();
  if (text === "") return;

  // Kosongkan input setelah kirim
  commentInput.value = "";

  // Tampilkan notifikasi elegan di tengah atas
  notif.classList.add("show");

  setTimeout(() => {
    notif.classList.remove("show");
  }, 2000);
});

