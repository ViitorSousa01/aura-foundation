import React from 'react';

interface ButtonProps {
  children: React.ReactNode; // Conteúdo exibido no botão
  size?: 'sm' | 'md' | 'lg'; // Tamanhos opcionais do botão
  variant?: 'primary' | 'secondary' | 'outline'; // Estilos de variantes
  onClick?: () => void; // Função executada no clique
  disabled?: boolean; // Desabilitar botão
  className?: string; // Classes CSS adicionais
  href?: string; // Link para o botão (usado para navegação interna/externa)
}

const Button: React.FC<ButtonProps> = ({
  children,
  size = 'md',
  variant = 'primary',
  onClick,
  disabled = false,
  className = '',
  href,
}) => {
  // Estilos base do botão
  const baseStyles =
    'font-bold rounded-lg focus:outline-none focus:ring-2 focus:ring-offset-2 transition';

  // Estilos de variantes
  const variantStyles = {
    primary: 'bg-blue-500 text-white hover:bg-blue-600 focus:ring-blue-500',
    secondary: 'bg-gray-500 text-white hover:bg-gray-600 focus:ring-gray-500',
    outline: 'bg-transparent border-2 border-blue-500 text-blue-500 hover:bg-blue-100 focus:ring-blue-500',
  };

  // Estilos de tamanhos
  const sizeStyles = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
  };

  // Combinação final de estilos
  const styles = `
    ${baseStyles} 
    ${variantStyles[variant]} 
    ${sizeStyles[size]} 
    ${disabled ? 'opacity-50 cursor-not-allowed' : ''} 
    ${className}
  `.trim();

  if (href) {
    return (
      <a href={href} className={styles}>
        {children}
      </a>
    );
  }

  return (
    <button
      className={styles}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export { Button };
