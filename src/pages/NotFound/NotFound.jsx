import { useNavigate } from 'react-router-dom';
import Button from '@/components/common/Button/Button';
import Card from '@/components/common/Card/Card';
import { Page } from '@/components/layout/PageWrapper/PageWrapper';
import { useI18n } from '@/context/I18nContext';
import { ROUTES } from '@/constants';

export default function NotFound() {
  const { t } = useI18n();
  const navigate = useNavigate();

  return (
    <Page width="narrow">
      <Card padding="none" className="px-[26px] py-16 text-center">
        <div className="font-mono text-[56px] font-bold tracking-[-0.02em] text-brand">
          404
        </div>
        <div className="mt-2 text-xl font-extrabold tracking-[-0.01em]">
          {t('nfTitle')}
        </div>
        <div className="mt-2 text-[13.5px] font-semibold leading-relaxed text-body">
          {t('nfBody')}
        </div>
        <div className="mt-6">
          <Button size="lg" onClick={() => navigate(ROUTES.HOME)}>
            {t('nfBack')}
          </Button>
        </div>
      </Card>
    </Page>
  );
}
