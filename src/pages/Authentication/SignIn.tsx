import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import LogoDark from '../../images/logo/logo-dark.svg';
import Logo from '../../images/logo/logo.svg';
import LogoSVG from './icon/logo';
import EmailIcon from './icon/email';
import PasswordIcon from './icon/password';
import GoogleIcon from './icon/google';
import { login } from '../../services/auth';
import useAuthStore from '../../store/useAuthStore';
import { useMutation } from '@tanstack/react-query';

const SignIn: React.FC = () => {

  const { setToken, setUser, setIsAuthenticated } = useAuthStore();
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const location = useLocation();



  const mutation = useMutation({
    mutationFn: ({ email, password }: { email: string, password: string }) => {
      return login({ email, password });
    },
    onSuccess: (data) => {
      setUser(data.user);
      setToken(data.access_token);
      setIsAuthenticated(true);
      location.pathname = '/';
    },
    onError: (error) => {
      console.error('Login failed:', error);
    },
  });

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    mutation.mutate({ email, password });
  };

  return (
    <>
      <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
        <div className="flex flex-wrap items-center justify-center">
          <div className="hidden w-full  xl:block xl:w-1/2">
            <div className="py-17.5 px-26 text-center">
              <Link className="mb-5.5 inline-block" to="/">
                <img className="dark:hidden" src={LogoDark} alt="Logo" />
              </Link>

              <p className="2xl:px-20">
                Gestão inteligente de vendas e estoque para o seu negócio.
              </p>

              <span className="mt-15 inline-block">
                {
                  //<img className="hidden dark:block" src={Logo} alt="Logo" />
                  //<LogoSVG />
                }
              </span>
            </div>
          </div>

          <div className="w-full border-stroke dark:border-strokedark xl:w-1/2 xl:border-l-2">
            <div className="w-full p-4 sm:p-12.5 xl:p-17.5">
              <h2 className="mb-9 text-2xl font-bold text-black dark:text-white sm:text-title-xl2">
                Bem vindo de volta
              </h2>

              <form>
                <div className="mb-4">
                  <label className="mb-2.5 block font-medium text-black dark:text-white">
                    E-mail
                  </label>
                  <div className="relative">
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                      placeholder="Digite seu e-mail"
                      className="w-full rounded-lg border border-stroke bg-transparent py-4 pl-6 pr-10 text-black outline-none focus:border-primary focus-visible:shadow-none dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                    />

                    <span className="absolute right-4 top-4">
                      <EmailIcon />
                    </span>
                  </div>
                </div>

                <div className="mb-6">
                  <label className="mb-2.5 block font-medium text-black dark:text-white">
                    Senha
                  </label>
                  <div className="relative">
                    <input
                      type="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      required
                      placeholder="Digite sua senha"
                      className="w-full rounded-lg border border-stroke bg-transparent py-4 pl-6 pr-10 text-black outline-none focus:border-primary focus-visible:shadow-none dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                    />

                    <span className="absolute right-4 top-4">
                      <PasswordIcon />
                    </span>
                  </div>
                </div>

                <div className="mb-5">
                  <input
                    onClick={handleSubmit}
                    type="submit"
                    value="Entrar"
                    className="w-full cursor-pointer rounded-lg border border-primary bg-primary p-4 text-white transition hover:bg-opacity-90"
                  />
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignIn;