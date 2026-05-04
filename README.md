// 🔥 SISTEMA COMPLETO: PAINEL PÚBLICO + ADMIN

import { useState, useEffect, useRef } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import html2canvas from "html2canvas";

const API_URL = "http://localhost:3000";
const ADMIN_PASSWORD = "1234"; // 🔐 você pode trocar

export default function Painel() {
  const [texto, setTexto] = useState("");
  const [ranking, setRanking] = useState({});
  const [admin, setAdmin] = useState(false);
  const [senha, setSenha] = useState("");
  const rankingRef = useRef();

  async function carregarRanking() {
    const res = await fetch(`${API_URL}/ranking`);
    const data = await res.json();
    setRanking(data);
  }

  useEffect(() => {
    carregarRanking();
    const interval = setInterval(carregarRanking, 3000);
    return () => clearInterval(interval);
  }, []);

  function login() {
    if (senha === ADMIN_PASSWORD) {
      setAdmin(true);
    } else {
      alert("Senha incorreta");
    }
  }

  async function enviarPartida() {
    await fetch(`${API_URL}/processar`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ texto })
    });

    setTexto("");
    carregarRanking();
  }

  async function resetar() {
    await fetch(`${API_URL}/reset`, { method: "POST" });
    carregarRanking();
  }

  async function gerarImagem() {
    const canvas = await html2canvas(rankingRef.current);
    const link = document.createElement("a");
    link.download = "ranking.png";
    link.href = canvas.toDataURL();
    link.click();
  }

  const rankingOrdenado = Object.entries(ranking).sort((a, b) => {
    if (b[1].pontos !== a[1].pontos) return b[1].pontos - a[1].pontos;
    if (b[1].kills !== a[1].kills) return b[1].kills - a[1].kills;
    return a[1].mortes - b[1].mortes;
  });

  // 🔐 TELA DE LOGIN
  if (!admin) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-black text-white">
        <Card className="bg-zinc-900 p-6">
          <h2 className="text-xl mb-4 text-yellow-400">Login Admin</h2>
          <input
            type="password"
            placeholder="Digite a senha"
            value={senha}
            onChange={(e) => setSenha(e.target.value)}
            className="mb-2 p-2 text-black"
          />
          <Button onClick={login} className="bg-yellow-500 text-black">
            Entrar
          </Button>

          <p className="mt-4 text-sm text-zinc-400">
            Usuários normais podem apenas visualizar o ranking público.
          </p>
        </Card>
      </div>
    );
  }

  // 👑 PAINEL ADMIN
  return (
    <div className="p-4 bg-black min-h-screen text-white">
      <h1 className="text-3xl font-bold mb-4 text-yellow-400">
        PAINEL ADMIN CAMPEONATO
      </h1>

      <Card className="mb-4 bg-zinc-900">
        <CardContent className="p-4">
          <Textarea
            placeholder="Enviar partida..."
            value={texto}
            onChange={(e) => setTexto(e.target.value)}
            className="mb-2 text-black"
          />
          <div className="flex gap-2">
            <Button onClick={enviarPartida} className="bg-yellow-500 text-black">
              Enviar Partida
            </Button>
            <Button onClick={resetar} className="bg-red-600 text-white">
              Resetar
            </Button>
            <Button onClick={gerarImagem} className="bg-green-500 text-black">
              Gerar Arte
            </Button>
          </div>
        </CardContent>
      </Card>

      <RankingView rankingOrdenado={rankingOrdenado} rankingRef={rankingRef} />
    </div>
  );
}

// 🌐 COMPONENTE PÚBLICO
export function RankingView({ rankingOrdenado, rankingRef }) {
  return (
    <div ref={rankingRef} className="bg-black p-6 rounded-2xl">
      <h2 className="text-2xl text-yellow-400 mb-4 text-center">
        RANKING OFICIAL AO VIVO
      </h2>

      {rankingOrdenado.slice(0, 10).map(([nome, stats], index) => (
        <div
          key={nome}
          className="flex justify-between border-b border-yellow-500 py-2 text-lg"
        >
          <span>#{index + 1} {nome}</span>
          <span>{stats.pontos} pts</span>
        </div>
      ))}
    </div>
  );
}


// 🔥 BACKEND EXTRA (ADICIONAR NO SERVER)

// Reset endpoint
app.post("/reset", (req, res) => {
  ranking = {};
  res.json({ ok: true });
});
