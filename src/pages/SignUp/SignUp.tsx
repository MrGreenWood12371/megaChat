import { Box, Typography, Stack, TextField, Button } from "@mui/material";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import MainContainer from "../../components/MainContainer/MainContainer";
import Link from "../../components/Link/Link";
import {
  SignUpFormButtonsStyle,
  SignUpHeaderStyle,
  SignUpStyle,
} from "./style";

interface ISignUpForm {
  login: string;
  password: string;
  firstName: string;
  secondName: string;
}

const SignUp = () => {
  const { control, handleSubmit } = useForm({
    defaultValues: {
      login: "",
      password: "",
      firstName: "",
      secondName: "",
    },
  });
  const onSubmit: SubmitHandler<ISignUpForm> = (data) => {
    console.log(data);
  };

  return (
    <MainContainer>
      <Box sx={SignUpStyle}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Typography sx={SignUpHeaderStyle} variant="h2">
            Регистрация
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
            <Controller
              control={control}
              name="firstName"
              render={({ field }) => (
                <TextField fullWidth label="Имя" {...field} />
              )}
            />
            <Controller
              control={control}
              name="secondName"
              render={({ field }) => (
                <TextField fullWidth label="Фамилия" {...field} />
              )}
            />
          </Stack>
          <Box>
            <Link to="/">Авторизоваться</Link>
          </Box>
          <Box sx={SignUpFormButtonsStyle}>
            <Button type="submit" variant="outlined">
              Зарегестрироваться
            </Button>
          </Box>
        </form>
      </Box>
    </MainContainer>
  );
};

export default SignUp;
