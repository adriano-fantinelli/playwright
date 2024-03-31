import * as React from "react";
import { useState } from "react";
import { useLogin, useNotify, Notification, defaultTheme } from "react-admin";
import { ThemeProvider } from "@material-ui/styles";
import { Theme, createTheme } from "@material-ui/core/styles";
import { Button } from "@material-ui/core";
import "./login.scss";

const defaultThemeInvariants = {
  typography: {
      h6: {
          fontWeight: 400,
      },
  },
  sidebar: {
      width: 240,
      closedWidth: 50,
  },
  components: {
      MuiAutocomplete: {
          variants: [
              {
                  props: {},
                  style: ({ theme }: { theme: Theme }) => ({
                      [theme.breakpoints.down('sm')]: { width: '100%' },
                  }),
              },
          ],
      },
      MuiTextField: {
          defaultProps: {
              variant: 'filled' as const,
              margin: 'dense' as const,
              size: 'small' as const,
          },
          variants: [
              {
                  props: {},
                  style: ({ theme }: { theme: Theme }) => ({
                      [theme.breakpoints.down('sm')]: { width: '100%' },
                  }),
              },
          ],
      },
      MuiFormControl: {
          defaultProps: {
              variant: 'filled' as const,
              margin: 'dense' as const,
              size: 'small' as const,
          },
      },
  },
};

const themeOptions = {
  palette: {
      background: {
          default: '#fafafb',
      },
      secondary: {
          light: '#6ec6ff',
          main: '#2196f3',
          dark: '#0069c0',
          contrastText: '#fff',
      },
  },
  ...defaultThemeInvariants,
  components: {
      ...defaultThemeInvariants.components,
      MuiFilledInput: {
          styleOverrides: {
              root: {
                  backgroundColor: 'rgba(0, 0, 0, 0.04)',
                  '&$disabled': {
                      backgroundColor: 'rgba(0, 0, 0, 0.04)',
                  },
              },
          },
      },
  },
};

const CLASS_NAME = "login-page";

const Login = ({ theme }: { theme?: object }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const login = useLogin();
  const notify = useNotify();
  const submit = (e: any) => {
    e.preventDefault();
    login({ username, password }).catch(() =>
      notify("Invalid email or password")
    );
  };

  return (
    <ThemeProvider theme={createTheme(themeOptions)}>
      <div className={`${CLASS_NAME}`}>
        <div className={`${CLASS_NAME}__wrapper`}>
          <div className={`${CLASS_NAME}__box`}>
            <img
              src="https://amplication.com/assets/graphql.png"
              alt="GraphQL API"
            />
            <h2>Connect via GraphQL</h2>
            <div className={`${CLASS_NAME}__box__message`}>
              Connect to the server using GraphQL API with a complete and
              understandable description of the data in your API
            </div>
            <Button
              type="button"
              variant="contained"
              color="primary"
              href="/graphql"
            >
              Continue
            </Button>
          </div>
          <div className={`${CLASS_NAME}__box`}>
            <img
              src="https://amplication.com/assets/react-admin.png"
              alt="React-Admin"
            />
            <h2>Admin UI</h2>
            <div className={`${CLASS_NAME}__box__message`}>
              Sign in to a React-Admin client with ready-made forms for creating
              and editing all the data models of your application.
            </div>
            <form onSubmit={submit}>
              <label>
                <span>Username</span>

                <input
                  name="username"
                  id="username"
                  type="textbox"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
              </label>
              <label>
                <span>password</span>

                <input
                  name="password"
                  id="password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </label>
              <Button type="submit" variant="contained" color="primary" id="logInButton">
                Log in
              </Button>
            </form>
          </div>
          <div className={`${CLASS_NAME}__box`}>
            <img
              src="https://amplication.com/assets/restapi.png"
              alt="REST API"
            />
            <h2>Connect via REST API</h2>
            <div className={`${CLASS_NAME}__box__message`}>
              Connect to the server using REST API with a built-in Swagger
              documentation
            </div>
            <Button
              type="button"
              variant="contained"
              color="primary"
              href="/api"
            >
              Continue
            </Button>
          </div>

          <Notification />
        </div>
        <div className={`${CLASS_NAME}__read-more`}>
          <span>Read </span>
          <a href="https://docs.amplication.com/docs/api" target="docs">
            Amplication docs
          </a>
          <span> to learn more</span>
        </div>
      </div>
    </ThemeProvider>
  );
};

export default Login;
