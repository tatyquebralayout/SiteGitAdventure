import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

type FAQItemProps = {
  question: string;
  answer: string;
};

function FAQItem({ question, answer }: FAQItemProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-purple-500/20 last:border-b-0">
      <button
        className="w-full py-5 px-4 flex justify-between items-center text-left hover:bg-purple-500/5 transition-colors rounded-lg"
        onClick={() => setIsOpen(!isOpen)}
      >
        <h3 className="text-lg font-medium text-white">{question}</h3>
        <span className="text-purple-400">
          {isOpen ? <ChevronUp className="h-5 w-5" /> : <ChevronDown className="h-5 w-5" />}
        </span>
      </button>
      {isOpen && (
        <div className="px-4 pb-5 text-gray-400">
          <p>{answer}</p>
        </div>
      )}
    </div>
  );
}

export function FAQ() {
  const faqItems = [
    {
      question: "O que é o Git Adventure?",
      answer: "Git Adventure é uma experiência de aprendizado imersiva que ensina Git e GitHub através de uma jornada gamificada e temática, combinando conceitos práticos com narrativa envolvente."
    },
    {
      question: "Quem pode participar do Git Adventure?",
      answer: "O Git Adventure é ideal para iniciantes que desejam aprender Git e GitHub, assim como para usuários intermediários que querem aprimorar suas habilidades em um formato divertido e interativo."
    },
    {
      question: "Quanto tempo leva para completar o Git Adventure?",
      answer: "O tempo para completar o Git Adventure varia de acordo com seu ritmo e experiência prévia. Em média, a jornada completa pode ser concluída em aproximadamente X semanas, com sessões de Y horas."
    },
    {
      question: "Preciso ter conhecimento prévio para começar?",
      answer: "Não é necessário conhecimento prévio em Git ou GitHub. O Git Adventure foi projetado para guiar você desde os conceitos mais básicos até técnicas avançadas, com tutoriais passo a passo."
    },
    {
      question: "Como posso acessar o conteúdo após concluir a jornada?",
      answer: "Após concluir a jornada, você terá acesso permanente a todo o conteúdo, recursos adicionais e atualizações futuras. Você também receberá um certificado digital de conclusão para compartilhar em seu perfil."
    }
  ];

  return (
    <div className="relative py-24">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/30 pointer-events-none"></div>
      <div className="container mx-auto px-4 relative">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-2 text-glow">Perguntas Frequentes</h2>
          <p className="text-xl text-gray-400 text-center mb-12">Tudo o que você precisa saber sobre o Git Adventure</p>
          
          <div className="bg-black/40 backdrop-blur-sm rounded-2xl p-2 border border-purple-500/20 shadow-xl">
            {faqItems.map((item, index) => (
              <FAQItem key={index} question={item.question} answer={item.answer} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
} 