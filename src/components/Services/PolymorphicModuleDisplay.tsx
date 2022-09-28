import { Stack } from '@mantine/core';
import * as Modules from '../../modules';
import { ModuleWrapper } from '../../modules/moduleWrapper';

interface PolymorphicModuleDisplayProps {
  enabledModules: (string | undefined)[];
}

export function PolymorphicModuleDisplay({ enabledModules }: PolymorphicModuleDisplayProps) {
  const modules = Object.values(Modules).map((module) => module);
  return (
    <Stack my={16} style={{ width: 300 }}>
      {modules.map((module) => {
        if (enabledModules.includes(module.id)) {
          return <ModuleWrapper isShown key={module.id} module={module} />;
        }
        return null;
      })}
    </Stack>
  );
}
