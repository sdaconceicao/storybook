import { Button } from '../../src/index';
import { Title, Primary, ArgsTable, Stories } from '@storybook/addon-docs';
import MDX from './Buttons.mdx';

export default {
  title: 'components/Button',
  component: Button,
  parameters: {
    docs: {
      page: MDX
    }
  },
}

export const BasicUsage = (args) => <Button {...args}>Lorem</Button>
export const SecondOne = () => <Button>Ipsum</Button>
export const ThirdOne = () => <Button>Dolor</Button>

ThirdOne.parameters = {
  docs: {
    page: (args) => (
      <>
        <Title>Third One</Title>
        <Button {...args}>ThirdItem</Button>
        <ArgsTable />
        <Primary />
        <Stories />
      </>
    )
  }
}
