import { Card, Flex, Link, Container, Tooltip } from "@radix-ui/themes"
import { SunIcon, HomeIcon, RocketIcon, PersonIcon, GitHubLogoIcon } from "@radix-ui/react-icons"

const Header = () => {
  return (
  <header className="flex items-center justify-center px-14 py-8">
    <Card style={{ maxWidth: 750 }}>
      <Flex gap="6" align="center">
        <Link color="gray">
          <Tooltip content="Index">
            <HomeIcon width={22} height={22}/>
          </Tooltip>
        </Link>
        <Link color="gray">
          <Tooltip content="Projects">
            <RocketIcon width={22} height={22}/>
          </Tooltip>
        </Link>
        <Link color="gray">
          <Tooltip content="Details">
            <PersonIcon width={22} height={22}/>
          </Tooltip>
        </Link>
        <Link color="gray">
          <Tooltip content="Github">
            <GitHubLogoIcon width={22} height={22}/>
          </Tooltip>
        </Link>
        <Link color="gray">
          <SunIcon />
        </Link>
      </Flex>
    </Card>
    </header>
  )
}

export default Header;