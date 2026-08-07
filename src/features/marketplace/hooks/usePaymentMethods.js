import { useMemo } from 'react';
import { useI18n } from '@/context/I18nContext';

/** Payment rails available at checkout, localised. */
export default function usePaymentMethods() {
  const { t } = useI18n();

  return useMemo(
    () => [
      { key: 'stp', name: 'STP · SPEI', desc: t('pmStpDesc'), icon: 'SPEI' },
      { key: 'conekta', name: 'Conekta', desc: t('pmConektaDesc'), icon: 'CARD' },
      { key: 'oxxo', name: 'OXXO', desc: t('pmOxxoDesc'), icon: 'OXXO' },
      { key: 'ramp', name: t('pmRampName'), desc: t('pmRampDesc'), icon: '⬡' },
    ],
    [t],
  );
}
