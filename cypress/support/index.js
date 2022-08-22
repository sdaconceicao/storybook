import { setGlobalConfig } from "@storybook/testing-react";
import * as sbPreview from "../../.storybook/preview";
import "@testing-library/cypress/add-commands";

setGlobalConfig(sbPreview);
