import React, { useMemo, useState } from "react";
import Select from "react-select";
import countryList from "react-select-country-list";

interface Props {
  onChange: (countryCode: string) => void;
}

const CountrySelector: React.FC<Props> = ({ onChange }) => {
  const options = useMemo(() => countryList().getData(), []);
  const [selected, setSelected] = useState<{
    label: string;
    value: string;
  } | null>(null);

  const handleChange = (value: { label: string; value: string } | null) => {
    setSelected(value);
    if (value) onChange(value.value);
  };

  return (
    <div className="mb-3">
      <Select
        options={options}
        value={selected}
        onChange={handleChange}
        placeholder="Sélectionner un pays..."
        isClearable
      />
    </div>
  );
};

export default CountrySelector;
