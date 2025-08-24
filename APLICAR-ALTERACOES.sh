#!/bin/bash

echo "🚀 APLICANDO MELHORIAS NO BANNER DE ENERGIA SOLAR..."
echo "=================================================="

# Verificar se estamos no diretório correto
if [ ! -f "src/components/HeroMinimal.tsx" ]; then
    echo "❌ Erro: Execute este script no diretório raiz do projeto solar-energy"
    exit 1
fi

echo "✅ Diretório correto detectado"
echo "📁 Aplicando alterações..."

# Backup dos arquivos originais
echo "💾 Fazendo backup dos arquivos originais..."
cp src/components/HeroMinimal.tsx src/components/HeroMinimal.tsx.backup
cp src/index.css src/index.css.backup

echo "✅ Backup criado com sucesso"

# Aplicar alterações no HeroMinimal.tsx
echo "🔧 Aplicando alterações no HeroMinimal.tsx..."

# Substituir o overlay
sed -i 's|{/\* Cinematic gradient \*/}|{/\* Overlay escuro com gradiente azul para contraste \*/}|g' src/components/HeroMinimal.tsx
sed -i 's|linear-gradient(180deg, rgba(6,12,20,0.50) 0%, rgba(10,160,255,0.08) 45%, rgba(6,12,20,0.70) 100%)|linear-gradient(135deg, rgba(0, 119, 255, 0.8) 0%, rgba(10, 26, 42, 0.9) 100%)|g' src/components/HeroMinimal.tsx

# Remover linha desnecessária
sed -i '/{/\* Minimal overlay (no rays) \*/}/d' src/components/HeroMinimal.tsx
sed -i '/<div className="absolute inset-0 pointer-events-none" \/>/d' src/components/HeroMinimal.tsx

# Atualizar título
sed -i 's|Não é sobre energia,<br className="hidden sm:block" /> é sobre liberdade financeira.|não é sobre <strong className="text-\[#00d4ff\]">energia</strong>,<br className="hidden sm:block" /> é sobre <strong className="text-\[#00d4ff\]">liberdade financeira</strong>|g' src/components/HeroMinimal.tsx

# Atualizar subtítulo
sed -i 's|Transforme sua conta de luz em investimento inteligente.|transforme sua conta de luz em investimento inteligente.|g' src/components/HeroMinimal.tsx

# Atualizar botão CTA
sed -i 's|<a href="#cta" className="btn-yellow btn-pulse">Solicite desconto</a>|<a href="#cta" className="banner-cta-button inline-block bg-\[#0077ff\] hover:bg-\[#0056cc\] text-white px-6 py-3 md:px-8 md:py-4 rounded-full font-semibold text-sm md:text-base transition-all duration-300 transform hover:-translate-y-0.5 shadow-lg hover:shadow-xl">\n                  💡 Solicite seu desconto agora\n                </a>|g' src/components/HeroMinimal.tsx

# Adicionar card de benefício extra (antes do comentário do Mascot)
sed -i '/{/\* Mascot fixed at bottom-right (edge) \*/}/i\      {/* Card de benefício extra */}\n      <motion.div\n        className="relative z-10 container mx-auto px-4 -mt-16 md:-mt-20"\n        initial={{ opacity: 0, y: 20 }}\n        animate={{ opacity: 1, y: 0 }}\n        transition={{ duration: 0.6, ease: "easeOut", delay: 0.3 }}\n      >\n        <div className="bg-\[#0a1a2a\] text-white p-4 md:p-6 rounded-2xl text-center max-w-2xl mx-auto shadow-2xl">\n          <span className="text-3xl md:text-4xl block mb-2">☀️</span>\n          <p className="text-sm md:text-base font-medium leading-relaxed">\n            20% de desconto direto na fatura — aplicado automaticamente todo mês.\n          </p>\n        </div>\n      </motion.div>\n' src/components/HeroMinimal.tsx

echo "✅ HeroMinimal.tsx atualizado com sucesso"

# Aplicar alterações no index.css
echo "🎨 Aplicando alterações no index.css..."

# Adicionar estilos responsivos no final do arquivo
echo "" >> src/index.css
echo "/* Responsividade para botão CTA do banner */" >> src/index.css
echo "@media (max-width: 768px) {" >> src/index.css
echo "  .banner-cta-button {" >> src/index.css
echo "    width: 100%;" >> src/index.css
echo "    max-width: 300px;" >> src/index.css
echo "    padding: 18px 24px;" >> src/index.css
echo "    font-size: 1rem;" >> src/index.css
echo "  }" >> src/index.css
echo "}" >> src/index.css
echo "" >> src/index.css
echo "@media (max-width: 480px) {" >> src/index.css
echo "  .banner-cta-button {" >> src/index.css
echo "    width: 100%;" >> src/index.css
echo "    padding: 16px 20px;" >> src/index.css
echo "    font-size: 0.95rem;" >> src/index.css
echo "  }" >> src/index.css
echo "}" >> src/index.css

echo "✅ index.css atualizado com sucesso"

# Testar build
echo "🔨 Testando build..."
if npm run build > /dev/null 2>&1; then
    echo "✅ Build bem-sucedido!"
else
    echo "❌ Erro no build. Restaurando arquivos originais..."
    cp src/components/HeroMinimal.tsx.backup src/components/HeroMinimal.tsx
    cp src/index.css.backup src/index.css
    echo "✅ Arquivos restaurados"
    exit 1
fi

echo ""
echo "🎉 ALTERAÇÕES APLICADAS COM SUCESSO!"
echo "======================================"
echo "✅ Overlay escuro com gradiente azul aplicado"
echo "✅ Título atualizado com palavras-chave destacadas"
echo "✅ Botão CTA azul com emoji 💡"
echo "✅ Card de benefício extra adicionado"
echo "✅ Responsividade configurada"
echo ""
echo "🚀 PRÓXIMOS PASSOS:"
echo "1. Faça commit das alterações: git add ."
echo "2. Commit: git commit -m 'Melhorias no banner de energia solar'"
echo "3. Push: git push origin main"
echo "4. Aguarde deploy no Cloudflare Pages"
echo "5. Recarregue: https://solarenergy-5h5.pages.dev/"
echo ""
echo "💡 Para reverter: git checkout -- src/components/HeroMinimal.tsx src/index.css"