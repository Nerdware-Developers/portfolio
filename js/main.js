/* Theme handling */
(function initTheme() {
	try {
		const stored = localStorage.getItem("nerdware-theme");
		const prefersLight = window.matchMedia && window.matchMedia("(prefers-color-scheme: light)").matches;
		const useLight = stored ? stored === "light" : prefersLight;
		document.documentElement.classList.toggle("light", useLight);
	} catch (_) {}
})();

/* Toggle theme */
(function wireThemeToggle() {
	const btn = document.getElementById("theme-toggle");
	if (!btn) return;
	btn.addEventListener("click", () => {
		const isLight = document.documentElement.classList.toggle("light");
		try {
			localStorage.setItem("nerdware-theme", isLight ? "light" : "dark");
		} catch (_) {}
	});
})();

/* Mobile nav toggle */
(function wireNavToggle() {
	const toggle = document.querySelector(".nav-toggle");
	const menu = document.getElementById("nav-menu");
	if (!toggle || !menu) return;
	toggle.addEventListener("click", () => {
		const expanded = toggle.getAttribute("aria-expanded") === "true";
		const next = !expanded;
		toggle.setAttribute("aria-expanded", String(next));
		menu.setAttribute("aria-expanded", String(next));
	});
})();

/* Year in footer */
(function setYear() {
	const yearEl = document.getElementById("year");
	if (yearEl) {
		yearEl.textContent = new Date().getFullYear();
	}
})();


