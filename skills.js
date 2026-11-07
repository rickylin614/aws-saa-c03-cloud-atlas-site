window.SKILL_RESEARCH = {
  "checkedAt": "2026-11-07",
  "method": "公開 GitHub REST API stargazers_count；逐一 GET 原始 SKILL.md 確認路徑與用途。",
  "starNote": "星數是所屬 GitHub repository 的總星數，不是單一 skill 的星數。此為相關高星專案中的人工精選，並非全網前五名或使用率排名。同一 repo 的不同 skills 共用星數；不同分類可重複推薦。",
  "interpretation": "教學網站與文件 UI 化未見統一官方分類；本清單將其理解為建立教學網站、將文件轉成可導覽互動介面的能力。",
  "categories": [
    {
      "id": "teaching",
      "name": "教學網站",
      "skills": [
        {
          "name": "frontend-design",
          "repo": "anthropics/skills",
          "stars": 188251,
          "url": "https://github.com/anthropics/skills/blob/main/skills/frontend-design/SKILL.md",
          "repoUrl": "https://github.com/anthropics/skills",
          "apiUrl": "https://api.github.com/repos/anthropics/skills",
          "path": "skills/frontend-design/SKILL.md",
          "description": "建立有明確視覺方向、字體層級與閱讀節奏的教學介面。",
          "suitability": "本專案首選；適用原生 HTML/CSS。",
          "recommended": true
        },
        {
          "name": "web-artifacts-builder",
          "repo": "anthropics/skills",
          "stars": 188251,
          "url": "https://github.com/anthropics/skills/blob/main/skills/web-artifacts-builder/SKILL.md",
          "repoUrl": "https://github.com/anthropics/skills",
          "apiUrl": "https://api.github.com/repos/anthropics/skills",
          "path": "skills/web-artifacts-builder/SKILL.md",
          "description": "以 React、Tailwind、shadcn/ui 建立多元件互動網站。",
          "suitability": "適合複雜路由；本次純靜態原生網站不需要其建置工具。",
          "recommended": false
        },
        {
          "name": "ui-ux-pro-max",
          "repo": "nextlevelbuilder/ui-ux-pro-max-skill",
          "stars": 146242,
          "url": "https://github.com/nextlevelbuilder/ui-ux-pro-max-skill/blob/main/.claude/skills/ui-ux-pro-max/SKILL.md",
          "repoUrl": "https://github.com/nextlevelbuilder/ui-ux-pro-max-skill",
          "apiUrl": "https://api.github.com/repos/nextlevelbuilder/ui-ux-pro-max-skill",
          "path": ".claude/skills/ui-ux-pro-max/SKILL.md",
          "description": "查詢配色、排版、互動與無障礙規則，規劃學習儀表板。",
          "suitability": "適合課程導覽與進度介面。",
          "recommended": false
        },
        {
          "name": "web-design-guidelines",
          "repo": "vercel-labs/agent-skills",
          "stars": 33652,
          "url": "https://github.com/vercel-labs/agent-skills/blob/main/skills/web-design-guidelines/SKILL.md",
          "repoUrl": "https://github.com/vercel-labs/agent-skills",
          "apiUrl": "https://api.github.com/repos/vercel-labs/agent-skills",
          "path": "skills/web-design-guidelines/SKILL.md",
          "description": "依 Web Interface Guidelines 審查介面、互動與可及性。",
          "suitability": "適合完工後檢查，並非教學內容產生器。",
          "recommended": false
        },
        {
          "name": "vercel-react-best-practices",
          "repo": "vercel-labs/agent-skills",
          "stars": 33652,
          "url": "https://github.com/vercel-labs/agent-skills/blob/main/skills/react-best-practices/SKILL.md",
          "repoUrl": "https://github.com/vercel-labs/agent-skills",
          "apiUrl": "https://api.github.com/repos/vercel-labs/agent-skills",
          "path": "skills/react-best-practices/SKILL.md",
          "description": "改善 React / Next.js 的資料讀取與渲染效能。",
          "suitability": "僅採用 React 時適用，純 HTML 無需套用。",
          "recommended": false
        }
      ]
    },
    {
      "id": "architecture",
      "name": "架構圖",
      "skills": [
        {
          "name": "json-canvas",
          "repo": "kepano/obsidian-skills",
          "stars": 50923,
          "url": "https://github.com/kepano/obsidian-skills/blob/main/skills/json-canvas/SKILL.md",
          "repoUrl": "https://github.com/kepano/obsidian-skills",
          "apiUrl": "https://api.github.com/repos/kepano/obsidian-skills",
          "path": "skills/json-canvas/SKILL.md",
          "description": "建立 Obsidian JSON Canvas 的節點、群組與連線。",
          "suitability": "適合服務關係與知識心智圖；須另轉網頁顯示。",
          "recommended": false
        },
        {
          "name": "c4-architecture",
          "repo": "softaworks/agent-toolkit",
          "stars": 2639,
          "url": "https://github.com/softaworks/agent-toolkit/blob/main/skills/c4-architecture/SKILL.md",
          "repoUrl": "https://github.com/softaworks/agent-toolkit",
          "apiUrl": "https://api.github.com/repos/softaworks/agent-toolkit",
          "path": "skills/c4-architecture/SKILL.md",
          "description": "依 C4 模型產生情境、容器、元件與部署架構圖。",
          "suitability": "適合區分系統邊界；單一 AWS 服務選型圖可用更簡潔流程圖。",
          "recommended": false
        },
        {
          "name": "mermaid-diagrams",
          "repo": "softaworks/agent-toolkit",
          "stars": 2639,
          "url": "https://github.com/softaworks/agent-toolkit/blob/main/skills/mermaid-diagrams/SKILL.md",
          "repoUrl": "https://github.com/softaworks/agent-toolkit",
          "apiUrl": "https://api.github.com/repos/softaworks/agent-toolkit",
          "path": "skills/mermaid-diagrams/SKILL.md",
          "description": "以文字維護流程、時序、資料模型及 C4 架構圖。",
          "suitability": "本專案首選；圖與內容可一起版控，離線可輸出 SVG。",
          "recommended": true
        },
        {
          "name": "draw-io",
          "repo": "softaworks/agent-toolkit",
          "stars": 2639,
          "url": "https://github.com/softaworks/agent-toolkit/blob/main/skills/draw-io/SKILL.md",
          "repoUrl": "https://github.com/softaworks/agent-toolkit",
          "apiUrl": "https://api.github.com/repos/softaworks/agent-toolkit",
          "path": "skills/draw-io/SKILL.md",
          "description": "建立與檢查 draw.io XML，處理佈局、PNG 輸出與 AWS 圖示。",
          "suitability": "適合正式 AWS 架構圖與後續人工編輯。",
          "recommended": false
        },
        {
          "name": "excalidraw",
          "repo": "softaworks/agent-toolkit",
          "stars": 2639,
          "url": "https://github.com/softaworks/agent-toolkit/blob/main/skills/excalidraw/SKILL.md",
          "repoUrl": "https://github.com/softaworks/agent-toolkit",
          "apiUrl": "https://api.github.com/repos/softaworks/agent-toolkit",
          "path": "skills/excalidraw/SKILL.md",
          "description": "產生可編輯 Excalidraw 圖表與架構視覺。",
          "suitability": "適合概念教學白板；原始 JSON 不適合直接當靜態網頁。",
          "recommended": false
        }
      ]
    },
    {
      "id": "documents",
      "name": "文件",
      "skills": [
        {
          "name": "doc-coauthoring",
          "repo": "anthropics/skills",
          "stars": 188251,
          "url": "https://github.com/anthropics/skills/blob/main/skills/doc-coauthoring/SKILL.md",
          "repoUrl": "https://github.com/anthropics/skills",
          "apiUrl": "https://api.github.com/repos/anthropics/skills",
          "path": "skills/doc-coauthoring/SKILL.md",
          "description": "以結構化寫作、反覆精煉及讀者驗證改善文件。",
          "suitability": "本專案首選；用於考綱、課程結構、選型推理與術語一致性。",
          "recommended": true
        },
        {
          "name": "docx",
          "repo": "anthropics/skills",
          "stars": 188251,
          "url": "https://github.com/anthropics/skills/blob/main/skills/docx/SKILL.md",
          "repoUrl": "https://github.com/anthropics/skills",
          "apiUrl": "https://api.github.com/repos/anthropics/skills",
          "path": "skills/docx/SKILL.md",
          "description": "建立或編輯 Word 文件、目錄、標題與修訂內容。",
          "suitability": "適合日後匯出正式講義，本次網頁不需要 DOCX 工作流。",
          "recommended": false
        },
        {
          "name": "pdf",
          "repo": "anthropics/skills",
          "stars": 188251,
          "url": "https://github.com/anthropics/skills/blob/main/skills/pdf/SKILL.md",
          "repoUrl": "https://github.com/anthropics/skills",
          "apiUrl": "https://api.github.com/repos/anthropics/skills",
          "path": "skills/pdf/SKILL.md",
          "description": "處理 PDF 擷取、合併、表單、OCR 與輸出。",
          "suitability": "適合讀取官方 PDF 考綱與製作可列印講義。",
          "recommended": false
        },
        {
          "name": "humanizer",
          "repo": "blader/humanizer",
          "stars": 65719,
          "url": "https://github.com/blader/humanizer/blob/main/SKILL.md",
          "repoUrl": "https://github.com/blader/humanizer",
          "apiUrl": "https://api.github.com/repos/blader/humanizer",
          "path": "SKILL.md",
          "description": "修訂制式 AI 文字，使語氣自然且維持原意。",
          "suitability": "適合文字潤飾，無法取代 AWS 官方技術事實核對。",
          "recommended": false
        },
        {
          "name": "writing-guidelines",
          "repo": "vercel-labs/agent-skills",
          "stars": 33652,
          "url": "https://github.com/vercel-labs/agent-skills/blob/main/skills/writing-guidelines/SKILL.md",
          "repoUrl": "https://github.com/vercel-labs/agent-skills",
          "apiUrl": "https://api.github.com/repos/vercel-labs/agent-skills",
          "path": "skills/writing-guidelines/SKILL.md",
          "description": "依寫作規範審查文句、語調與文件可讀性。",
          "suitability": "適合教材文字品質檢查。",
          "recommended": false
        }
      ]
    },
    {
      "id": "document-ui",
      "name": "文件 UI 化",
      "skills": [
        {
          "name": "web-artifacts-builder",
          "repo": "anthropics/skills",
          "stars": 188251,
          "url": "https://github.com/anthropics/skills/blob/main/skills/web-artifacts-builder/SKILL.md",
          "repoUrl": "https://github.com/anthropics/skills",
          "apiUrl": "https://api.github.com/repos/anthropics/skills",
          "path": "skills/web-artifacts-builder/SKILL.md",
          "description": "把內容轉成可導覽、可互動的 HTML/React 元件。",
          "suitability": "適合長文件產品化；需要狀態與複雜元件時再採用。",
          "recommended": false
        },
        {
          "name": "theme-factory",
          "repo": "anthropics/skills",
          "stars": 188251,
          "url": "https://github.com/anthropics/skills/blob/main/skills/theme-factory/SKILL.md",
          "repoUrl": "https://github.com/anthropics/skills",
          "apiUrl": "https://api.github.com/repos/anthropics/skills",
          "path": "skills/theme-factory/SKILL.md",
          "description": "為文件、報告與 HTML 頁面建立一致配色與字體主題。",
          "suitability": "本專案首選；統一閱讀頁、比較表、測驗與圖表的視覺層級。",
          "recommended": true
        },
        {
          "name": "ui-ux-pro-max",
          "repo": "nextlevelbuilder/ui-ux-pro-max-skill",
          "stars": 146242,
          "url": "https://github.com/nextlevelbuilder/ui-ux-pro-max-skill/blob/main/.claude/skills/ui-ux-pro-max/SKILL.md",
          "repoUrl": "https://github.com/nextlevelbuilder/ui-ux-pro-max-skill",
          "apiUrl": "https://api.github.com/repos/nextlevelbuilder/ui-ux-pro-max-skill",
          "path": ".claude/skills/ui-ux-pro-max/SKILL.md",
          "description": "以設計系統、互動與響應式規則把文字內容轉成介面。",
          "suitability": "適合搜尋、側欄、卡片及進度元件的 UI 規劃。",
          "recommended": false
        },
        {
          "name": "obsidian-bases",
          "repo": "kepano/obsidian-skills",
          "stars": 50923,
          "url": "https://github.com/kepano/obsidian-skills/blob/main/skills/obsidian-bases/SKILL.md",
          "repoUrl": "https://github.com/kepano/obsidian-skills",
          "apiUrl": "https://api.github.com/repos/kepano/obsidian-skills",
          "path": "skills/obsidian-bases/SKILL.md",
          "description": "將筆記變成可篩選的表格、卡片與資料檢視。",
          "suitability": "適合知識庫 UI；輸出是 Obsidian .base，並非通用 HTML 網站。",
          "recommended": false
        },
        {
          "name": "pdf-to-html",
          "repo": "daymade/claude-code-skills",
          "stars": 1518,
          "url": "https://github.com/daymade/claude-code-skills/blob/main/daymade-docs/pdf-to-html/SKILL.md",
          "repoUrl": "https://github.com/daymade/claude-code-skills",
          "apiUrl": "https://api.github.com/repos/daymade/claude-code-skills",
          "path": "daymade-docs/pdf-to-html/SKILL.md",
          "description": "將 PDF 轉成保留圖表、閱讀順序且可攜帶的單檔 HTML。",
          "suitability": "最直接的文件轉網頁工具；本次為原創課程，無需以 PDF 作為網站底稿。",
          "recommended": false
        }
      ]
    }
  ]
};