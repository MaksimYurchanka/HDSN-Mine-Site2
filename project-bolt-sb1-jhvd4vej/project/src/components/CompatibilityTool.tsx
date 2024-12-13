import React, { useState } from 'react';
import {
  HumanDesignType,
  CompatibilityScore,
  UserCompatibilityProfile,
} from '../types/compatibility';
import {
  humanDesignTypes,
  compatibilityMatrix,
} from '../data/compatibilityData';

export const CompatibilityTool: React.FC = () => {
  const [selectedType, setSelectedType] = useState<HumanDesignType | null>(
    null
  );
  const [compatibilityProfile, setCompatibilityProfile] =
    useState<UserCompatibilityProfile | null>(null);

  const calculateCompatibility = (type: HumanDesignType) => {
    const compatibleTypes: CompatibilityScore[] =
      compatibilityMatrix[type.id] || [];

    setCompatibilityProfile({
      userType: type,
      compatibleTypes,
    });
  };

  return (
    <div className="compatibility-tool bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4">
        Совместимость типов Human Design
      </h2>

      <div className="type-selector mb-6">
        <label className="block mb-2">Выберите ваш тип:</label>
        <select
          onChange={(e) => {
            const type = humanDesignTypes.find((t) => t.id === e.target.value);
            if (type) {
              setSelectedType(type);
              calculateCompatibility(type);
            }
          }}
          className="w-full p-2 border rounded"
        >
          <option value="">Выберите тип</option>
          {humanDesignTypes.map((type) => (
            <option key={type.id} value={type.id}>
              {type.name}
            </option>
          ))}
        </select>
      </div>

      {compatibilityProfile && (
        <div className="compatibility-results">
          <h3 className="text-xl font-semibold mb-4">
            Совместимость для типа: {compatibilityProfile.userType.name}
          </h3>

          <div className="grid md:grid-cols-2 gap-4">
            {compatibilityProfile.compatibleTypes.map((compatibility) => (
              <div
                key={compatibility.type}
                className="bg-gray-100 p-4 rounded-lg"
              >
                <h4 className="font-bold mb-2">
                  {compatibility.type.charAt(0).toUpperCase() +
                    compatibility.type.slice(1)}
                </h4>
                <p>Совместимость: {compatibility.matchPercentage}%</p>

                <div className="mt-2">
                  <strong>Сильные стороны:</strong>
                  <ul className="list-disc list-inside">
                    {compatibility.strengths.map((strength) => (
                      <li key={strength}>{strength}</li>
                    ))}
                  </ul>
                </div>

                <div className="mt-2">
                  <strong>Возможные сложности:</strong>
                  <ul className="list-disc list-inside">
                    {compatibility.challenges.map((challenge) => (
                      <li key={challenge}>{challenge}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
