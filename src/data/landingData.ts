export interface KitOption {
  id: string;
  name: string;
  subtitle: string;
  bottles: number;
  months: number;
  discountBadge?: string;
  isPopular?: boolean;
  originalPrice: number;
  cashPrice: number;
  installments: {
    count: number;
    value: number;
  };
  features: string[];
  checkoutUrl: string;
  dailyCost: string;
}

export const KITS_DATA: KitOption[] = [
  {
    id: 'kit-3',
    name: '3 MESES DE TRATAMENTO',
    subtitle: '3 Frascos (180 cápsulas) · Ideal para Início',
    bottles: 3,
    months: 3,
    discountBadge: '50% DE DESCONTO',
    isPopular: false,
    originalPrice: 594.00,
    cashPrice: 297.00,
    installments: {
      count: 12,
      value: 29.82,
    },
    features: [
      '3 Frascos de Biovein (90 dias completos)',
      'Alívio rápido da queimação e dor',
      'Desobstrução do fluxo venoso periférico',
      'Frete Grátis para todo o Brasil',
      'Garantia Incondicional de 90 Dias',
    ],
    checkoutUrl: 'https://pay.braip.co/ref?pl=plag8p2g&ck=chegmknp&af=afidn9pyy4',
    dailyCost: 'R$ 3,30 por dia',
  },
  {
    id: 'kit-5',
    name: '5 MESES DE TRATAMENTO',
    subtitle: '5 Frascos (300 cápsulas) · Máxima Eficácia',
    bottles: 5,
    months: 5,
    discountBadge: 'CAMPEÃO DE VENDAS · 60% OFF',
    isPopular: true,
    originalPrice: 990.00,
    cashPrice: 397.00,
    installments: {
      count: 12,
      value: 39.86,
    },
    features: [
      '5 Frascos de Biovein (150 dias de proteção)',
      'Regeneração profunda das válvulas venosas',
      'Eliminação visível de vasinhos arroxeadas',
      'Frete Expresso Grátis prioritário',
      'Garantia Estendida de 90 Dias',
      'BÔNUS: E-book Guia Pernas Jovens & Sem Edema',
    ],
    checkoutUrl: 'https://pay.braip.co/ref?pl=pladxxqr&ck=chegmknp&af=afidn9pyy4',
    dailyCost: 'R$ 2,64 por dia',
  },
  {
    id: 'kit-10',
    name: '10 MESES DE TRATAMENTO',
    subtitle: '10 Frascos (600 cápsulas) · Blindagem Total',
    bottles: 10,
    months: 10,
    discountBadge: '70% OFF · MAIOR ECONOMIA',
    isPopular: false,
    originalPrice: 1980.00,
    cashPrice: 597.00,
    installments: {
      count: 12,
      value: 59.94,
    },
    features: [
      '10 Frascos de Biovein (300 dias)',
      '2 Frascos Extras Inclusos gratuitamente',
      'Blindagem vascular contra novas varizes',
      'Frete Sedex Expresso Grátis',
      'Acompanhamento nutricional via WhatsApp',
      'Garantia Total de 90 Dias',
    ],
    checkoutUrl: 'https://pay.braip.co/ref?pl=plaxxdgn&ck=chegmknp&af=afidn9pyy4',
    dailyCost: 'R$ 1,99 por dia',
  },
];

export const INGREDIENTS_DATA = [
  {
    num: '01',
    name: 'Pinus Pinaster',
    subtitle: 'Extrato de Pinho Marítimo Francês Puro',
    badge: 'Ativo Nobre Principal',
    mechanism: 'Potente antioxidante vegetal com proantocianidinas oligoméricas (OPCs) que reparam e protegem as fibras elásticas de colágeno das veias e capilares, reduzindo em até 84% a permeabilidade venosa anormal.',
    clinicalStudy: 'Estudo publicado no International Journal of Angiology comprovou redução expressiva do edema e alívio da dor após 7 dias de uso contínuo.',
  },
  {
    num: '02',
    name: 'Vitis Vinifera',
    subtitle: 'Extrato Padronizado de Sementes de Uva',
    badge: 'Estímulo Circulatório',
    mechanism: 'Rico em polifenóis vasodilatadores naturais que estimulam a liberação de óxido nítrico no endotélio vascular. Dissolve microcoágulos estagnados e acelera o retorno venoso dos membros inferiores até o coração.',
    clinicalStudy: 'Comprovado clinicamente para redução de sensação de pernas pesadas e cansaço crônico em indivíduos que passam horas em pé.',
  },
  {
    num: '03',
    name: 'Castanha da Índia',
    subtitle: 'Escina Pura Padronizada a 20%',
    badge: 'Anti-Edema Padrão Ouro',
    mechanism: 'A escina é reconhecida internacionalmente como venotônica de referência: sela os poros microscópicos dos vasos, impedindo o vazamento de plasma sanguíneo para os tecidos subcutâneos, eliminando o inchaço nos tornozelos.',
    clinicalStudy: 'Utilizada há mais de 40 anos na Europa para tratar insuficiência venosa crônica com segurança documentada.',
  },
  {
    num: '04',
    name: 'Rutina Bioativa',
    subtitle: 'Bioflavonóide Cítrico Concentrado',
    badge: 'Resistência Capilar',
    mechanism: 'Aumenta a elasticidade da parede capilar e diminui a fragilidade dos microvasos. Impede o surgimento das pequenas teias arroxeadas e vermelhas superficiais.',
    clinicalStudy: 'Atua em sinergia direta com a vitamina C e OPCs para blindar os vasos contra estresse oxidativo e inflamação crônica.',
  },
  {
    num: '05',
    name: 'Centella Asiática',
    subtitle: 'Madecassoside e Resveratrol',
    badge: 'Regeneração Tecidual',
    mechanism: 'Estimula a síntese de colágeno tipo I e III nas túnicas vasculares, promovendo cicatrização interna do endotélio e devolvendo firmeza e viço à pele das pernas.',
    clinicalStudy: 'Acelera a microcirculação periférica e combate o aspecto de pele ressecada e escurecida comum em quem tem má circulação.',
  },
];

