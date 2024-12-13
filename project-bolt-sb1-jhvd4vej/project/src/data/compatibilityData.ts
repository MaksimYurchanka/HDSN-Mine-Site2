export const humanDesignTypes: HumanDesignType[] = [
    {
      id: 'generator',
      name: 'Генератор',
      description: 'Творческая энергетическая сила',
    },
    {
      id: 'manifestor',
      name: 'Манифестор',
      description: 'Инициирующий тип с импульсивной энергией',
    },
    // Другие типы...
  ];
  
  export const compatibilityMatrix: Record<string, CompatibilityScore[]> = {
    generator: [
      {
        type: 'manifestor',
        matchPercentage: 75,
        strengths: [
          'Взаимодополняющие энергетические потоки',
          'Баланс между действием и реакцией',
        ],
        challenges: [
          'Разные подходы к принятию решений',
          'Потенциальные конфликты инициатив',
        ],
      },
      // Другие совместимости для генератора
    ],
    // Матрица для других типов
  };
  