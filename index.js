const express = require('express');
const app = express();
const port = 3000;

const medicamentos = [
  {
      "nome": "Losartana Potássica",
      "fabricante": "Vários fabricantes",
      "indicações": [
          "Tratamento da hipertensão arterial",
          "Tratamento da insuficiência cardíaca",
          "Proteção renal em pacientes com diabetes tipo 2 e proteinúria"
      ],
      "dosagem": [
          {
              "condição": "Hipertensão",
              "dose_inicial": "50 mg uma vez ao dia",
              "dose_máxima": "100 mg uma vez ao dia",
              "ajustes": "A dose pode ser ajustada conforme a resposta do paciente"
          },
          {
              "condição": "Insuficiência cardíaca",
              "dose_inicial": "12,5 mg uma vez ao dia",
              "ajustes": "A dose pode ser aumentada gradualmente até 50 mg uma vez ao dia conforme a tolerância"
          },
          {
              "condição": "Proteção renal em diabetes tipo 2",
              "dose_inicial": "50 mg uma vez ao dia",
              "ajustes": "Dose pode ser aumentada para 100 mg uma vez ao dia, dependendo da resposta"
          }
      ]
  },
  {
      "nome": "Metformina",
      "fabricante": "Vários fabricantes",
      "indicações": [
          "Tratamento do diabetes tipo 2",
          "Prevenção de diabetes tipo 2",
          "Síndrome dos ovários policísticos"
      ],
      "dosagem": [
          {
              "condição": "Diabetes tipo 2 (adultos)",
              "dose_inicial": "500 mg duas vezes ao dia",
              "ajustes": "A dose pode ser aumentada semanalmente até 2.000-2.500 mg por dia, divididos em duas ou três doses"
          },
          {
              "condição": "Diabetes tipo 2 (crianças acima de 10 anos)",
              "dose_inicial": "500 mg uma vez ao dia",
              "ajustes": "Dose máxima de 2.000 mg por dia, divididos em duas ou três doses"
          },
          {
              "condição": "Síndrome dos ovários policísticos",
              "dose_inicial": "500 mg uma vez ao dia",
              "ajustes": "A dose pode ser aumentada até 1.500-2.000 mg por dia, conforme orientação médica"
          }
      ]
  },
  {
      "nome": "Simvastatina",
      "fabricante": "Vários fabricantes",
      "indicações": [
          "Redução dos níveis de colesterol",
          "Prevenção de doenças cardiovasculares"
      ],
      "dosagem": [
          {
              "condição": "Hiperlipidemia",
              "dose_inicial": "10 a 20 mg uma vez ao dia, à noite",
              "dose_máxima": "40 mg por dia",
              "ajustes": "Dose pode ser aumentada conforme a resposta do paciente"
          },
          {
              "condição": "Prevenção de eventos cardiovasculares",
              "dose_inicial": "20 a 40 mg uma vez ao dia, à noite"
          }
      ]
  },
  {
      "nome": "Fluoxetina",
      "fabricante": "Vários fabricantes",
      "indicações": [
          "Tratamento de depressão",
          "Transtorno obsessivo-compulsivo",
          "Bulimia nervosa"
      ],
      "dosagem": [
          {
              "condição": "Depressão",
              "dose_inicial": "20 mg ao dia",
              "ajustes": "A dose pode ser aumentada até 60 mg por dia, conforme a resposta do paciente"
          },
          {
              "condição": "Transtorno obsessivo-compulsivo",
              "dose_inicial": "20 mg ao dia",
              "ajustes": "A dose pode ser aumentada até 60 mg por dia, dependendo da resposta"
          }
      ]
  },
  {
      "nome": "Ibuprofeno",
      "fabricante": "Vários fabricantes",
      "indicações": [
          "Alívio de dores leves a moderadas",
          "Tratamento de inflamações"
      ],
      "dosagem": [
          {
              "condição": "Dor leve a moderada",
              "dose_inicial": "200 mg a cada 4-6 horas",
              "dose_máxima": "1.200 mg por dia"
          },
          {
              "condição": "Inflamações",
              "dose_inicial": "400 mg a cada 4-6 horas",
              "dose_máxima": "2.400 mg por dia, conforme prescrição médica"
          }
      ]
  }
]


app.get('/medicamentos-tarja-vermelha', (req, res) => {
  res.json(medicamentos);
});

app.get('/medicamentos-tarja-vermelha/:nome', (req, res) => {
  const nome = req.params.nome.toLowerCase();
  const medicamento = medicamentos.find(m => m.nome.toLowerCase() === nome);
  if (medicamento) {
    res.json(medicamento);
  } else {
    res.status(404).json({ mensagem: "Medicamento não encontrado" });
  }
});

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