export const FAQ_DATA = [
  {
    question: 'Como devo tomar o Biovein® diariamente?',
    answer: 'Ingerir 2 cápsulas ao dia, preferencialmente 1 cápsula pela manhã junto ao café da manhã e 1 cápsula no final da tarde, acompanhadas de um copo de água. A dosagem foi calculada para liberação gradual e contínua dos ativos na corrente sanguínea.',
  },
  {
    question: 'Em quanto tempo vejo os primeiros resultados?',
    answer: 'Os primeiros sinais de alívio — como diminuição da sensação de peso, cansaço e queimação — costumam ser sentidos entre o 3º e o 7º dia. Entre a 3ª e a 4ª semana, os inchaços nos tornozelos diminuem expressivamente e os vasinhos arroxeadas começam a clarear visivelmente.',
  },
  {
    question: 'O Biovein® é aprovado e dispensado pela Anvisa?',
    answer: 'Sim! Biovein é um suplemento alimentar fitoterápico 100% natural, formulado com matérias-primas de grau farmacêutico e rigorosamente dispensado de registro sanitário obrigatório nos termos da RDC nº 240/2018 e RDC 27/2010 da Anvisa.',
  },
  {
    question: 'Possui contraindicações ou causa efeitos colaterais?',
    answer: 'Por ser 100% natural e livre de glúten, lactose, açúcar ou substâncias químicas sintéticas, o Biovein não causa efeitos colaterais comuns em remédios sintéticos para circulação. Gestantes, lactantes e pessoas que fazem uso de anticoagulantes pesados devem consultar seu médico assistente antes de iniciar qualquer suplementação.',
  },
  {
    question: 'Como funciona a Garantia Blindada de 90 Dias?',
    answer: 'Se você tomar o Biovein por 90 dias conforme recomendado e não notar alívio nas dores ou redução visível nas suas varizes, basta entrar em contato com nosso suporte por WhatsApp ou e-mail. Nós devolvemos 100% do seu dinheiro, mesmo que todos os frascos estejam completamente vazios. Risco absolutamente zero para você.',
  },
  {
    question: 'Qual o prazo e custo de entrega para minha cidade?',
    answer: 'O frete é 100% GRÁTIS para qualquer endereço no Brasil hoje. O prazo de entrega varia de 3 a 7 dias úteis para capitais e regiões metropolitanas, e até 10 dias úteis para interior. Todas as encomendas possuem código de rastreamento enviado via e-mail e SMS.',
  },
  {
    question: 'Posso parcelar no cartão de crédito ou pagar por Pix?',
    answer: 'Sim! Aceitamos Pix com aprovação imediata e envio prioritário no mesmo dia, além de cartões de crédito em até 12x (Mastercard, Visa, Elo, Hipercard e American Express) e boleto bancário à vista.',
  },
];

export const TESTIMONIALS_DATA = [
  {
    name: 'Maria do Carmo Silveira',
    age: 54,
    city: 'Curitiba, PR',
    treatment: 'Kit 5 Meses',
    text: 'Trabalho como professora há 28 anos e no final do dia minhas pernas pareciam de chumbo, queimando feito fogo. Com apenas 6 dias de Biovein a queimação sumiu! Hoje uso saias e vestidos sem sentir vergonha dos vasinhos no joelho.',
    rating: 5,
    verified: true,
    timeframe: 'Tratamento: 4 meses de uso',
  },
  {
    name: 'Helena Santos Ribeiro',
    age: 61,
    city: 'Belo Horizonte, MG',
    treatment: 'Kit 5 Meses',
    text: 'Já tinha feito escleroterapia duas vezes e os vasinhos voltavam piores. Minha vascular sugeriu Pinus Pinaster com Vitis Vinifera. Comprei o Biovein e fiquei chocada: em 2 semanas o inchaço do tornozelo sumiu e as veias arroxeadas murcharam.',
    rating: 5,
    verified: true,
    timeframe: 'Tratamento: 3 meses de uso',
  },
  {
    name: 'Cláudia Regina Mendes',
    age: 48,
    city: 'Campinas, SP',
    treatment: 'Kit 10 Meses',
    text: 'Eu não conseguia dormir com tantas cãibras nas batatas das pernas. O Biovein devolveu minha paz. Pernas leves, lisinhas e sem aquela dor latejante após o trabalho.',
    rating: 5,
    verified: true,
    timeframe: 'Tratamento: 5 meses de uso',
  },
  {
    name: 'Rosângela F. de Almeida',
    age: 57,
    city: 'Porto Alegre, RS',
    treatment: 'Kit 3 Meses',
    text: 'Sempre tive medo de cirurgia vascular. O Biovein desinflamou minhas veias visíveis de um jeito inacreditável. Vale cada centavo investido na nossa saúde!',
    rating: 5,
    verified: true,
    timeframe: 'Tratamento: 2 meses de uso',
  },
];
