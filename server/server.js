import express from "express";
import cors from "cors";

const app = express();
app.use(cors());

const plans = [
  {
    id: 1,
    name: "Basic",
    price: "Gratuito",
    description: "Para quem precisa do essencial",
    benefits: ["Acesso limitado", "Suporte básico"],
  },
  {
    id: 2,
    name: "Standard",
    price: "R$ 19,90/mês",
    description: "Para equipes em crescimento",
    benefits: ["Acesso completo", "Suporte prioritário"],
  },
  {
    id: 3,
    name: "Security",
    price: "R$ 29,90/mês",
    description: "Para empresas que precisam de segurança e controle",
    benefits: ["Acesso completo", "Monitoramento avançado", "Suporte 24/7"],
  },
  {
    id: 4,
    name: "Enterprise",
    price: "R$ 144,38/mês",
    description: "Soluções corporativas completas e integradas",
    benefits: [
      "Customização total",
      "Gerente de conta dedicado",
      "SLA empresarial",
    ],
  },
];

// Função auxiliar para extrair valor numérico
function getRaw(price) {
  if (price.toLowerCase().includes("gratuito")) return 0;
  const match = price.match(/([\d,.]+)/);
  if (!match) return 0;
  return parseFloat(match[1].replace(".", "").replace(",", "."));
}

// Função para calcular o preço anual
function getAnnualPriceLabel(monthlyLabel) {
  if (monthlyLabel.toLowerCase().includes("gratuito")) return "Gratuito";
  const monthlyRaw = getRaw(monthlyLabel);
  const annual = (monthlyRaw * 12).toFixed(2).replace(".", ",");
  return `R$ ${annual}/ano`;
}

// Novo endpoint que retorna um plano com o preço correto (mensal ou anual)
app.get("/api/plan/:id", (req, res) => {
  const plan = plans.find((p) => p.id === Number(req.params.id));
  if (!plan) return res.status(404).json({ error: "Plano não encontrado" });

  const isAnnual = req.query.isAnnual === "true";
  const raw = isAnnual
    ? +(getRaw(plan.price) * 12).toFixed(2)
    : getRaw(plan.price);
  const label = isAnnual ? getAnnualPriceLabel(plan.price) : plan.price;

  res.json({
    id: plan.id,
    name: plan.name,
    description: plan.description,
    benefits: plan.benefits,
    price: {
      label,
      raw,
    },
  });
});

// Endpoint que lista todos os planos com preços mensal e anual (se quiser manter)
app.get("/api/plans", (req, res) => {
  const result = plans.map((plan) => ({
    id: plan.id,
    name: plan.name,
    description: plan.description,
    benefits: plan.benefits,
    price: {
      monthly: {
        label: plan.price,
        raw: getRaw(plan.price),
      },
      annual: {
        label: getAnnualPriceLabel(plan.price),
        raw: +(getRaw(plan.price) * 12).toFixed(2),
      },
    },
  }));
  res.json(result);
});

app.listen(3001, () => console.log("Backend rodando na porta 3001"));
