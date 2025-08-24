# 🚀 ALTERAÇÕES NO BANNER DE ENERGIA SOLAR

## 📁 Arquivos que precisam ser modificados:

### 1. `src/components/HeroMinimal.tsx`
### 2. `src/index.css`

---

## 🔄 ALTERAÇÃO 1: HeroMinimal.tsx

**Localizar e substituir a linha 66-70:**

```tsx
{/* Cinematic gradient */}
<div
  className="absolute inset-0"
  style={{
    background:
      "linear-gradient(180deg, rgba(6,12,20,0.50) 0%, rgba(10,160,255,0.08) 45%, rgba(6,12,20,0.70) 100%)",
  }}
/>
{/* Minimal overlay (no rays) */}
<div className="absolute inset-0 pointer-events-none" />
```

**Substituir por:**

```tsx
{/* Overlay escuro com gradiente azul para contraste */}
<div
  className="absolute inset-0"
  style={{
    background:
      "linear-gradient(135deg, rgba(0, 119, 255, 0.8) 0%, rgba(10, 26, 42, 0.9) 100%)",
  }}
/>
```

---

**Localizar e substituir a linha 94:**

```tsx
Não é sobre energia,<br className="hidden sm:block" /> é sobre liberdade financeira.
```

**Substituir por:**

```tsx
não é sobre <strong className="text-[#00d4ff]">energia</strong>,<br className="hidden sm:block" /> é sobre <strong className="text-[#00d4ff]">liberdade financeira</strong>
```

---

**Localizar e substituir a linha 102:**

```tsx
Transforme sua conta de luz em investimento inteligente.
```

**Substituir por:**

```tsx
transforme sua conta de luz em investimento inteligente.
```

---

**Localizar e substituir a linha 110:**

```tsx
<a href="#cta" className="btn-yellow btn-pulse">Solicite desconto</a>
```

**Substituir por:**

```tsx
<a href="#cta" className="banner-cta-button inline-block bg-[#0077ff] hover:bg-[#0056cc] text-white px-6 py-3 md:px-8 md:py-4 rounded-full font-semibold text-sm md:text-base transition-all duration-300 transform hover:-translate-y-0.5 shadow-lg hover:shadow-xl">
  💡 Solicite seu desconto agora
</a>
```

---

**Adicionar APÓS a linha 128 (antes do comentário do Mascot):**

```tsx
{/* Card de benefício extra */}
<motion.div
  className="relative z-10 container mx-auto px-4 -mt-16 md:-mt-20"
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6, ease: 'easeOut', delay: 0.3 }}
>
  <div className="bg-[#0a1a2a] text-white p-4 md:p-6 rounded-2xl text-center max-w-2xl mx-auto shadow-2xl">
    <span className="text-3xl md:text-4xl block mb-2">☀️</span>
    <p className="text-sm md:text-base font-medium leading-relaxed">
      20% de desconto direto na fatura — aplicado automaticamente todo mês.
    </p>
  </div>
</motion.div>
```

---

## 🎨 ALTERAÇÃO 2: index.css

**Adicionar NO FINAL do arquivo (após a última linha):**

```css
/* Responsividade para botão CTA do banner */
@media (max-width: 768px) {
  .banner-cta-button {
    width: 100%;
    max-width: 300px;
    padding: 18px 24px;
    font-size: 1rem;
  }
}

@media (max-width: 480px) {
  .banner-cta-button {
    width: 100%;
    padding: 16px 20px;
    font-size: 0.95rem;
  }
}
```

---

## ✅ O QUE VOCÊ VERÁ APÓS AS ALTERAÇÕES:

1. **Banner com overlay escuro azul** para melhor contraste
2. **Título atualizado** com palavras-chave destacadas em azul
3. **Botão CTA azul** com emoji 💡 e texto "Solicite seu desconto agora"
4. **Card de benefício extra** com ícone ☀️ e texto sobre 20% de desconto
5. **Responsividade completa** - botão full width no mobile

---

## 🚀 COMO APLICAR:

1. **Abra os arquivos** no seu editor
2. **Faça as substituições** conforme indicado acima
3. **Salve os arquivos**
4. **Faça commit e push** para o GitHub
5. **Deploy automático** no Cloudflare Pages

---

## ⏱️ TEMPO DE DEPLOY:
- **Cloudflare Pages**: 1-2 minutos após o push
- **Site atualizado**: https://solarenergy-5h5.pages.dev/

**Depois das alterações, recarregue o site para ver o novo banner! 🎯**