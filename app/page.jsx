import { Card, Container, Flex, Heading, Text, Badge, Tooltip, Button, Separator } from "@radix-ui/themes";
import { LinkedInLogoIcon, DownloadIcon, InstagramLogoIcon } from "@radix-ui/react-icons";
import Image from "next/image";
import Link from "next/link";

const Index = () => {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-16 sm:p-14">
      <Container size="2">
        <Card mb="4" color="cyan">
          <Flex gap="2">
            <Text align="center" justify="center" className="font-mono items-center">Hello, I&apos;m a web developer based in the Philippines!</Text>
            </Flex>
          </Card>
        <Flex direction="column">
          <Heading mb="4"> Raisen Villar </Heading>
          <Flex gap="4" mb="4">
            <Tooltip content="LinkedIn">
              <Link href="https://www.linkedin.com/in/raisen-villar-6b442628b/">
              <LinkedInLogoIcon width={20} height={20}></LinkedInLogoIcon>
              </Link>
            </Tooltip>
            <Tooltip content="Download CV">
              <DownloadIcon width={20} height={20}></DownloadIcon>
            </Tooltip>
            <Tooltip content="Instagram">
              <InstagramLogoIcon width={20} height={20}></InstagramLogoIcon>
            </Tooltip>
          </Flex>
          <hr className="mt-2"/>
          <Flex direction="column">
            <Text weight="bold" color="cyan" mt="4">Skills</Text>
          </Flex>
          <Flex gap="4" mt="4">
            <Badge color="green">Django</Badge>
            <Badge color="crimson">Python</Badge>
            <Badge color="violet">Java</Badge>
            <Badge color="yellow">JavaScript</Badge>
            <Badge color="orange">HTML</Badge>
            <Badge color="cyan">CSS</Badge>
          </Flex>
        </Flex>
        <Flex gap="4" direction="column">
            <Flex gap="1" direction="column">
              <Text weight="bold" color="cyan" mt="4">About</Text>
              <Text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis explicabo harum minima, exercitationem voluptatem vero doloremque maiores perferendis nobis ducimus!</Text>
              <Button color="blue" mt="2" variant="soft" align="center" justify="center" className="md:max-w-16 sm:max-w-16 lg:max-w-16 items-center">Details</Button>
            </Flex>
            <Flex gap="1" direction="column">
              <Text weight="bold" color="cyan">Projects</Text>
              <Text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis explicabo harum minima, exercitationem voluptatem vero doloremque maiores perferendis nobis ducimus!</Text>
              <Flex gap="4">
                <Card asChild mt="2">
                  <a href="#">
                    <Text size="2" weight="bold">Coloryou</Text>
                    <Text size="2" as="div" color="gray">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod dolore vel nisi autem voluptates a praesentium ad quia deleniti sapiente!</Text>
                  </a>
                </Card>
                <Card asChild mt="2">
                  <a href="#">
                    <Text size="2" weight="bold">Coloryou</Text>
                    <Text size="2" as="div" color="gray">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod dolore vel nisi autem voluptates a praesentium ad quia deleniti sapiente!</Text>
                  </a>
                </Card>
                <Card asChild mt="2">
                  <a href="#">
                    <Text size="2" weight="bold">Coloryou</Text>
                    <Text size="2" as="div" color="gray">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod dolore vel nisi autem voluptates a praesentium ad quia deleniti sapiente!</Text>
                  </a>
                </Card>
              </Flex>
            </Flex>
            <Flex gap="1" direction="column">
              <Text weight="bold" color="cyan">Certificates / Achievements</Text>
              <Text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis explicabo harum minima, exercitationem voluptatem vero doloremque maiores perferendis nobis ducimus!</Text>
              <Flex gap="4">
                <Card>
                <Text size="2">
                  Tools for building high-quality, accessible UI.
                  <Separator my="3" size="4" />
                  <Flex gap="3" align="center">
                    Themes
                    <Separator orientation="vertical" />
                    Primitives
                    <Separator orientation="vertical" />
                    Icons
                    <Separator orientation="vertical" />
                    Colors
                  </Flex>
                </Text>
                </Card>
              </Flex>
            </Flex>
        </Flex>
      </Container>
    </main>
  )
}

export default Index;