import {
  Anchor,
  AspectRatio,
  Avatar,
  Card,
  Center,
  createStyles,
  Grid,
  Group,
  Image,
  Text,
  useMantineColorScheme,
} from '@mantine/core';
import { motion } from 'framer-motion';
import { useState } from 'react';
import PingComponent from '../../modules/ping/PingModule';
import { useConfig } from '../../tools/state';
import { serviceItem } from '../../tools/types';
import AppShelfMenu from '../AppShelf/AppShelfMenu';

interface ServiceItemProps {
  service: serviceItem | undefined;
}

export function SmallServiceItem({ service }: ServiceItemProps) {
  const [hovering, setHovering] = useState(false);

  if (!service) {
    return null;
  }

  return (
    <Grid.Col span="auto">
      <ServiceCard service={service} hovering={hovering} setHovering={setHovering}>
        <Group noWrap>
          {service.icon && <Avatar src={service.icon} />}
          <Text>{service.name}</Text>
        </Group>
      </ServiceCard>
    </Grid.Col>
  );
}

export function MediumServiceItem({ service }: ServiceItemProps) {
  const [hovering, setHovering] = useState(false);

  if (!service) {
    return null;
  }

  return (
    <Grid.Col span="auto">
      <ServiceCard service={service} hovering={hovering} setHovering={setHovering}>
        <Card.Section>
          <Anchor
            target={service.newTab === false ? '_top' : '_blank'}
            href={service.openedUrl ? service.openedUrl : service.url}
            style={{ color: 'inherit', fontStyle: 'inherit', fontSize: 'inherit' }}
          >
            <Text mt="sm" align="center" lineClamp={1} weight={550}>
              {service.name}
            </Text>
          </Anchor>
          <motion.div
            style={{
              position: 'absolute',
              top: 15,
              right: 15,
              alignSelf: 'flex-end',
            }}
            animate={{
              opacity: hovering ? 1 : 0,
            }}
          >
            <AppShelfMenu service={service} />
          </motion.div>
        </Card.Section>
        <Center>
          <Card.Section>
            <AspectRatio
              ratio={3 / 5}
              m="xl"
              style={{
                width: 150,
                height: 90,
              }}
            >
              <motion.i
                whileHover={{
                  scale: 1.1,
                }}
              >
                <Anchor
                  href={service.openedUrl ?? service.url}
                  target={service.newTab === false ? '_top' : '_blank'}
                >
                  <Image
                    styles={{ root: { cursor: 'pointer' } }}
                    width={80}
                    height={80}
                    src={service.icon}
                    fit="contain"
                  />
                </Anchor>
              </motion.i>
            </AspectRatio>
            {service.ping !== false && <PingComponent url={service.url} status={service.status} />}
          </Card.Section>
        </Center>
      </ServiceCard>
    </Grid.Col>
  );
}

export function LargeServiceItem({ service }: ServiceItemProps) {
  const [hovering, setHovering] = useState(false);

  if (!service) {
    return null;
  }

  return (
    <Grid.Col span="auto">
      <ServiceCard service={service} hovering={hovering} setHovering={setHovering}>
        <Card.Section>
          <Anchor
            target={service.newTab === false ? '_top' : '_blank'}
            href={service.openedUrl ? service.openedUrl : service.url}
            style={{ color: 'inherit', fontStyle: 'inherit', fontSize: 'inherit' }}
          >
            <Text mt="sm" align="center" lineClamp={1} weight={550}>
              {service.name}
            </Text>
          </Anchor>
          <motion.div
            style={{
              position: 'absolute',
              top: 15,
              right: 15,
              alignSelf: 'flex-end',
            }}
            animate={{
              opacity: hovering ? 1 : 0,
            }}
          >
            <AppShelfMenu service={service} />
          </motion.div>
        </Card.Section>
        <Center>
          <Card.Section>
            <AspectRatio
              ratio={3 / 5}
              m="xl"
              style={{
                width: 150,
                height: 90,
              }}
            >
              <motion.i
                whileHover={{
                  scale: 1.1,
                }}
              >
                <Anchor
                  href={service.openedUrl ?? service.url}
                  target={service.newTab === false ? '_top' : '_blank'}
                >
                  <Image
                    styles={{ root: { cursor: 'pointer' } }}
                    width={80}
                    height={80}
                    src={service.icon}
                    fit="contain"
                  />
                </Anchor>
              </motion.i>
            </AspectRatio>
            {service.ping !== false && <PingComponent url={service.url} status={service.status} />}
          </Card.Section>
        </Center>
      </ServiceCard>
    </Grid.Col>
  );
}

const useStyles = createStyles((theme) => ({
  item: {
    transition: 'box-shadow 150ms ease, transform 100ms ease',

    '&:hover': {
      boxShadow: `${theme.shadows.md} !important`,
      transform: 'scale(1.05)',
    },
    [theme.fn.smallerThan('sm')]: {
      WebkitUserSelect: 'none',
    },
  },
}));

function ServiceCard({
  service,
  children,
  hovering,
  setHovering,
}: ServiceItemProps & {
  children: React.ReactNode;
  hovering: boolean;
  setHovering: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  const { config } = useConfig();
  const { colorScheme } = useMantineColorScheme();
  const { classes } = useStyles();

  if (!service) {
    return null;
  }

  return (
    <motion.div
      animate={{
        scale: [0.9, 1.06, 1],
        rotate: [0, 5, 0],
      }}
      transition={{ duration: 0.6, type: 'spring', damping: 10, mass: 0.75, stiffness: 100 }}
      key={service.name}
      onHoverStart={() => {
        setHovering(true);
      }}
      onHoverEnd={() => {
        setHovering(false);
      }}
    >
      <Card
        withBorder
        radius="lg"
        shadow="md"
        className={classes.item}
        style={{
          background: `rgba(${colorScheme === 'dark' ? '37, 38, 43,' : '255, 255, 255,'} ${
            (config.settings.appOpacity || 100) / 100
          }`,
          borderColor: `rgba(${colorScheme === 'dark' ? '37, 38, 43,' : '233, 236, 239,'} ${
            (config.settings.appOpacity || 100) / 100
          }`,
        }}
      >
        {children}
      </Card>
    </motion.div>
  );
}
