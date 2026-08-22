# SEO Fixes — Portfólio Lucas Bertol

Plano aprovado pelo usuário (com adição do CNAME). Executar na saída do plan mode.

## 1. `index.html` — canonical, URLs e descriptions

- Adicionar após `<meta name="theme-color">`:
  ```html
  <link rel="canonical" href="https://lucasbertol.dev.br/" />
  ```
- Trocar `og:url` (linha 23) para `https://lucasbertol.dev.br/`
- Trocar `og:image` (linha 24) e `twitter:image` (linha 35) para `https://lucasbertol.dev.br/og-image.png`
- Substituir a description atual nos 3 pontos (`name="description"`, `og:description`, `twitter:description`) por:

  > Desenvolvedor Fullstack que resolve problemas reais com código: do controle remoto dos laboratórios da UFSM ao marketplace universitário UniMKT.

- Adicionar antes de `</head>` o JSON-LD:
  ```html
  <script type="application/ld+json">
  {
    "@context": "https://schema.org",
    "@type": "ProfilePage",
    "mainEntity": {
      "@type": "Person",
      "name": "Lucas Bertol",
      "jobTitle": "Desenvolvedor Fullstack",
      "url": "https://lucasbertol.dev.br/",
      "image": "https://lucasbertol.dev.br/og-image.png",
      "email": "mailto:pro.lucas.bertol@gmail.com",
      "sameAs": [
        "https://github.com/lucassbertol",
        "https://www.linkedin.com/in/lucas-bertol-85410934a/"
      ],
      "alumniOf": {
        "@type": "CollegeOrUniversity",
        "name": "Universidade Federal de Santa Maria (UFSM)"
      },
      "knowsAbout": ["Python", "PHP", "JavaScript", "C", "Java", "Django", "Node.js", "MySQL", "Linux"]
    }
  }
  </script>
  ```

## 2. Novos arquivos em `public/`

**`public/CNAME`** (conteúdo exato):
```
lucasbertol.dev.br
```

**`public/robots.txt`**:
```
User-agent: *
Allow: /

Sitemap: https://lucasbertol.dev.br/sitemap.xml
```

**`public/sitemap.xml`**:
```xml
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://lucasbertol.dev.br/</loc>
    <lastmod>2026-08-22</lastmod>
    <changefreq>monthly</changefreq>
    <priority>1.0</priority>
  </url>
</urlset>
```

O Vite copia `public/*` → `dist/` no build automaticamente.

## 3. Verificação

1. `npm run build` (roda `tsc --noEmit` + build)
2. Conferir que `dist/` contém: `CNAME`, `robots.txt`, `sitemap.xml`
3. Conferir em `dist/index.html`: canonical presente, nenhuma referência restante a `lucassbertol.github.io`, JSON-LD válido

## Notas

- Domínio custom já ativo (HTTP 200 via GitHub Pages); o `github.io` redireciona automaticamente.
- Não é preciso alterar `.github/workflows/deploy.yml`.
- Após deploy: validar JSON-LD em https://validator.schema.org e testar share preview (ex.: opengraph.xyz).
