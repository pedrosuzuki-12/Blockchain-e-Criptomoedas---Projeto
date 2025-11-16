// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;
import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract ImovelToken is ERC20 {

//Define o nome, o símbolo e cria o fornecimento total de tokens.

    constructor() ERC20("Token Imovel Teste", "TIT") {
        // Criar 10.000 tokens.
        uint256 initialSupply = 10000 * (10**18);

        // A função _mint cria os tokens e atribui à carteira que está
        _mint(msg.sender, initialSupply);
    }
}