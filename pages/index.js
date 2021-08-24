import {
  Button,
  Divider,
  FormControl,
  FormHelperText,
  Icon,
  Input,
  InputGroup,
  InputLeftAddon,
  Stack,
} from "@chakra-ui/react";

export default function index() {
  return (
    <form action="submit">
      <Stack spacing={3}>
        <FormControl isRequired>
          <InputGroup>
            {/*<InputLeftElement children={<Icon name="info" />} />*/}
            <Input
              type="name"
              placeholder="First name"
              aria-label="First name"
            />
          </InputGroup>
        </FormControl>

        <FormControl isRequired>
          <InputGroup>
            {/*<InputLeftElement children={<Icon name="info" />} />*/}
            <Input type="name" placeholder="Last name" aria-label="Last name" />
          </InputGroup>
        </FormControl>

        <Divider />

        <FormControl isRequired>
          <InputGroup>
            {/*<InputLeftElement children={<Icon name="email" />} />*/}
            <Input type="email" placeholder="Email" aria-label="Email" />
          </InputGroup>
        </FormControl>

        <FormControl isRequired>
          <InputGroup>
            {/*<InputLeftElement children={<Icon name="lock" />} />*/}
            <Input
              type="password"
              placeholder="Password"
              aria-label="Password"
            />
          </InputGroup>
        </FormControl>

        <Button type="submit">Sign up</Button>
        <FormHelperText>
          hi ThemeProvider
          <br />
        </FormHelperText>
      </Stack>
    </form>
  );
}
