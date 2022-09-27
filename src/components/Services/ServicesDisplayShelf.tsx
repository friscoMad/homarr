import { Grid, Stack } from '@mantine/core';
import { serviceItem } from '../../tools/types';
import { CategoryItem } from './Categories';
import { LargeServiceItem } from './ServiceItems';

interface ServicesShelfProps {
  services: serviceItem[];
  categories: CategoryItem[];
}

export function ServiceShelf({ services, categories }: ServicesShelfProps) {
  return (
    <Stack>
      {categories.map((category) => (
        <>
          <h2>{category.name}</h2>
          <Grid columns={3}>
            {category.services.map((service) => (
              <LargeServiceItem key={service} service={services.find((s) => s.id === service)} />
            ))}
          </Grid>
        </>
      ))}
      {
        // All the services that are not in a category
        <Grid>
          {services
            .filter(
              (service) => !categories.some((category) => category.services.includes(service.id))
            )
            .map((service) => (
              <LargeServiceItem key={service.id} service={service} />
            ))}
        </Grid>
      }
    </Stack>
  );
}
