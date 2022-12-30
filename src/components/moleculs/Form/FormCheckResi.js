import { InputSelect, InputText } from 'components/atoms/Input';
import React from 'react';

export default function FormCheckResi() {
  return (
    <>
      <div className="grid grid-cols-12 gap-3">
        <div className="col-span-8">
          <InputText />
        </div>
        <div className="col-span-4">
          <InputSelect />
        </div>
      </div>
      <button className="btn btn-primary w-full mt-3" type="button">
        cek Resi
      </button>
    </>
  );
}
