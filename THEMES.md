# 🎨 Portfolio Theme Presets & Color Reference

This file documents the exact color tokens used in the portfolio so we can pull, switch, or revert to any palette instantly.

---

## 📜 Preset 1: `theme-ivory-canvas` (CURRENT ACTIVE)
> **Vibe:** Editorial luxury & architectural minimalism. Warm soft ivory canvas with razor-sharp midnight black typography, obsidian accents, and crisp card surfaces.  
> **Git Tag:** `theme-ivory-canvas`

| Token | Name | Hex / Value | Description |
| :--- | :--- | :--- | :--- |
| `--bg-primary` | Soft Ivory Linen | `#FAF7F2` | Warm, luxurious off-white / soft ivory background |
| `--bg-secondary` | Warm Sand Ivory | `#F0ECE1` | Subtle secondary sections & header fills |
| `--bg-card` | Crisp Pure White | `#FFFFFF` | Elevated crisp white card surfaces |
| `--text-primary` | Pitch Midnight Black | `#000000` | Ultra-sharp black headings & primary text |
| `--text-secondary` | Deep Slate Zinc | `#52525B` | Readable slate/zinc secondary text (WCAG AAA) |
| `--accent` | Obsidian Midnight | `#000000` | Signature buttons, badges, tabs & indicators |
| `--accent-dim` | Subtle Black Tint | `rgba(0, 0, 0, 0.06)` | Pill backgrounds & badge fills |
| `--accent-glow` | Soft Editorial Shadow | `0 4px 20px rgba(0, 0, 0, 0.08)` | Elegant card lift shadow |
| `--border` | Warm Stone Wireframe | `#E5E0D5` | Clean, subtle ivory-stone card borders |

---

## 🖤 Preset 2: `theme-midnight-black` (ARCHIVED)
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

## 🌿 Preset 3: `theme-cyber-teal` (ARCHIVED)
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

## 🖋️ Typography Hierarchy

| Role | Font | CSS Variable / Class | Where It's Applied |
| :--- | :--- | :--- | :--- |
| **Display** | **Sora** | `--font-display`, `.font-display`, `h1-h4` | Name branding (`KUNAL JHA`), section titles, and project card titles |
| **Body** | **Geist** | `--font-sans`, `body` | Paragraphs, descriptions, bullet points, summaries |
| **Technical** | **JetBrains Mono** | `--font-mono`, `.font-mono`, `.font-techno` | Navbar links, badges, tech tags, bash terminal session, years, and metrics |

---

## ⚡ How to Switch / Pull Any Theme:
To switch to a new color palette, just tell Friday:
1. Provide a color name (e.g., *"give me champagne gold and pitch black"*, *"deep sapphire blue"*, or *"revert to cyber teal"*).
2. Friday will update `globals.css`, rebuild, commit, and deploy live to Netlify in ~30 seconds!
