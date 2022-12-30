import Heading from ".";

export default {
  title: "Heading",
  component: Heading,
  args: {
    children: "Heading Storybook Test",
    light: false,
  },
  argType: {
    children: { type: "string" },
    light: { type: "boolean" },
  },
};

export const Light = (args) => <Heading {...args} />;
export const Dark = (args) => <Heading {...args} light={true} />;

Light.parameters = {
  backgrounds: {
    default: "light",
  },
};
