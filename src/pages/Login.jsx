import React from 'react'

const Login = () => {
    return (

        <div style={{ maxWidth: '400px', margin: '0 auto', padding: '20px' }}>
            <h2>Criar Conta</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Email: </label>
                    <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div>
                    <label>Senha: </label>
                    <input
                        type="password"
                        name="senha"
                        value={formData.senha}
                        onChange={handleChange}
                        required
                    />
                </div>

                <button type="submit" style={{ marginTop: '10px' }}>
                    Entrar
                </button>
            </form>
        </div>
    );
};

export default Login