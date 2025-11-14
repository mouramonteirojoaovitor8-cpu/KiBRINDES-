import React, { useState, useEffect } from 'react';

interface HomePageProps {
  onLoginSuccess: () => void;
}

const HomePage: React.FC<HomePageProps> = ({ onLoginSuccess }) => {
  const [authMode, setAuthMode] = useState<'login' | 'register'>('login');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const [errors, setErrors] = useState({ email: '', password: '', auth: '' });

  // State for the modal
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [resetEmail, setResetEmail] = useState('');
  const [resetError, setResetError] = useState('');
  const [resetStep, setResetStep] = useState<'form' | 'sent'>('form');

  useEffect(() => {
    const rememberedEmail = localStorage.getItem('rememberedEmail');
    const rememberedPassword = localStorage.getItem('rememberedPassword');
    if (rememberedEmail && rememberedPassword) {
      setEmail(rememberedEmail);
      setPassword(rememberedPassword);
      setRememberMe(true);
    }
  }, []);

  const validateEmail = (email: string) => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  };

  const handleSubmit = () => {
    const newErrors = { email: '', password: '', auth: '' };
    let isValid = true;

    if (!email) {
      newErrors.email = 'Por favor, insira um e-mail.';
      isValid = false;
    } else if (!validateEmail(email)) {
      newErrors.email = 'Por favor, insira um e-mail válido.';
      isValid = false;
    }

    if (!password) {
      newErrors.password = 'Por favor, insira uma senha.';
      isValid = false;
    }
    
    setErrors(newErrors);

    if (!isValid) return;

    const usersString = localStorage.getItem('kibrindes_users');
    const users = usersString ? JSON.parse(usersString) : [];

    if (authMode === 'register') {
      const userExists = users.some((user: any) => user.email === email);
      if (userExists) {
        setErrors({ ...newErrors, auth: 'Este e-mail já está em uso.' });
      } else {
        users.push({ email, password });
        localStorage.setItem('kibrindes_users', JSON.stringify(users));
        alert('Registro bem-sucedido! Por favor, faça o login.');
        setAuthMode('login');
      }
    } else { // Login mode
      const user = users.find((user: any) => user.email === email);
      if (user && user.password === password) {
        if (rememberMe) {
          localStorage.setItem('rememberedEmail', email);
          localStorage.setItem('rememberedPassword', password);
        } else {
          localStorage.removeItem('rememberedEmail');
          localStorage.removeItem('rememberedPassword');
        }
        onLoginSuccess();
      } else {
        setErrors({ ...newErrors, auth: 'E-mail ou senha inválidos.' });
      }
    }
  };

  const handlePasswordReset = () => {
    if (!resetEmail) {
      setResetError('Por favor, insira um e-mail.');
      return;
    }
    if (!validateEmail(resetEmail)) {
      setResetError('Por favor, insira um e-mail válido.');
      return;
    }
    
    // Simulate sending email
    console.log(`Password reset link sent to ${resetEmail}.`);
    setResetError('');
    setResetStep('sent');
  };
  
  const openModal = () => {
    setIsModalOpen(true);
    setResetEmail('');
    setResetError('');
    setResetStep('form');
  }
  
  const closeModal = () => {
    setIsModalOpen(false);
  }

  return (
    <>
      <div className="min-h-screen bg-white">
        <div className="pt-24 pb-16 px-8 text-center max-w-4xl mx-auto">
          <div className="mb-8">
            <img 
              src="https://storage.googleapis.com/aistudio-hosting/workspace-assets/56e7b51b-607e-40e9-b2f7-7206141a0e70/0.jpeg" 
              alt="Ki Brindes - Chaveiros Personalizados"
              className="w-full max-w-md mx-auto rounded-xl shadow-2xl"
            />
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900 mb-6 leading-tight">
            Transformando Marcas em Memórias
          </h1>
          <p className="text-lg md:text-xl text-gray-700 mb-12 leading-relaxed">
            A Ki Brindes especializa-se em transformar marcas em memórias inesquecíveis através de brindes personalizados. Ajudamos empresas a criar impressões duradouras com produtos promocionais de alta qualidade, adaptados à sua identidade de marca única. Descubra como podemos elevar a visibilidade e o impacto da sua marca.
          </p>
          <div className="flex flex-col gap-6 items-center max-w-sm mx-auto">
            <div className="flex w-full mb-4 border border-gray-200 rounded-full p-1 bg-gray-100">
                <button 
                    onClick={() => setAuthMode('login')}
                    className={`w-1/2 py-3 rounded-full font-semibold transition-all duration-300 ${authMode === 'login' ? 'bg-white text-red-600 shadow' : 'text-gray-500 hover:text-gray-800'}`}
                >
                    Entrar
                </button>
                <button 
                    onClick={() => setAuthMode('register')}
                    className={`w-1/2 py-3 rounded-full font-semibold transition-all duration-300 ${authMode === 'register' ? 'bg-white text-red-600 shadow' : 'text-gray-500 hover:text-gray-800'}`}
                >
                    Registrar
                </button>
            </div>
            <div className="w-full space-y-4">
              <div>
                <input 
                  type="email" 
                  placeholder="Digite seu email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className={`px-6 py-4 text-lg rounded-full border w-full ${errors.email ? 'border-red-500 ring-2 ring-red-200' : 'border-gray-300 focus:ring-red-500'} focus:outline-none focus:ring-2`}
                  aria-invalid={!!errors.email}
                  aria-describedby={errors.email ? "email-error" : undefined}
                />
                {errors.email && <p id="email-error" className="text-red-600 text-sm mt-2 text-left ml-4">{errors.email}</p>}
              </div>
              <div>
                <input 
                  type="password" 
                  placeholder="Digite sua senha"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className={`px-6 py-4 text-lg rounded-full border w-full ${errors.password ? 'border-red-500 ring-2 ring-red-200' : 'border-gray-300 focus:ring-red-500'} focus:outline-none focus:ring-2`}
                  aria-invalid={!!errors.password}
                  aria-describedby={errors.password ? "password-error" : undefined}
                />
                {errors.password && <p id="password-error" className="text-red-600 text-sm mt-2 text-left ml-4">{errors.password}</p>}
              </div>
              
              {authMode === 'login' && (
                <div className="flex items-center justify-between px-4">
                  <div className="flex items-center">
                    <input
                      id="remember-me"
                      name="remember-me"
                      type="checkbox"
                      checked={rememberMe}
                      onChange={(e) => setRememberMe(e.target.checked)}
                      className="h-4 w-4 text-red-600 focus:ring-red-500 border-gray-300 rounded"
                    />
                    <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-900">
                      Lembrar senha
                    </label>
                  </div>
                  <button 
                    onClick={openModal}
                    className="text-sm text-red-600 hover:text-red-800 font-medium transition-colors"
                    aria-haspopup="dialog"
                    aria-expanded={isModalOpen}
                  >
                    Esqueceu a senha?
                  </button>
                </div>
              )}
            </div>
            {errors.auth && <p className="text-red-600 text-sm">{errors.auth}</p>}
            <button
              onClick={handleSubmit}
              className="w-full px-8 py-4 bg-red-600 text-white font-semibold rounded-full hover:bg-red-700 transition-colors duration-300 shadow-lg transform hover:scale-105"
            >
              {authMode === 'login' ? 'Entrar' : 'Criar Conta'}
            </button>
          </div>
        </div>
      </div>

      {isModalOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50 transition-opacity duration-300"
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-title"
          onClick={closeModal}
        >
          <div 
            className="bg-white rounded-2xl shadow-2xl p-8 max-w-md w-full mx-4 transform transition-all duration-300 scale-100"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-between items-center mb-6">
              <h2 id="modal-title" className="text-2xl font-bold text-gray-800">
                {resetStep === 'form' ? 'Redefinir Senha' : 'Verifique seu E-mail'}
              </h2>
              <button 
                onClick={closeModal} 
                className="text-gray-400 hover:text-gray-600"
                aria-label="Fechar"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
              </button>
            </div>
            
            {resetStep === 'form' ? (
              <>
                <p className="text-gray-600 mb-6" id="modal-description">Insira o seu e-mail abaixo e enviaremos um link para redefinir a sua senha.</p>
                <div className="space-y-4">
                  <div>
                    <label htmlFor="reset-email" className="sr-only">Email para redefinição</label>
                    <input 
                      id="reset-email"
                      type="email"
                      placeholder="Digite seu email de redefinição"
                      value={resetEmail}
                      onChange={(e) => setResetEmail(e.target.value)}
                      className={`px-6 py-4 text-lg rounded-full border w-full ${resetError ? 'border-red-500 ring-2 ring-red-200' : 'border-gray-300 focus:ring-red-500'} focus:outline-none focus:ring-2`}
                      aria-invalid={!!resetError}
                      aria-describedby={resetError ? "reset-error" : undefined}
                    />
                    {resetError && <p id="reset-error" className="text-red-600 text-sm mt-2 ml-4">{resetError}</p>}
                  </div>
                  <button
                    onClick={handlePasswordReset}
                    className="w-full px-8 py-4 bg-red-600 text-white font-semibold rounded-full hover:bg-red-700 transition-colors duration-300 shadow-lg"
                  >
                    Enviar Link de Redefinição
                  </button>
                </div>
              </>
            ) : (
              <div className="text-center">
                 <p className="text-gray-700 leading-relaxed">
                   Enviámos um link de redefinição de senha para <strong className="text-gray-900">{resetEmail}</strong>. 
                   <br/><br/>
                   Por favor, verifique a sua caixa de entrada (e a pasta de spam) para continuar.
                 </p>
                 <button
                    onClick={closeModal}
                    className="mt-8 w-full px-8 py-4 bg-gray-200 text-gray-800 font-semibold rounded-full hover:bg-gray-300 transition-colors duration-300"
                  >
                    Fechar
                  </button>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default HomePage;