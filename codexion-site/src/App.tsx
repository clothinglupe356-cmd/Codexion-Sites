import { motion } from 'framer-motion'
import { Sparkles, Leaf, LineChart, Phone, CheckCircle, Quote } from 'lucide-react'
import { useMemo, useState } from 'react'
import { Bar, BarChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts'
import { TestimonialsCarousel } from './components/TestimonialsCarousel'

type LeadFormData = {
  name: string
  email: string
  phone: string
  averageBill: string
}

function App() {
  const [lead, setLead] = useState<LeadFormData>({ name: '', email: '', phone: '', averageBill: '' })
  const [showContactModal, setShowContactModal] = useState(false)

  const averageBillNumber = Number(lead.averageBill.replace(/\D/g, '')) || 0
  const savingsPercent = 0.2
  const simulatedSavings = Math.round(averageBillNumber * savingsPercent)

  const chartData = useMemo(
    () => [
      { name: 'Antes', valor: averageBillNumber },
      { name: 'Depois', valor: Math.max(averageBillNumber - simulatedSavings, 0) },
    ],
    [averageBillNumber, simulatedSavings]
  )

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(800px_400px_at_80%_-10%,rgba(34,197,94,0.12),transparent_60%)]"></div>
        <div className="container mx-auto px-4 py-20 lg:py-28 max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <div>
              <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="text-4xl md:text-5xl font-extrabold tracking-tight">
                Economize até 20% na sua conta de energia todo mês
              </motion.h1>
              <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1, duration: 0.6 }} className="mt-4 text-neutral-300 text-lg">
                Você paga o mínimo à CEMIG e visualiza a diferença direto em nossa fatura inteligente.
              </motion.p>

              <div className="mt-8 flex items-center gap-3">
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-emerald-500/20">
                  <Sparkles className="h-5 w-5 text-emerald-400" />
                </span>
                <p className="text-neutral-300">Visual corporativo moderno + sustentável</p>
              </div>

              <div className="mt-10">
                <button className="btn-accent" onClick={() => document.getElementById('simulador')?.scrollIntoView({ behavior: 'smooth' })}>
                  Simule agora sua economia
                </button>
              </div>
            </div>

            {/* Lead Form */}
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.15, duration: 0.6 }} className="card-glass p-6">
              <h3 className="text-xl font-semibold">Receba sua simulação</h3>
              <form className="mt-4 grid grid-cols-1 gap-4" onSubmit={(e) => { e.preventDefault(); setShowContactModal(true) }}>
                <input className="w-full rounded-xl bg-white/5 border border-white/10 px-4 py-3 outline-none focus:border-emerald-400" placeholder="Nome" value={lead.name} onChange={(e) => setLead({ ...lead, name: e.target.value })} required />
                <input className="w-full rounded-xl bg-white/5 border border-white/10 px-4 py-3 outline-none focus:border-emerald-400" type="email" placeholder="E-mail" value={lead.email} onChange={(e) => setLead({ ...lead, email: e.target.value })} required />
                <input className="w-full rounded-xl bg-white/5 border border-white/10 px-4 py-3 outline-none focus:border-emerald-400" placeholder="Telefone" value={lead.phone} onChange={(e) => setLead({ ...lead, phone: e.target.value })} required />
                <input className="w-full rounded-xl bg-white/5 border border-white/10 px-4 py-3 outline-none focus:border-emerald-400" placeholder="Valor médio da conta (R$)" value={lead.averageBill} onChange={(e) => setLead({ ...lead, averageBill: e.target.value })} required />
                <button className="btn-primary" type="submit">Quero reduzir minha conta</button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Benefícios */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid md:grid-cols-4 gap-4">
            {[
              { icon: CheckCircle, title: 'Economia real garantida', desc: 'Até 20% todo mês, sem esforço.' },
              { icon: Leaf, title: 'Sem obras complexas', desc: 'Ativação simples e rápida.' },
              { icon: LineChart, title: 'Acompanhamento digital', desc: 'Painel inteligente de fatura.' },
              { icon: Phone, title: 'Atendimento local', desc: 'Equipe próxima e humanizada.' },
            ].map((item, idx) => (
              <motion.div key={item.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: idx * 0.05 }} className="card-glass p-5">
                <div className="flex items-center gap-3">
                  <item.icon className="h-6 w-6 text-emerald-400" />
                  <h4 className="font-semibold">{item.title}</h4>
                </div>
                <p className="mt-2 text-neutral-300 text-sm">{item.desc}</p>
              </motion.div>
            ))}
          </div>
          <div className="mt-8 flex justify-center">
            <a href="#simulador" className="btn-accent">Quero reduzir minha conta</a>
          </div>
        </div>
      </section>

      {/* Prova Social */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="flex items-center gap-3">
            <Quote className="h-6 w-6 text-cyan-400" />
            <h3 className="text-xl font-semibold">+500 famílias economizando no Norte de Minas</h3>
          </div>
          <div className="mt-6 grid md:grid-cols-3 gap-4">
            <TestimonialsCarousel items={[{ name: 'Ana', text: '“Minha conta caiu 18% em dois meses.”' }, { name: 'Carlos', text: '“Sem obras e com painel claro. Aprovado!”' }, { name: 'Marta', text: '“Atendimento rápido e humano. Recomendo.”' }]} />
            <TestimonialsCarousel items={[{ name: 'Paulo', text: '“A economia é real. Fatura transparente.”' }, { name: 'Bianca', text: '“Equipe atenciosa e excelente suporte.”' }, { name: 'Sofia', text: '“Recomendo para todo mundo!”' }]} />
            <TestimonialsCarousel items={[{ name: 'Rafael', text: '“Reduzi 20% sem obras.”' }, { name: 'Letícia', text: '“Processo simples do início ao fim.”' }, { name: 'Julio', text: '“O painel é muito intuitivo.”' }]} />
          </div>
          <div className="mt-4 inline-flex items-center gap-2 rounded-full border border-white/10 px-3 py-1 text-sm text-neutral-300">
            <span className="h-2 w-2 rounded-full bg-emerald-400"></span>
            Selo "Energia Sustentável"
          </div>
        </div>
      </section>

      {/* Simulador */}
      <section id="simulador" className="py-16">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div className="card-glass p-6">
              <h3 className="text-xl font-semibold">Simule agora</h3>
              <div className="mt-4 grid gap-3">
                <input className="w-full rounded-xl bg-white/5 border border-white/10 px-4 py-3 outline-none focus:border-cyan-400" placeholder="Valor médio da conta CEMIG (R$)" value={lead.averageBill} onChange={(e) => setLead({ ...lead, averageBill: e.target.value })} />
                <button className="btn-primary" onClick={() => setShowContactModal(true)}>Quero ser contactado com minha simulação</button>
              </div>
            </div>
            <div className="card-glass p-6">
              <h4 className="font-semibold">Antes x Depois</h4>
              <div className="h-64 mt-4">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={chartData}>
                    <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.1)" />
                    <XAxis dataKey="name" stroke="#94a3b8" />
                    <YAxis stroke="#94a3b8" />
                    <Tooltip contentStyle={{ background: 'rgba(15,23,42,0.9)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: 12 }} />
                    <Bar dataKey="valor" fill="#22c55e" radius={[8, 8, 0, 0]} />
                  </BarChart>
                </ResponsiveContainer>
              </div>
              <p className="mt-4 text-neutral-300">Economia estimada: <span className="text-emerald-400 font-semibold">R$ {simulatedSavings.toLocaleString('pt-BR')}</span></p>
            </div>
          </div>
        </div>
      </section>

      {/* Oferta Direta */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="card-glass p-8 text-center">
            <h3 className="text-2xl font-bold">Não perca mais dinheiro todo mês. Comece a economizar agora sem investimento inicial.</h3>
            <button className="mt-6 btn-accent animate-pulse" onClick={() => document.getElementById('contato')?.scrollIntoView({ behavior: 'smooth' })}>Garanta sua economia hoje mesmo</button>
          </div>
        </div>
      </section>

      {/* Rodapé */}
      <footer id="contato" className="py-16 border-t border-white/10">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h4 className="text-xl font-semibold">Fale com a gente</h4>
              <form className="mt-4 grid gap-3" onSubmit={(e) => { e.preventDefault(); setShowContactModal(true) }}>
                <input className="w-full rounded-xl bg-white/5 border border-white/10 px-4 py-3 outline-none focus:border-emerald-400" placeholder="Nome" required />
                <input className="w-full rounded-xl bg-white/5 border border-white/10 px-4 py-3 outline-none focus:border-emerald-400" type="email" placeholder="E-mail" required />
                <input className="w-full rounded-xl bg-white/5 border border-white/10 px-4 py-3 outline-none focus:border-emerald-400" placeholder="Telefone" required />
                <button className="btn-primary" type="submit">Enviar</button>
              </form>
            </div>
            <div className="flex flex-col gap-3">
              <a className="inline-flex items-center gap-2 text-neutral-300 hover:text-emerald-300" href="https://wa.me/5538999999999" target="_blank" rel="noreferrer">
                <Phone className="h-5 w-5" /> WhatsApp
              </a>
              <div className="text-sm text-neutral-400">Links: <a className="hover:text-emerald-300" href="#">Sobre</a> · <a className="hover:text-emerald-300" href="#">Política de Privacidade</a></div>
            </div>
          </div>
          <div className="mt-10 text-xs text-neutral-500">© {new Date().getFullYear()} Codexion</div>
        </div>
      </footer>

      {/* Sticky CTA mobile */}
      <div className="fixed inset-x-0 bottom-4 z-50 px-4 md:hidden">
        <button className="w-full btn-accent" onClick={() => document.getElementById('simulador')?.scrollIntoView({ behavior: 'smooth' })}>Simule agora sua economia</button>
      </div>

      {/* Simple modal placeholder */}
      {showContactModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4" onClick={() => setShowContactModal(false)}>
          <div className="card-glass p-6 max-w-md w-full" onClick={(e) => e.stopPropagation()}>
            <h4 className="font-semibold">Obrigado! Entraremos em contato.</h4>
            <p className="mt-2 text-neutral-300 text-sm">Recebemos seus dados e enviaremos sua simulação em breve.</p>
            <div className="mt-4 flex justify-end">
              <button className="btn-primary" onClick={() => setShowContactModal(false)}>Fechar</button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default App
