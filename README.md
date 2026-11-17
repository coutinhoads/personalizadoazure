# Azure Embalagens | Páscoa 2027 — Recriação na estrutura Victoria Hatab

Este projeto utiliza **a organização visual do ZIP `victoria-hatab-tattoo.zip`** como base de interface, com **conteúdo e imagens do arquivo da Azure enviado anteriormente**.

## O que foi mantido da estrutura visual de referência
- Hero em tela cheia, dividido no desktop e foto de fundo no mobile
- Faixa de palavras em movimento
- Carrossel de cards de apresentação
- Grade fotográfica com modal/lightbox, rolagem e botões
- Cards de depoimentos com carrossel
- Seção de imagem + texto em duas colunas
- Área centralizada de formulário e rodapé simples
- Tipografia Cormorant Garamond + Jost, espaçamentos, responsividade e animações

## Conteúdo atualizado com informações da Azure
- Logo original da Azure extraído do arquivo da landing page
- Páscoa 2027 e personalização a partir de 200 unidades
- Diferenciação, identidade, aumento das vendas e experiência
- 36 fotografias das embalagens (12 iniciais + botão para expandir)
- 3 depoimentos do material de origem (sem criar notas ou avaliações do Google)
- Formulário **oficial da Azure** via Bitrix24 `inline/176/slw41m` (loader_176.js)
- Fallback para `https://personalize.azureembalagens.com.br/pascoa2027/#b9726`

## Executar
Abra `index.html` ou, para simular uma hospedagem:

```bash
python3 -m http.server 8000
```

Acesse http://localhost:8000 na pasta do projeto.

## Publicação
Hospede a pasta inteira (GitHub Pages, Vercel, Netlify etc.). Os arquivos `_headers` e `vercel.json` são acessórios de deploy. O site não requer framework nem build.

## Atenção antes de colocar no ar
- **Valide um envio real de teste no Bitrix24**, porque o backend não acompanha os arquivos locais e o script requer internet/permissão no domínio publicado.
- Não há pixel Meta, GTM nem webhook Make da Victoria. Esses dados pertencem ao outro cliente e foram removidos intencionalmente.
- Eventos e integrações específicos da Azure devem ser configurados somente após confirmação das IDs corretas.
- O link alternativo leva para a página de orçamento original da Azure.

## Atualização de design (17/11/2026)
- Hero no desktop: copy à esquerda e foto sem sobreposição excessiva à direita.
- Hero mobile: foto em destaque no alto; copy curta e CTA em destaque sobre degradê inferior.
- Título “Personalize suas embalagens” mantido em uma linha nas larguras testadas.
- Um único botão na base da galeria (“Ver mais embalagens”); eliminado o CTA redundante.
- Logo da Azure exibido no rodapé escuro.
- Favicon e ícone Apple adaptados com o símbolo original da logo.
- Instagram `https://www.instagram.com/personalizadosazure/` na seção sobre e no rodapé, como no modelo Victoria.
- Integração Bitrix24 preservada e requer teste de envio após publicação.
