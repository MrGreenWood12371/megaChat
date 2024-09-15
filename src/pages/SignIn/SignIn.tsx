import MainContainer from "../../components/MainContainer/MainContainer";
import { useForm, Controller, SubmitHandler } from "react-hook-form";
import { Box, Button, Stack, TextField, Typography } from "@mui/material";
import {
  SignInFormButtonsStyle,
  SignInHeaderStyle,
  SignInStyle,
} from "./style";
import Link from "../../components/Link/Link";
import { Routes } from "../../types/enums";

interface ISignInForm {
  login: string;
  password: string;
}

const SignIn = () => {
  const { control, handleSubmit } = useForm({
    defaultValues: {
      login: "",
      password: "",
    },
  });
  const onSubmit: SubmitHandler<ISignInForm> = (data) => {
    console.log(data);
  };
  return (
    <MainContainer>
      <Box sx={SignInStyle}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Typography sx={SignInHeaderStyle} variant="h2">
            Авторизация
          </Typography>
          <Stack spacing={2}>
            <Controller
              control={control}
              name="login"
              render={({ field }) => (
                <TextField fullWidth label="Логин" {...field} />
              )}
            />
            <Controller
              control={control}
              name="password"
              render={({ field }) => (
                <TextField fullWidth label="Пароль" {...field} />
              )}
            />
          </Stack>
          <Box>
            <Link to={Routes.SignUp}>Зарегестрироваться</Link>
          </Box>
          <Box sx={SignInFormButtonsStyle}>
            <Button type="submit" variant="outlined">
              Авторизоваться
            </Button>
          </Box>
        </form>
      </Box>
    </MainContainer>
  );
};

export default SignIn;
