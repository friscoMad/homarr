import React from 'react';
import { Text, Slider, Stack } from '@mantine/core';
import { useTranslation } from 'next-i18next';
import { useConfig } from '../../tools/state';

export function AppCardWidthSelector() {
  const { config, setConfig } = useConfig();
  const { t } = useTranslation('settings/customization/app-width');

  const setappCardWidth = (appCardWidth: number) => {
    setConfig({
      ...config,
      settings: {
        ...config.settings,
        appCardWidth,
      },
    });
  };

  return (
    <Stack spacing="xs">
      <Text>{t('label')}</Text>
      <Slider
        label={null}
        defaultValue={config.settings.appCardWidth}
        step={1}
        min={6}
        max={24}
        styles={{ markLabel: { fontSize: 'xx-small' } }}
        onChange={(value) => setappCardWidth(value)}
      />
    </Stack>
  );
}
