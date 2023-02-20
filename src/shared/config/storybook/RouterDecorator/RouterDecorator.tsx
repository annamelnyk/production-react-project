import { Story } from "@storybook/react";
import { BrowserRouter } from "react-router-dom";

export const RouterDecorator = (story: () => Story) => {
  const myStory = story();

  return (
    <BrowserRouter>{myStory}</BrowserRouter>
    )
}
