import initCopiarTexto from './complet/texto-copia.js';
import { criptografa, descriptografa } from './complet/logica.js';
import { initCriptografaTexto, initDescriptografaTexto } from './complet/utilitarios.js';

// Inicializa a função de cópia de texto
initCopiarTexto();

// Função para criptografar texto
criptografa(initCriptografaTexto);

// Função para descriptografar texto
descriptografa(initDescriptografaTexto);