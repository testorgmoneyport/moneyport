export default function ForgotPassword() {
    return (
        <div className="min-h-screen bg-gray-100 flex items-center justify-center">
            <div className="bg-white shadow-lg rounded-lg p-6 w-full max-w-md">
                <h2 className="text-2xl font-bold text-gray-800 text-center">Şifremi Unuttum</h2>
                <p className="text-sm text-gray-600 text-center mt-2">
                    Şifre sıfırlama talimatları için e-posta adresinizi girin.
                </p>
                <form className="mt-6">
                    <div className="mb-4">
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                            E-posta Adresi
                        </label>
                        <input
                            type="email"
                            id="email"
                            placeholder="example@mail.com"
                            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                            required
                        />
                    </div>
                    <button
                        type="submit"
                        className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg focus:outline-none focus:ring focus:ring-blue-300 transition duration-200"
                    >
                        Gönder
                    </button>
                </form>
                <p className="text-center text-sm text-gray-500 mt-4">
                    Şifre sıfırlama bağlantısı e-posta adresinize gönderilecektir.
                </p>
            </div>
        </div>
    );
}
