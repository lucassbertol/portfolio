# Portfolio — Lucas Bertol

Portfólio pessoal de Lucas Bertol, estudante de Sistemas de Informação na UFSM e bolsista no Núcleo de Ciência da Computação (NCC).

Aplicação **frontend estática** construída com React + TypeScript + Vite, preparada para deploy automático no GitHub Pages.

## Stack

- React 18 + TypeScript
- Vite (build estático, `base: './'`)
- CSS custom com design tokens (sem frameworks de UI)

## Requisitos

- Node.js 18+ e npm

## Como rodar localmente

```bash
npm install
npm run dev
```

Abra o endereço exibido no terminal (geralmente `http://localhost:5173`).

## Gerar o build

```bash
npm run build
```

O build gera a pasta `dist/`, pronta para hospedar em qualquer servidor estático.

Para testar o build localmente:

```bash
npm run preview
```

## Publicar no GitHub Pages

O repositório já inclui um workflow (`/.github/workflows/deploy.yml`) que faz build e deploy automaticamente a cada push na branch `main`.

1. Faça push do projeto para o seu repositório (`lucassbertol/lucassbertol.github.io` para site de usuário, ou qualquer repositório para site de projeto).
2. No GitHub, acesse **Settings → Pages**.
3. Em **Source**, selecione **GitHub Actions**.
4. Pronto — a cada push em `main` o site será atualizado.

> O `base` do Vite está configurado como `./` (relativo), então o site funciona tanto como site de usuário (`https://lucassbertol.github.io/`) quanto como site de projeto (`https://lucassbertol.github.io/<repositorio>/`) sem alterações.

### Deploy manual (opcional)

Se preferir publicar manualmente:

```bash
npm run build
git add dist -f
git commit -m "build"
git push origin main:gh-pages
```

## Editar conteúdo

Todo o conteúdo do site (links, projetos, timeline, stack, contato) fica centralizado em `src/config/site.ts`. Para alterar textos, basta editar esse arquivo.

## Estrutura

```
public/            # favicon, og-image, .nojekyll
src/
  config/site.ts   # dados do site (links, habilidades, projetos)
  components/      # Navbar, Hero (sobre), Skills, Projects, Footer
  styles/global.css
```

## Links de referência

- LinkedIn: https://www.linkedin.com/in/lucas-bertol-85410934a/
- GitHub: https://github.com/lucassbertol
- UniMKT: https://unimkt.shop
