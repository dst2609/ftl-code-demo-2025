document.addEventListener("DOMContentLoaded", () => {
  const container = document.getElementById("playlist-container");
  const modal = document.getElementById("playlist-modal");
  const closeBtn = modal.querySelector(".close-button");
  const modalArt = document.getElementById("modal-art");
  const modalName = document.getElementById("modal-name");
  const modalAuthor = document.getElementById("modal-author");
  const modalSongs = document.getElementById("modal-songs");

  // 1) Load playlists via fetch().then() chaining
  fetch("data/data.json")
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network error: " + response.status);
      }
      return response.json();
    })
    .then((data) => {
      data.playlists.forEach(createPlaylistTile);
    })
    .catch((err) => {
      console.error("Failed to load playlists:", err);
    });

  // 2) Create each card
  function createPlaylistTile(pl) {
    const tile = document.createElement("div");
    tile.className = "playlist-tile";
    tile.innerHTML = `
        <img src="${pl.playlist_art}" alt="${pl.playlist_name}">
        <h3>${pl.playlist_name}</h3>
        <p>By ${pl.playlist_author}</p>
        <span class="heart-icon">&#x2665;</span>
        <span class="like-count">${pl.likes}</span>
      `;

    // open modal when clicking the tile (but not the heart)
    tile.addEventListener("click", (e) => {
      if (!e.target.classList.contains("heart-icon")) {
        openModal(pl);
      }
    });

    // toggle like/unlike
    const heart = tile.querySelector(".heart-icon");
    const count = tile.querySelector(".like-count");
    heart.addEventListener("click", (e) => {
      e.stopPropagation();
      let n = parseInt(count.textContent, 10);
      if (heart.classList.contains("liked")) {
        heart.classList.remove("liked");
        count.textContent = --n;
      } else {
        heart.classList.add("liked");
        count.textContent = ++n;
      }
    });

    container.appendChild(tile);
  }

  // 3) Populate and show modal
  function openModal(pl) {
    modalArt.src = pl.playlist_art;
    modalName.textContent = pl.playlist_name;
    modalAuthor.textContent = "By " + pl.playlist_author;
    modalSongs.innerHTML = "";
    pl.songs.forEach((s) => {
      const li = document.createElement("li");
      li.textContent = `${s.title} — ${s.artist} (${s.duration})`;
      modalSongs.appendChild(li);
    });
    modal.classList.add("show");
  }

  // 4) Close handlers
  closeBtn.addEventListener("click", () => {
    modal.classList.remove("show");
  });
  modal.addEventListener("click", (e) => {
    if (e.target === modal) {
      modal.classList.remove("show");
    }
  });
});
