import Hero from 'components/atoms/Hero';
import InputText from 'components/atoms/Input/InputText';
import FormCheckResi from 'components/moleculs/Form/FormCheckResi';
import React from 'react';

export default function Home() {
  return (
    <div>
      <Hero
        title="Mudah dan Cepat, Cek Resi Anda Sekarang Juga"
        description="Kini Anda dapat mengetahui status pengiriman barang Anda dengan mudah dan cepat. Cukup dengan mengakses situs kami, Anda dapat mengetahui status pengiriman barang Anda dengan sekali klik saja. Jangan sampai Anda ketinggalan informasi penting tentang pengiriman barang Anda, cek resi Anda sekarang juga di situs kami"
      >
        <FormCheckResi />
      </Hero>
    </div>
  );
}
