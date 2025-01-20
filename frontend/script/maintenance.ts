import { execSync } from "child_process";
import { promisify } from "util";
import * as fs from "fs";
import * as path from "path";

// Função que executa comandos e retorna o resultado
const runCommand = (command: string): Promise<string> => {
  return new Promise((resolve, reject) => {
    try {
      console.log(`🔧 Executando: ${command}`);
      const result = execSync(command, { stdio: "pipe" }).toString();
      resolve(result);
    } catch (error) {
      reject(error);
    }
  });
};

// Função que realiza a manutenção
const runMaintenance = async () => {
  try {
    console.log("\n🚀 Iniciando manutenção do frontend...\n");

    // Refatorar Código
    console.log("⚙️ Executando ESLint...");
    await runCommand("npm run lint");

    // Formatar Código
    console.log("🖋️ Formatando código com Prettier...");
    await runCommand("npm run prettier");

    // Testar Código
    console.log("🧪 Executando testes...");
    await runCommand("npm run test");

    // Verificar Acessibilidade
    console.log("♿ Verificando acessibilidade com Axe...");
    await runCommand("npx axe http://localhost:3000");

    // Analisar Performance
    console.log("⚡ Analisando performance com Lighthouse...");
    await runCommand("npx lighthouse http://localhost:3000 --output=json --output-path=./lighthouse-report.json");

    console.log("\n✅ Manutenção concluída com sucesso!");

    // Criação de relatórios e logs de execução
    await generateLogs();

  } catch (error) {
    console.error("\n❌ Erro na execução da manutenção:", error);
    process.exit(1);
  }
};

// Função para gerar um arquivo de log de execução
const generateLogs = async () => {
  try {
    const logContent = `
      Manutenção do Frontend:
      - ESLint: Concluído
      - Prettier: Concluído
      - Testes: Concluídos
      - Acessibilidade: Verificada
      - Performance: Analisada (Relatório gerado em ./lighthouse-report.json)
    `;

    const logFilePath = path.resolve(__dirname, "maintenance-log.txt");
    fs.writeFileSync(logFilePath, logContent, { encoding: "utf-8" });
    console.log(`📄 Log de execução gerado em: ${logFilePath}`);

  } catch (error) {
    console.error("Erro ao gerar o log:", error);
  }
};

// Função principal com execução paralela onde possível
const main = async () => {
  try {
    await runMaintenance();
  } catch (error) {
    console.error("Erro ao executar a manutenção:", error);
    process.exit(1);
  }
};

main();
