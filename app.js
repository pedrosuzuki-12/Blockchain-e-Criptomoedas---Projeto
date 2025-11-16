// --- PASSO 1: CONFIGURAÇÃO ---
// COLE O ENDEREÇO DO SEU CONTRATO AQUI
const contractAddress = "0xfe5b7CE2CF5f1B04F29046792daA98CF76133374";

// COLE O ABI DO SEU CONTRATO AQUI
const contractABI = [
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "spender",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "value",
				"type": "uint256"
			}
		],
		"name": "approve",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"stateMutability": "nonpayable",
		"type": "constructor"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "spender",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "allowance",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "needed",
				"type": "uint256"
			}
		],
		"name": "ERC20InsufficientAllowance",
		"type": "error"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "sender",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "balance",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "needed",
				"type": "uint256"
			}
		],
		"name": "ERC20InsufficientBalance",
		"type": "error"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "approver",
				"type": "address"
			}
		],
		"name": "ERC20InvalidApprover",
		"type": "error"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "receiver",
				"type": "address"
			}
		],
		"name": "ERC20InvalidReceiver",
		"type": "error"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "sender",
				"type": "address"
			}
		],
		"name": "ERC20InvalidSender",
		"type": "error"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "spender",
				"type": "address"
			}
		],
		"name": "ERC20InvalidSpender",
		"type": "error"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "owner",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "spender",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "value",
				"type": "uint256"
			}
		],
		"name": "Approval",
		"type": "event"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "to",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "value",
				"type": "uint256"
			}
		],
		"name": "transfer",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "from",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "to",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "value",
				"type": "uint256"
			}
		],
		"name": "Transfer",
		"type": "event"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "from",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "to",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "value",
				"type": "uint256"
			}
		],
		"name": "transferFrom",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "owner",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "spender",
				"type": "address"
			}
		],
		"name": "allowance",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "account",
				"type": "address"
			}
		],
		"name": "balanceOf",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "decimals",
		"outputs": [
			{
				"internalType": "uint8",
				"name": "",
				"type": "uint8"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "name",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "symbol",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "totalSupply",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	}
];

// --- Elementos do HTML ---
const connectButton = document.getElementById('connectButton');
const refreshBalanceButton = document.getElementById('refreshBalanceButton');
const transferButton = document.getElementById('transferButton');

const statusEl = document.getElementById('status');
const walletAddressEl = document.getElementById('walletAddress');
const tokenBalanceEl = document.getElementById('tokenBalance');
const logMessageEl = document.getElementById('logMessage');

// --- Variáveis Globais ---
let provider;
let signer;
let contract;
let userAddress;

// --- Funções Principais ---

// Função para conectar à MetaMask
async function connectWallet() {
    logMessageEl.textContent = "Tentando conectar...";
    if (typeof window.ethereum !== 'undefined') {
        try {
            provider = new ethers.providers.Web3Provider(window.ethereum);
            await provider.send("eth_requestAccounts", []);
            signer = provider.getSigner();
            contract = new ethers.Contract(contractAddress, contractABI, signer);
            userAddress = await signer.getAddress();

            // Atualiza a interface
            statusEl.textContent = "Conectado";
            walletAddressEl.textContent = userAddress;
            connectButton.textContent = "Conectado";
            logMessageEl.textContent = "Carteira conectada com sucesso!";
            
            updateBalance();
        } catch (error) {
            console.error("Conexão falhou", error);
            logMessageEl.textContent = "Falha ao conectar a carteira.";
        }
    } else {
        logMessageEl.textContent = "MetaMask não detectado. Por favor, instale a extensão.";
    }
}

// Função para atualizar o saldo do token
async function updateBalance() {
    if (!contract || !userAddress) return;
    try {
        logMessageEl.textContent = "Atualizando saldo...";
        const balance = await contract.balanceOf(userAddress);
        // Formata o saldo de Wei (18 casas) para um número legível
        tokenBalanceEl.textContent = ethers.utils.formatEther(balance);
        logMessageEl.textContent = "Saldo atualizado.";
    } catch (error) {
        console.error("Falha ao buscar saldo", error);
        logMessageEl.textContent = "Erro ao buscar saldo.";
    }
}

// Função para transferir tokens
async function transferTokens() {
    if (!contract) return;
    
    const recipient = document.getElementById('recipientAddress').value;
    const amount = document.getElementById('transferAmount').value;

    if (!recipient || !amount) {
        logMessageEl.textContent = "Por favor, preencha o destinatário e a quantidade.";
        return;
    }

    try {
        logMessageEl.textContent = `Iniciando transferência de ${amount} TIE...`;
        // Converte o valor para Wei (18 casas)
        const amountInWei = ethers.utils.parseEther(amount);
        
        const tx = await contract.transfer(recipient, amountInWei);
        logMessageEl.textContent = "Aguardando confirmação da transação...";
        
        await tx.wait(); // Espera a transação ser minerada
        
        logMessageEl.textContent = `Transferência para ${recipient} concluída com sucesso!`;
        updateBalance(); // Atualiza o saldo após a transferência
        
    } catch (error) {
        console.error("Falha na transferência", error);
        logMessageEl.textContent = "Erro na transferência. Verifique o console.";
    }
}

// --- Event Listeners ---
connectButton.addEventListener('click', connectWallet);
refreshBalanceButton.addEventListener('click', updateBalance);
transferButton.addEventListener('click', transferTokens);