# 🎨 Portfolio Theme Presets & Color Reference

This file documents the exact color tokens used in the portfolio so we can pull, switch, or revert to any palette instantly.

---

## 🖤 Preset 1: `theme-midnight-black` (CURRENT ACTIVE)
> **Vibe:** Ultra-clean, high-contrast, stealth luxury AI lab.  
> **Git Tag:** `theme-midnight-black`

| Token | Name | Hex / Value | Description |
| :--- | :--- | :--- | :--- |
| `--bg-primary` | Pitch Midnight Black | `#000000` | True OLED black background |
| `--bg-secondary` | Deep Obsidian | `#08080a` | Navbar & secondary sections |
| `--bg-card` | Matte Black Card | `#0f0f13` | Project & feature cards |
| `--text-primary` | Pure White | `#ffffff` | High-contrast headings & primary text |
| `--text-secondary` | Silver Zinc | `#a1a1aa` | Readable secondary descriptions |
| `--accent` | Pure White Accent | `#ffffff` | Buttons, badges, active tabs |
| `--accent-dim` | Subtle White Dim | `rgba(255, 255, 255, 0.12)` | Inner glows and subtle fills |
| `--accent-glow` | Pure White Aura | `0 0 25px rgba(255, 255, 255, 0.2)` | Card hover glow & buttons |
| `--border` | Charcoal Wireframe | `#222228` | Crisp, ultra-thin borders |

---

## 🌿 Preset 2: `theme-cyber-teal` (ARCHIVED)
> **Vibe:** Cyberpunk, terminal hacker, electric AI neon.  
> **Git Tag:** `theme-cyber-teal`

| Token | Name | Hex / Value | Description |
| :--- | :--- | :--- | :--- |
| `--bg-primary` | Deep Void | `#0a0a0f` | Dark navy-tinted void |
| `--bg-secondary` | Dark Slate | `#12121a` | Elevated background |
| `--bg-card` | Midnight Charcoal | `#1a1a24` | Surface cards |
| `--text-primary` | Off-White Ice | `#f0f0f5` | Main text |
| `--text-secondary` | Muted Lavender | `#8888a0` | Muted text |
| `--accent` | Electric Cyber Teal | `#00D4AA` | Neon green-cyan accent |
| `--accent-glow` | Cyan Aura | `0 0 20px rgba(0, 212, 170, 0.3)` | Hover glow effect |
| `--border` | Dark Slate Border | `#2a2a3a` | Subtle border |

---

## ⚡ How to Switch / Pull Any Theme:
To switch to a new color palette, just tell Friday:
1. Provide a color name (e.g., *"give me champagne gold and pitch black"*, *"deep sapphire blue"*, or *"revert to cyber teal"*).
2. Friday will update `globals.css`, rebuild, commit, and deploy live to Netlify in ~30 seconds!
