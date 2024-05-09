import { Flex, Image, Text } from '@mantine/core'
import { Poppins } from "next/font/google";
import Link from 'next/link';

const poppins = Poppins({subsets: ['latin'], weight: ['600']});

export default function Logo({changeActiveTab}) {
  return (
    <Flex
      direction='row'
      gap={12}
      align='center'
      component={Link}
      href='/'
      style={{ textDecoration: 'none' }}
      onClick={changeActiveTab}
    >
      <Image src='./logo.svg' alt='LogoIcon'/>
      <Text lh='36px' size='24px' c='purple.4' className={poppins.className}>ArrowFlicks</Text>
    </Flex>
  )
}
