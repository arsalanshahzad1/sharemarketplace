import { useMemo } from 'react';
import { useI18n } from '@/context/I18nContext';

/** Marketplace payments currently support Conekta card only. */
export default function usePaymentMethods() {
  const { t } = useI18n();

  return useMemo(
    () => [
      {
        key: 'conekta',
        name: 'Conekta Card',
        desc: t('pmConektaDesc'),
        icon: 'CARD',
      },
    ],
    [t],
  );
}

